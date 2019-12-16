import cookieParser from 'cookie-parser';
import 'isomorphic-fetch';
import { URLSearchParams } from 'url';
import express from 'express';
import { Request, Response } from 'express';
import logger from 'morgan';
import path from 'path';

import './db';

import BaseRouter from './routes';
import { slackEvents } from './Bot';

// Init express
const app = express();

app.use('/webhook/slack/actions', slackEvents.requestListener());

// Add middleware/settings/routes to express.
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', BaseRouter);

app.get('/auth/slack', async (req, res) => {
  try {
    console.log('TCL: req', req.params);
    console.log('TCL: req', req.query);
    const { code } = req.query;
    const url = 'https://slack.com/api/oauth.access';
    const {
      SLACK_CLIENT_ID: client_id,
      SLACK_SIGNING_SECRET: client_secret,
    } = process.env;

    if (!client_id || !client_secret) {
      throw new Error('The client id or the client secret are not available');
    }

    const params = new URLSearchParams();
    params.append('code', code);
    params.append('client_id', client_id);
    params.append('client_secret', client_secret);

    const request = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json; charset=utf-8',
      },
      body: params,
    });

    const response = await request.json();

    if (!response.ok) {
      throw new Error(response.error);
    }

    res.send({ message: 'aaya', code, client_id, client_secret, response });
  } catch (error) {
    res.status(500).send({
      message: error.message,
      code: 500,
    });
  }
});
// app.use("/webhook", WebhookRouter);
app.get('/', (req, res) => {
  console.log('here');
  res.send({ message: 'here' });
});
app.post('/', (req, res) => {
  console.log('here');
  res.send({ message: 'here' });
});

// *** Plug the event adapter into the express app as middleware ***
// app.use("/slack/events", slackEvents.requestListener());

/**
 * Point express to the 'views' directory. If you're using a
 * single-page-application framework like react or angular
 * which has its own development server, you might want to
 * configure this to only serve the index file while in
 * production mode.
 */
const viewsDir = path.join(__dirname, 'views');
// app.set("views", viewsDir);
const staticDir = path.join(__dirname, 'public');
// app.use(express.static(staticDir));
app.get('*', (req: Request, res: Response) => {
  res.sendFile('index.html', { root: viewsDir });
});

// Export express instance
export default app;
