import { createEventAdapter } from '@slack/events-api';
import { WebClient } from '@slack/web-api';
import { ISlackEvent } from '@entities';
import { CompanyDao } from '@daos';

const { SLACK_SIGNING_SECRET: slackSigningSecret } = process.env;

if (!slackSigningSecret) {
  throw new Error('Slack Client secret is not available');
}

export const slackEvents = createEventAdapter(slackSigningSecret);

slackEvents.on('message', async (event: ISlackEvent) => {
  console.log(JSON.stringify(event, null, 4));
  console.log(
    `Received a message event: user ${event.user} in channel ${
      event.channel
    } says ${event.text}`,
  );

  const { slackToken } = await CompanyDao.findBySlackId(event.team);
  // Initialize
  const web = new WebClient(slackToken);

  const result = await web.chat.postMessage({
    text: 'Hello world!',
    channel: event.channel,
  });
  // The result contains an identifier for the message, `ts`.
  console.log(
    `Successfully send message ${result.ts} in conversation ${event.channel}`,
  );

  //   const token = await db.findTokenByTeam(teamId, enterpriseId);

  // Call the method
  //   const result = web.auth.test({ token });
});

// All errors in listeners are caught here. If this weren't caught, the program would terminate.
slackEvents.on('error', (error) => {
  console.error(error); // TypeError
});
