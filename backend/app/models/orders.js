module.exports = (mongoose) => {
    const orderSchema = mongoose.Schema({
        _id: { type: mongoose.Schema.Types.ObjectId },
        quantity: { type: String },
        price: { type: String },
        user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    },
    },
    { timestamps: true }
    )
const schema = mongoose.model("orders", orderSchema)
return schema
}