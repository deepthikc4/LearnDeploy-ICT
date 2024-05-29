const express=require('express');
const morgan=require('morgan');
const dotenv=require('dotenv');
dotenv.config();

const PORT=process.env.PORT;
const app=new express();
app.use(morgan('dev'));

const mentorRoute=require('./routes/mentorRoutes');
const projectRoute=require('./routes/projectRoutes');
const userRoute=require('./routes/userRoutes');
const studentRoute=require('./routes/studentRoutes');
const referenceRoute=require('./routes/referencematerialRoutes');
const cors=require('cors');

app.use(cors());

app.use('/api',mentorRoute);
app.use('/api',projectRoute);
app.use('/api',userRoute);
app.use('/api',studentRoute);
app.use('/api',referenceRoute);




const db=require('./db/connection');


app.listen(PORT,(req,res)=>{

    console.log(`Server is running ${PORT}`);
})