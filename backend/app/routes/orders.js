module.exports = (app) => {
    const orders = require("../controllers/orders/orders")
    var router = require("express").Router()

    router.get("/", orders.getAllOrders)
    router.get("/:_id", orders.getOrder)
    router.post("/create", orders.createOrder)
    router.patch("/:_id", orders.updateOrder)
    router.delete("/:_id", orders.deleteOrder)

    app.use("/api/orders", router)
}