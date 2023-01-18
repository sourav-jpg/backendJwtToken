const mongoose = require('mongoose');

const connectDb = async()=>{
    try {
        const con = await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log('MongoDb connected successfully!');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDb