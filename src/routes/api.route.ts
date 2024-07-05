import { Router } from "express";
import { triggerApi } from "../controllers/api.controller";

const router = Router();

router.post("/trigger", triggerApi);

export default router;
