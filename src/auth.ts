import passport, { Strategy } from "passport";
import { default as PassportSlack } from "@aoberoi/passport-slack";
import { Router } from "express";

export const passportRouter = Router();

const {
  SLACK_CLIENT_ID: clientID,
  SLACK_CLIENT_SECRET: clientSecret
} = process.env;

if (!clientID || !clientSecret) {
  throw new Error("Slack client id and secret is required");
}

const SlackStrategy = PassportSlack.Strategy;
// Initialize Add to Slack (OAuth) helpers
passport.use(
  new SlackStrategy(
    {
      clientID,
      clientSecret,
      skipUserProfile: true
    },
    (
      accessToken: any,
      scopes: any,
      team: any,
      extra: any,
      profiles: any,
      done: any
    ) => {
      console.log("TCL: accessToken, scopes, team, extra, profiles", {
        accessToken,
        scopes,
        team,
        extra,
        profiles
      });
      // save to mongo db
      done(null, {});
    }
  ) as Strategy
);

passportRouter.get("/", (req, res) => {
  res.send(
    '<a href="/auth/slack"><img alt="Add to Slack" height="40" width="139" src="https://platform.slack-edge.com/img/add_to_slack.png" srcset="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x" /></a>'
  );
});

passportRouter.get(
  "/auth/slack",
  passport.authenticate("slack", {
    scope: ["bot"]
  })
);

passportRouter.get(
  "/auth/slack/callback",
  passport.authenticate("slack", { session: false }),
  (req, res) => {
    console.log("TCL: req", req);
    res.send("<p>Greet and React was successfully installed on your team.</p>");
  }
);

export default passport;
