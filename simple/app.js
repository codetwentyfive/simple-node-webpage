const express=require("express")
const path=require("path")

const app=express()

const routeMappings={
  "/":"index.html",
  "/about":"about.html",
  "/contact-me":"contact-me.html",
}

//serve static files from the current directory
app.use(express.static(__dirname))

//define routes to serve HTML files
app.get ("/",(req,res)=>{
  res.sendFile(path.join(__dirname,routeMappings["/"]))
})

app.get ("/about",(req,res)=>{
  res.sendFile(path.join(__dirname,routeMappings["/about"]))
})


app.get ("/contact-me",(req,res)=>{
  res.sendFile(path.join(__dirname,routeMappings["/contact-me"]))
})

app.use((req,res)=>{
  res.status(404).sendFile(path.join(__dirname,"404.html"))
})

//start the server
app.listen(8080,()=>{
  console.log("Server is running at port 8080")
})