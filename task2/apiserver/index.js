import express from 'express';

const app = express();

app.get("/", (req, res) => {

res.send("Hi this is from server");
})

const PORT= 5000;

app.listen(PORT, ()=>{

console.log( 'Server is running on port $(PORT}');
})