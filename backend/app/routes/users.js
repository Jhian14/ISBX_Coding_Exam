module.exports = (app) => {
    const users = require("../controllers/users/users")
    var router = require("express").Router()

    router.get("/", users.listUsers)
    router.get("/get-all-users/:_id", users.getAllUsers)
    router.get("/:_id", users.getUser)

    router.post("/sign-in", users.signInUser)
    router.post("/sign-up", users.signUpUser)

    router.patch("/:_id", users.updateUser)
    router.delete("/:_id", users.deleteUser)

    app.use("/api/users", router)
}