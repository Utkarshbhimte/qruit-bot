// import { UserDao } from "@daos";
import { logger } from "@shared";
import { Request, Response, Router, Express } from "express";
import { BAD_REQUEST, CREATED, OK } from "http-status-codes";
import { paramMissingError } from "@shared";
// import { ParamsDictionary } from "express-serve-static-core";

const router = Router();

interface IBlock {
  type: string;
  block_id: string;
  elements: IElement[];
}

interface IElement {
  type: string;
  block_id?: string;
  elements?: IElement[];
  text: string;
}

interface ISlackEvent {
  client_msg_id: string;
  type: string;
  text: string;
  user: string;
  ts: string;
  team: string;
  blocks: IBlock[];
  channel: string;
  event_ts: string;
  channel_type: string;
}

interface ISlackActionWebhookEventBody {
  token: string;
  team_id: string;
  api_app_id: string;
  event: ISlackEvent;
  type: string;
  event_id: string;
  event_time: number;
  authed_users: string[];
}

interface ISlackActionWebhookVerificationBody {
  token: string;
  challenge: string;
  type: string;
}

type SlackActionWebhookBody =
  | ISlackActionWebhookVerificationBody
  | ISlackActionWebhookEventBody;

router.get("/", async (req: Request, res: Response) => {
  try {
    console.log({ query: req.query, body: req.body });
    res.send({ message: "aaya kuch" });
  } catch (err) {
    logger.error(err.message, err);

    return res.status(BAD_REQUEST).json({
      error: err.message
    });
  }
});

router.post("/", async (req: Request, res: Response) => {
  try {
    const body: SlackActionWebhookBody = req.body;

    console.log(JSON.stringify(body, null, 4));
    if (body.type === "url_verification") {
      res.send({ challenge: req.body.challenge });
      return;
    }

    // await slack.chat.postMessage({
    //   channel: message.channel,
    //   text: `Hello <@${message.user}>! :tada:`
    // });
    res.send({ message: "reached" });
  } catch (err) {
    logger.error(err.message, err);

    return res.status(BAD_REQUEST).json({
      error: err.message
    });
  }
});

export default router;
