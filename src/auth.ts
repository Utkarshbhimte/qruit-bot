import passport from "passport";
import { default as PassportSlack } from "@aoberoi/passport-slack";

const SlackStrategy = PassportSlack.Strategy;
// Initialize Add to Slack (OAuth) helpers
passport.use(
  new SlackStrategy(
    {
      clientID: process.env.SLACK_CLIENT_ID,
      clientSecret: process.env.SLACK_CLIENT_SECRET,
      skipUserProfile: true
    },
    (accessToken, scopes, team, extra, profiles, done) => {
      // save to mongo db
      done(null, {});
    }
  )
);

export default passport;
