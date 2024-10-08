import express from "express"
import { prismaClient } from "./db";

export const app=express();

app.use(express.json());
//@ts-ignore
app.post("/sum",async(req,res)=>{

    const a=req.body.a;
    const b=req.body.b;
    
    if(a>1000000 || b>1000000){
        return res.status(422).json({
            message:"the error ",
        })
    }

    const result=a+b;
   
    const request=await prismaClient.request.create({
        data:{
            a:a,
            b:b,
            ans:result,
            type:"ADD",
        }
    })
    
    res.json({
        ans:result,id:request.id
    })

})


