import express from "express"
const router = express.Router()
import {
  //
  createNewOrder,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  getOrders,
  updateOrderToDelivered
} from "../controllers/orderControllers.js"
import { protect, admin } from "../middleware/authMiddleware.js"

router //
  .route("/")
  .post(protect, createNewOrder)
  .get(protect, admin, getOrders)
router.route("/myorders").get(protect, getMyOrders)
router.route("/:id").get(protect, getOrderById)
router.route("/:id/pay").put(protect, updateOrderToPaid)
router.route("/:id/deliver").put(protect, updateOrderToDelivered)

export default router
