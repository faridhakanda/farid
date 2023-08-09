import React from 'react'
import Image from 'next/image'
const userPost = [
  {
    'id': 1,
    'title': 'Image',
    'img': '/image.png',
  },
  {
    'id': 2,
    'title': 'Video',
    'img': '/gif.png',
  },
  {
    'id': 3,
    'title': 'Voice',
    'img': '/sound.png',
  }
];
const About = () => {
  return (
    <div className="mt-24 mb-1 max-w-2xl mx-auto text-center justify-center">
      <div className="flex bg-lime-200 text-slate-950 max-w-2xl rounded-md h-16 mx-auto mb-1 text-center items-center justify-around">
        
          {
            
            userPost.map((user) => {
              return (
                <>
                <div className="">
                  <Image className="" src={user.img} alt={user.title} width="32" height="32" />
                  <span className="text-xs">{user.title}</span>
                  
                </div>
                </>
              )}
            )
            
          }
        
      </div>
      <div className="bg-blue-100 rounded-md mb-1">
        <form className="grid justify-center text-center items-center p-2">
          <input className="p-2 m-1 rounded-md bg-slate-300" type="text" placeholder="Enter your title..."/>
          <input className="p-2 m-1 rounded-md bg-slate-300" type="file" placeholder="Enter your file..."/>
          <input className="p-2 m-1 rounded-md bg-slate-300" type="text" placeholder="Enter your description..."/>
        </form>

      </div>
      <div className="bg-blue-100 rounded-md mb-1">
        <form className="grid justify-center text-center items-center p-2">
          <input className="p-2 m-1 rounded-md bg-slate-300" type="text" placeholder="Enter your title..."/>
          <input className="p-2 m-1 rounded-md bg-slate-300" type="file" placeholder="Enter your file..."/>
          <input className="p-2 m-1 rounded-md bg-slate-300" type="text" placeholder="Enter your description..."/>
        </form>

      </div>
    </div>
  )
}

export default About
