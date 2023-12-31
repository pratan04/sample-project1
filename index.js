import express from 'express';
import bodyParser  from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import { Console } from 'console';
import postRoutes from './routes/posts.js';
const app=express();

app.use('/posts',postRoutes);

app.use(bodyParser.json({limit: "30mb",extended:true}));

app.use(bodyParser.urlencoded({limit: "30mb",extended:true}));
app.use(cors());




const CONNECTION_URL = 'mongodb+srv://shoonyaekai:@cluster0.sviriwd.mongodb.net/?retryWrites=true&w=majority';
const PORT=process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser: true,unifiedTopology: true})

.then(()=>app.listen(PORT,()=>Console.log('server running on port: $(PORT)')))
.catch((error)=>console.log(error.message));

mongoose.set('useFindAndModify',false);
