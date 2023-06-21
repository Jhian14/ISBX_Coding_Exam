const db = require("../../models/index")
const Orders = db.orders
const mongoose = require("mongoose");

exports.getAllOrders = async (req, res) => {
    try {
        const orders = await Orders.find({}).populate("user_id")
        console.log("Data ", orders)
        return res.json(orders)

    } catch (error) {
        console.log("error", error)
        res.status(500)
    }
}

exports.getOrder = async (req, res) => {
    const _id = req.params._id

    try {
        const order = await Orders.findById(_id).populate("user_id")
        return res.json(order)

    } catch (error) {
        console.log("error", error)
        res.status(500).send("500 - Internal Server Error")

    }
}

exports.createOrder = async (req, res) => {
    const data = req.body
    data.__id = new mongoose.Types.ObjectId();
    console.log("data", data)

    const newOrder = new Orders(data)

    try {
        await newOrder.save()
        return res.json("okay")
    } catch (error) {
        res.status(500).send("500 - Internal Server Error")
        console.log(error)
    }
}

exports.updateOrder = async (req, res) => {
    const _id = req.params._id
    const data = req.body

    console.log("data", data)
    console.log("Update order")
    try {
        const orders = await Orders.updateOne({_id}, data);
        return res.json("update done")

    } catch (error) {
        res.status(500).send("500 - Internal Server Error")
        console.log(error)
    }
}

exports.deleteOrder  = async (req, res) => {
    const _id = req.params._id
    console.log("Delete order")

    try {
        const orders = await Orders.deleteOne({_id})
        return res.json("success delete")

    } catch (error) {
        console.log(error)
        res.status(500).send("500 - Internal Server Error")
    }
}