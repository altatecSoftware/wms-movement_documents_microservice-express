import express from "express";
import Documents from "../api_modules/documents/routes"

const router = express.Router()

router.use('/api/documents', Documents)

export default router