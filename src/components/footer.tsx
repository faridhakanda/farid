import React from 'react'
import Image from 'next/image'
const social = [
  {
    'id': 1,
    'title': 'facebook',
    'img': '/facebook.png'
  },
  {
    'id': 2,
    'title': 'twiiter',
    'img': '/twitter.png',
  },
  {
    'id': 3,
    'title': 'linkedin',
    'img': '/linkedin.png',
  },
  {
    'id': 4,
    'title': 'github',
    'img': '/github.svg',
  },
  {
    'id': 5,
    'title': 'youtube',
    'img': '/youtube.png'
  }
]

const services = [
  {
    'id': 1,
    'title': 'Web Development'
  },
  {
    'id': 2,
    'title': 'Game Development'
  },
  {
    'id': 3,
    'title': 'Android'
  },
  {
    'id': 4,
    'title': 'iOS'
  },
  { 
    'id': 5,
    'title': 'Web Hosting'
  }
]

const company = [
  {
    'id': 1,
    'title': 'Career',
  },
  {
    'id': 2,
    'title': 'About Us'
  },
  {
    'id': 3,
    'title': 'Contact'
  },
  {
    'id': 4,
    'title': 'Human Resources'
  }
]
const Footer = () => {
  return (
    <div className="bg-indigo-500 text-center">
      <div className="sm:flex md:flex grid justify-around">
        <div className="text-start p-4 w-64">
          FaridSoft
          <p>FaridSoft is a local software company. We are providing web, game and other technical services.</p>
        </div>
        <div className="text-start p-4">
          Our Services
          {
            services.map((service) => {
              return (
                <div key={service.id}>{service.title}</div>
              )
            })
          }
        </div>
        <div className="text-start p-4">
          Company
          {
            company.map((com) =>{
              return (
                <div key={com.id}>{com.title}</div>
              )
            })
          }
        </div>
      </div>
      <div className="flex justify-around">
          {
            social.map((media) => {
              return (
                <div key={media.id}>
                  <Image src={media.img} alt={media.title} width="32" height="32"/>
                </div>
              )
            })
          }
        </div>
      <div>
        <h1>Design and Developed by</h1>
        <h1 className="text-xl">Farid Akanda</h1>
        <p>Web Developer</p>
      </div>
      <div>&copy;2023 All Right Reserved</div>
    </div>
  )
}

export default Footer