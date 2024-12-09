import { NextResponse } from "next/server";
import connection from "@/lib/mongodb.js"
import Link from "@/models/link";

export async function POST(request) {
  let isgenerated
  let newshort
  try {
        
    const isconnected=await connection()
    if(!isconnected){
      return NextResponse.json({msg:"connection not established"})
    }
    const data=await request.json()
   


     const islink= await Link.findOne({longUrl:data.longUrl})
     
     
      if(islink){
       newshort= `${islink.shortUrl}`
       return NextResponse.json({isgenerated:true,short:newshort,alreadyExists:true})
      }
      else{
      newshort= `${process.env.DOMAIN}/${data.shortUrl}`
      const link=await Link.create({
        longUrl:data.longUrl,
        shortUrl:newshort
      })
       link? isgenerated=true: isgenerated=false
       return NextResponse.json({isgenerated,short:newshort,alreadyExists:false}) 
      }
      
          
      
      } catch (error) {
         return NextResponse.json({ success: false, error: error.message})
      }


}