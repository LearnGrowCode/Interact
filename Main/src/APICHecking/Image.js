import React, { useEffect, useState } from 'react'
import { fetchFromAPI } from '../SearchProfiles/utils/fetchAPI'


const Image = () => {
    const [image, setImage] = useState("null")
    useEffect(() => {
       const data = fetchFromAPI(`?name=john%20doe&rounded=true&uppercase=true&font-size=0.5&length=2&size=128&background=000000&color=ffffff`)
       console.log("hi",data)
       setImage(data)
    }, [])
    console.log("Hi",image)
  return (
    <div><img src="" className="h-[100%] w-[100%]"/></div>
  )
}

export default Image