import express from 'express';
import { contactUser } from '../controller/contact.controller.js';

const router = express.Router();

router.post("/contact",contactUser);

export default router;