const mongoose = require('mongoose');

const dbConnection = async () => {

    try {

        // await mongoose.connect(process.env.MONGODB_CNN, {
        //     useFindAndModify: false
        // })

        await mongoose.connect(process.env.MONGODB_CNN)

        console.log("db online")

    } catch (error) {
        console.log(error)
        throw new Error("error al iniciar la base de datos")
    }

}

module.exports = {
    dbConnection
}