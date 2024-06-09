const port = 4000;
const epress = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");


app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://ekamsinghahuja123:dIAhpVwCL8S6NbST@cluster0.iz9xbka.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")


//dIAhpVwCL8S6NbST

//mongodb+srv://ekamsinghahuja123:dIAhpVwCL8S6NbST@cluster0.iz9xbka.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
