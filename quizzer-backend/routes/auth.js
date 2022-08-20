import express from "express";
import User from "../models/User.js";
import multer from "multer";


const router = express.Router();

const  storage = multer.diskStorage({
    destination: (req,res,cb) => {
        cb(null,"images");
    },
    filename: (req,file,cb) => {
        cb(null,req.body.name);
    }
});

const upload = multer({storage:storage});

router.post("/fileUpload",upload.single("file"),(req,res) => {
    res.json("File is uploaded");
});

router.post("/register",function(req,res){
    if(!req.body) res.sendStatus(500);

    const {username,email,password,avatar} = req.body;

    User.findOne({email:email},function(err,user){
        if(user){
            res.json("User is already existing on these email");
        }else{
            const c_user = new User({
                username,
                email,
                password,
                avatar
            });
            c_user.save().then(() => {
                res.json("User is successfully created");
            }).catch((err) => {
                res.json("Error Occured");
            });
        }
    });
});

router.post("/login",function(req,res){
    if(!req.body) res.sendStatus(500);

    const {email,password} = req.body;

    User.findOne({email:email},function(err,user){
        if(user){
        if(password === user.password){
            res.json({
                message: "User can login to system",
                user: user
            });
        }else{
            res.json("Password not matched");
        }
        }else{
            res.json(err);
        }
    });
});

export default router;