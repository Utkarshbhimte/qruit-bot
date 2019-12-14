import { Router } from "express";
import SlackRouter from "./Slack";

// Init router and path
const router = Router();

// Add sub-routes
router.use("/slack", SlackRouter);

// Export the base-router
export default router;
