const express = require("express");
const app = express();
const Index=require("./Index");

app.use("/api/Index",(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.json(Index);
});
//
//
// app.use("/api/Delison",(req,res)=>{
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   res.header('Access-Control-Allow-Headers', 'Content-Type');
//   let id = req.query.id;
//   res.json(Delison[id])
//
// });

app.listen(3000,()=>{
  console.log("api server is ready on port 3000")
});
