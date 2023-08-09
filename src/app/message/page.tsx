import React from 'react'
import Image from 'next/image'
const Message = () => {
  return (
    <div className="mt-24 text-center justify-center">
        <div className="flex max-w-2xl justify-around mx-auto">
            <div className="flex bg-slate-500 p-2 rounded-xl space-x-2">
                <Image src="/avatar.png" alt="user" width="24" height="24" />
                <span>Hello, How are you?</span>
            </div>
            <div className="flex bg-sky-500 p-2 rounded-xl space-x-2">
                <span>I am fine and you!</span>
                <Image src="/avatar.png" alt="user" width="24" height="24" />
            </div>
        </div>
        <div className="flex max-w-2xl p-2 h-12 m-2 mx-auto justify-around bg-teal-400 rounded-full">
            <h1>Message....</h1>
            <button className="bg-green-700 p-2 rounded-xl">Post</button>
        </div>
    </div>
  )
}

export default Message