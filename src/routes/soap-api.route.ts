import { Router } from "express";
import { triggerSoapApi } from "../controllers/soap-api.controller";

const router = Router();

router.post("/trigger", triggerSoapApi);

export default router;
