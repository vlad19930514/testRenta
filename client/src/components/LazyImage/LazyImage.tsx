import React, { useEffect, useRef, useState } from 'react'

//@ts-ignore
const registerObserver = (ref, setShowImage)=>{
  const observer = new IntersectionObserver((entries, observer)=>{
    entries.forEach(entry=>{
      if(!entry.isIntersecting){
        return
      }
      setShowImage(true)
      observer.disconnect()
    })
  })
  observer.observe(ref)
}

//@ts-ignore
export default function LazyImage ({src}){
const [showImage,setShowImage]=useState(false);
const imageRef = useRef(null);
useEffect(() => {
  registerObserver(imageRef.current, setShowImage)
}, [])
if(showImage){
  return <img src={src} alt="" />
}
  return (
    <span ref={imageRef}>LazyImage</span>
  )
}