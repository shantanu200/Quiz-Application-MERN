import mongoose from "mongoose";

const URI = `mongodb+srv://shantanu200:jayabhusari@mongodbcluster.f3t5i.mongodb.net/quizzer?retryWrites=true&w=majority`

const connectDB = () => {
    mongoose.connect(URI,{
        useUnifiedTopology:true,
        useNewUrlParser:true
    }).then(()=>{
        console.log("Connected to DB");
    }).catch((err) => {
        console.log(err);
    })
}

export default  connectDB;