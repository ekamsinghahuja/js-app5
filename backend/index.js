const port = 4010;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://ekamsinghahuja123:dIAhpVwCL8S6NbST@cluster0.iz9xbka.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

app.get('/', (req, res) => {
    res.send("express is running");
});

// image storage engine
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({ storage: storage });

app.use('/images', express.static('upload/images'));

app.post("/upload", upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    });
});

app.listen(port, (error) => {
    if (!error) {
        console.log("server running on port " + port);
    } else {
        console.log("error:" + error);
    }
});
