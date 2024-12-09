import { NextResponse } from "next/server";
import Link from "@/models/link";

export async function GET(request,slug) {
   let dynamicparams= await slug.params
   
    const url=`${process.env.DOMAIN}/${dynamicparams.slug}`
     const link= await Link.findOne({shortUrl:url})
     if(link){
        return NextResponse.redirect(link.longUrl)
     }else{
        return NextResponse.redirect(`${process.env.DOMAIN}`)
     }
    


}




