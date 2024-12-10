"use client"

import Link from "next/link";
import { useState } from "react";




export default function Home() {
   const[isCustom,setIsCustom]=useState(false)
   const[generated,setGenerated]=useState(false)
   const [longUrl,setLongUrl]=useState('')
   const [shortUrl,setShortUrl]=useState('')
   const [generatedshortUrl,setGeneratedShortUrl]=useState('')
   const [alreadyExists,setAlreadyExists]=useState(false)




   const generateRandomString = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 3; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }; 
 
    const handleSubmit= async(e)=>{
      e.preventDefault()
      const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=+#]*)*$/;

      if (!urlPattern.test(longUrl)) {
        alert("Please enter a valid URL");
        return;
      }
      const randomUrl=generateRandomString()
      const res=await fetch("/api/temp",{
        method: "POST",
        body: JSON.stringify({longUrl,shortUrl:shortUrl===''?randomUrl:shortUrl}),
      })
  
      const response=await res.json()
      setGeneratedShortUrl(response.short)
      setAlreadyExists(response.alreadyExists)
      if(response.isgenerated) setGenerated(response.isgenerated)
      console.log(response);
          
    }


  return (
    <main className=" p-8">
      <div className="max-w-2xl mx-auto mt-10">
        <form className="bg-white shadow-md rounded-lg p-6" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="longUrl" className="block text-gray-700 text-sm font-medium mb-2">
              Enter Long URL
            </label>
            <input
              type="text"
              id="longUrl"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="https://example.com/very/long/url"
              value={longUrl}
              name="longUrl"
              onChange={(e)=>setLongUrl(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <div className="flex items-center gap-x-3">
              <input
                type="radio"
                id="randomUrl"
                name="urlType"
                value="random"
                className="h-4 w-4 border-gray-300 text-green-500 focus:ring-green-500"
                defaultChecked
                onChange={()=>{
                  setIsCustom(false)
                }}
               
               
              />
              <label htmlFor="randomUrl" className="text-sm font-medium text-gray-700">
                Generate Random Short URL
              </label>
            </div>
            
            <div className="flex items-center gap-x-3 mt-3">
              <input
                type="radio"
                id="customUrl"
                name="urlType"
                value="custom"
                className="h-4 w-4 border-gray-300 text-green-500 focus:ring-green-500"
                onChange={()=>setIsCustom(true)}
              />
              <label htmlFor="customUrl" className="text-sm font-medium text-gray-700 ">
                Use Custom Name 
              </label>
            </div>
            
         { isCustom &&  <input
              type="text"
              id="customUrl"
              name="customUrl"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 mt-4"
              placeholder="enter custom name"
              value={shortUrl}
              onChange={(e)=>setShortUrl(e.target.value)}
            />}
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Shorten URL
          </button>
           
         { generated && <div className="flex-col md:flex mx-auto my-4">
            <h4>Your Short Url:</h4>
              <Link href={generatedshortUrl} passHref legacyBehavior>
              <a className="text-blue-400  font-semibold block" target="_blank">{generatedshortUrl}</a>
              </Link>  
              {alreadyExists && <span className="text-red-500 block ">&#40;URL already exists&#41;</span>}
              
         <button
           onClick={() => {
             navigator.clipboard.writeText(generatedshortUrl)
           }}
           className="bg-gray-100 text-gray-600 px-3 py-1 rounded mt-2 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
         >
           Copy URL
         </button>

         </div>
         }
        </form>


      </div>
    </main>

  );
}
