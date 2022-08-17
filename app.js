const express = require("express");
const path = require("path");
const app = express();
require("./db/connect");
const hbs = require("hbs");
const Form = require("./models/schema");

port = process.env.port || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "template/views"));
hbs.registerPartials(path.join(__dirname, "template/partials"));
app.set("view engine", "hbs");

app.get("/login", (req, res) => {
  res.render("login");
});
app.get("/register", (req, res) => {
  res.render("register");
});
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/main", (req, res) => {
  res.render("main");
});
app.post("/login", async (req, res) => {
  console.log(req.body);
  const mail = req.body.email;
  const pass = req.body.password;
  const User = await Form.findOne({ email: mail });
  if (pass === User.password) {
    // res.send("success...")
    res.render("main");
  } else {
    res.send("invalid user");
  }
});
app.post("/register",async (req, res) => {
    console.log(req.body);
    if(req.body.password===req.body.cpassword){
      try{
        const user = new Form({
            name:req.body.name,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            cpassword: req.body.cpassword,
          });
          await user.save();
          res.render("main");
    }catch(err){
   res.send(err.message);
    }

    }else{
      res.send("password not match")
    }
  
  
  
});
app.listen(port, () => {
  console.log(`server is run on port ${port}`);
});
