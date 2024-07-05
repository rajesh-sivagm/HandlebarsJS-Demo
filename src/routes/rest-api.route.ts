import { Router } from "express";
import { triggerRestApi } from "../controllers/rest-api.controller";

const router = Router();

router.post("/trigger", triggerRestApi);

export default router;
