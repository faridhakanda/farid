import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Magra } from 'next/font/google';

const navbars = [
  {
    'id': 1,
    'title': 'Home',
    'img': '/homeicon.png',
    'url': '/',
  },
  {
    'id': 2,
    'title': 'Group',
    'img': '/group.png',
    'url': '/group',
  },
  {
    'id': 3,
    'title': 'Post',
    'img': '/addpost.png',
    'url': '/post',
  },
  {
    'id': 4,
    'title': 'Notification',
    'img': '/notification.png',
    'url': '/notification'
  },
  {
    'id': 5,
    'title': 'Chat',
    'img': '/message.png',
    'url': '/message'
  }
];

const Navbar = () => {
  return (
    <div className="bg-blue-400 text-neutral-950 text-center justify-around h-10 top-0">
      <div className="bg-blue-200 justify-around text-justify items-center flex">
        <h1>Farid</h1>
        <button className="rounded-xl bg-slate-100 w-32 md:w-48 lg:w-64 m-2 flex">
        <Image className="items-center justify-center text-center m-1" src="/search.svg" alt="search" width={20} height={20}/>
        <span>Search...</span>
        </button>
        <Image className="" src="/avatar.png" alt="avatar" width="32" height="32"/>
      </div>
      <div className="bg-slate-400 justify-evenly flex p-1">
      
        {
          navbars.map((ma) => {
            return(
              <div className="flex p-1 justify-evenly" key={ma.id}>
                <Link href={ma.url}>
                  <div className="grid">
                    <Image src={ma.img} alt={ma.title} width="24" height="24" />
                    
                  </div>
                </Link>
                
              </div>
            )
          })
        }
        
      </div>
    </div>
  )
}

export default Navbar
