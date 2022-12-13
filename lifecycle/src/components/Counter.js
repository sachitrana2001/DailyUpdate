import React, { useEffect } from 'react'

export default function Counter({number}) {
    useEffect(()=>{
        console.log('component mount')
        return()=>{
            console.log('component unmount')
        }
    },[number])
  return (
    <div>
      {number}
    </div>
  )
}
