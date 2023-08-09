import Image from 'next/image'
const user_feedback = [
  {
    'id': 1,
    'title': 'Like',
    'img': '/like.png',
  },
  {
    'id': 2,
    'title': 'Comment',
    'img': '/messages.svg',
  },
  {
    'id': 3,
    'title': 'Share',
    'img': '/share.png',
  }
];
const user = 'Farid Akanda'
const arts = [
  {
    'id': 1,
    'title': 'Hello, Article',
    'img': '/avatar.png'
  },
  {
    'id': 2,
    'title': 'Hello, Video',
    'video': 'yes'
  }
]


export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center divide-x-1 mt-24 xl:mt-24 mb-1 xl:mb-4 lg:mb-4">
      <div className="bg-slate-100 text-slate-900 mb-1 xl:rounded-ss-xl xl:rounded-se-xl xl:rounded-es-xl xl:rounded-ee-xl">
        <div className="bg-red-300 flex justify-between p-2  xl:rounded-ss-xl xl:rounded-se-xl">
          <div className="flex space-x-2">
            <Image src="/avatar.png" alt="user" width="24" height="24" />
            <h1>Zaheed Sabur</h1>
          </div>
          <div>
            <Image src="/dot.png" alt="dot" width="20" height="20"/>
          </div>
        </div>
        <div className="bg-lime container mx-auto max-w-2xl text-lg mb-1">
          <h1 className="text-xl text-start p-2">Fault Tolarence and Distributed System Architect</h1>
          <Image className="grow w-full h-full m-auto items-center " src="/robot.jpg" alt="ubuntu" width="200" height="200" sizes="100vw"/>
          <p className="text-md text-start p-2">Learn more about our company for your interest you can sign up for become an active user of the company. There is also huge of people are interested to know more our company
          We providing different kind of software solution for our client and we also provide different kind of core level technical stuff solution like making distributed system and others.</p>
        </div>
        <div className="bg-red-300 text-center xl:rounded-es-xl xl:rounded-ee-xl">
          <div className="flex justify-around">
            {
              user_feedback.map((userfeed) => {
                return (
                  <div className="text-center p-2" key={userfeed.id}>
                    <Image className="mx-3" src={userfeed.img} alt={userfeed.title} width="20" height="20"/>
                    <span className="text-xs">{userfeed.title}</span>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      <div className="bg-slate-100 text-slate-900 mb-1 xl:rounded-ss-xl xl:rounded-se-xl xl:rounded-es-xl xl:rounded-ee-xl">
        <div className="bg-red-300 flex justify-between p-2  xl:rounded-ss-xl xl:rounded-se-xl">
          <div className="flex space-x-2">
            <Image src="/avatar.png" alt="user" width="24" height="24" />
            <h1>Farid Akanda</h1>
          </div>
          <div>
            <Image src="/dot.png" alt="dot" width="20" height="20"/>
          </div>
        </div>
        <div className="bg-lime container mx-auto max-w-2xl text-lg mb-1">
          <h1 className="text-xl text-start p-2">Fault Tolarence and Distributed System Architect</h1>
          <Image className="grow w-full h-full m-auto items-center " src="/robot.jpg" alt="ubuntu" width="200" height="200" sizes="100vw"/>
          <p className="text-md text-start p-2">Learn more about our company for your interest you can sign up for become an active user of the company. There is also huge of people are interested to know more our company
          We providing different kind of software solution for our client and we also provide different kind of core level technical stuff solution like making distributed system and others.</p>
        </div>
        <div className="bg-red-300 text-center xl:rounded-es-xl xl:rounded-ee-xl">
          <div className="flex justify-around">
            {
              user_feedback.map((userfeed) => {
                return (
                  <div className="text-center p-2" key={userfeed.id}>
                    <Image className="mx-3" src={userfeed.img} alt={userfeed.title} width="20" height="20"/>
                    <span className="text-xs">{userfeed.title}</span>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      <div className="bg-slate-100 text-slate-900 mb-1 xl:rounded-ss-xl xl:rounded-se-xl xl:rounded-es-xl xl:rounded-ee-xl">
        <div className="bg-red-300 flex justify-between p-2  xl:rounded-ss-xl xl:rounded-se-xl">
          <div className="flex space-x-2">
            <Image src="/avatar.png" alt="user" width="24" height="24" />
            <h1>Shafaet Asraf</h1>
          </div>
          <div>
            <Image src="/dot.png" alt="dot" width="20" height="20"/>
          </div>
        </div>
        <div className="bg-lime container mx-auto max-w-2xl text-lg mb-1">
          <h1 className="text-xl text-start p-2">Fault Tolarence and Distributed System Architect</h1>
          <Image className="grow w-full h-full m-auto items-center " src="/robot.jpg" alt="ubuntu" width="200" height="200" sizes="100vw"/>
          <p className="text-md text-start p-2">Learn more about our company for your interest you can sign up for become an active user of the company. There is also huge of people are interested to know more our company
          
          We providing different kind of software solution for our client and we also provide different kind of core level technical stuff solution like making distributed system and others.</p>
        </div>
        <div className="bg-red-300 text-center xl:rounded-es-xl xl:rounded-ee-xl">
          <div className="flex justify-around">
            {
              user_feedback.map((userfeed) => {
                return (
                  <div className="text-center p-2" key={userfeed.id}>
                    <Image className="mx-3" src={userfeed.img} alt={userfeed.title} width="20" height="20"/>
                    <span className="text-xs">{userfeed.title}</span>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      <div className="bg-slate-100 text-slate-900 mb-1 xl:rounded-ss-xl xl:rounded-se-xl xl:rounded-es-xl xl:rounded-ee-xl">
        <div className="bg-red-300 flex justify-between p-2  xl:rounded-ss-xl xl:rounded-se-xl">
          <div className="flex space-x-2">
            <Image src="/avatar.png" alt="user" width="24" height="24" />
            <h1>Tamim Shahriar</h1>
          </div>
          <div>
            <Image src="/dot.png" alt="dot" width="20" height="20"/>
          </div>
        </div>
        <div className="bg-lime container mx-auto max-w-2xl text-lg mb-1">
          <h1 className="text-xl text-start p-2">Fault Tolarence and Distributed System Architect</h1>
          <Image className="grow w-full h-full m-auto items-center " src="/robot.jpg" alt="ubuntu" width="200" height="200" sizes="100vw"/>
          <p className="text-md text-start p-2">Learn more about our company for your interest you can sign up for become an active user of the company. There is also huge of people are interested to know more our company
          
          We providing different kind of software solution for our client and we also provide different kind of core level technical stuff solution like making distributed system and others.</p>
        </div>
        <div className="bg-red-300 text-center xl:rounded-es-xl xl:rounded-ee-xl">
          <div className="flex justify-around">
            {
              user_feedback.map((userfeed) => {
                return (
                  <div className="text-center p-2" key={userfeed.id}>
                    <Image className="mx-3" src={userfeed.img} alt={userfeed.title} width="20" height="20"/>
                    <span className="text-xs">{userfeed.title}</span>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      
      
    </main>
  )
}