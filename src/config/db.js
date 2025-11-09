import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./database.sqlite"
})

try {
    await sequelize.authenticate();
    console.log("connection has been established successfully")

} catch (error) {
    console.log(`unable to connect to db: ${error}`)
}

export default sequelize