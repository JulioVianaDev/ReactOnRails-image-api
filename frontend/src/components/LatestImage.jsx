import React, { useContext } from 'react'
import { useEffect } from 'react';
import { AppContext } from '../App'

function LatestImage() {
  const {latest,setLatest} = useContext(AppContext);
  useEffect(()=>{
    fetch('http://localhost:3001/latest')
      .then((res)=>res.json())
      .then(data=>{
        setLatest(data.image_url)
      })
      .catch((err)=>console.log(err ));
  },[latest])

  return (
    <div>
      <img src={latest} alt=''/>
    </div>
  )
}

export default LatestImage