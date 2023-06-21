module.exports = (app) => {
    require("./users")(app)
    require("./orders")(app)
}