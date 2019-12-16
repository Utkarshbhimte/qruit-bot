import { createEventAdapter } from "@slack/events-api";
import { WebClient } from "@slack/web-api";
import { ISlackEvent } from "@entities";

const { SLACK_SIGNING_SECRET: slackSigningSecret } = process.env;

if (!slackSigningSecret) {
  throw new Error("Slack Client secret is not available");
}

// Initialize
const web = new WebClient();

export const slackEvents = createEventAdapter(slackSigningSecret);

slackEvents.on("message", async (event: ISlackEvent) => {
  console.log(JSON.stringify(event, null, 4));
  console.log(
    `Received a message event: user ${event.user} in channel ${event.channel} says ${event.text}`
  );
  //   const token = await db.findTokenByTeam(teamId, enterpriseId);

  // Call the method
  //   const result = web.auth.test({ token });
});

// All errors in listeners are caught here. If this weren't caught, the program would terminate.
slackEvents.on("error", error => {
  console.error(error); // TypeError
});
