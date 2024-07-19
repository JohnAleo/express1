const express= require("express")
const app= express();

app.use(express.json());
app.use(express.urlencoded({ extended:false}));

const mainRoutes=require("./routes/main")
const userRoutes=require("./routes/user")



app.use("/motor", (req,res,next)=>{
console.log(req.body);
//res.send('<h1>Student List</h1>')
res.redirect("/")
});

app.use(mainRoutes);
app.use(userRoutes);

app.use((req,res) => {
   res.sendStatus(404).send(`<h1>NOT FOUND</h1>`) 
} )

// Serverlarni update qilishda shu yo'ldan foydalaniladi
// app.use("/api/v1",userRoutes);
// app.use("/api/v2",userRoutes);

const PORT = process.env.PORT || 5006;
app.listen(PORT, ()=>{
    console.log("Server running on port:", PORT);
});