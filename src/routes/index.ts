import express from "express";
import entryOrders from "../api_modules/entry_order/routes"

const router = express.Router()

router.use('/api/entry-order', entryOrders)

export default router