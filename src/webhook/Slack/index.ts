import { Router } from "express";
import SlackActionRouter from "./SlackAction";

// Init router and path
const router = Router();

// Add sub-routes
router.use("/actions", SlackActionRouter);

// Export the base-router
export default router;
