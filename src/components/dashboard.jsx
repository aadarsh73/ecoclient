import React, { useState, useEffect } from 'react'
import UserLocation from './userLocation'
import UploadButton from './UploadButton'
import FileBase64 from 'react-file-base64';
import Axios from 'axios';
const Dashboard = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:5000/read').then((response) => {
      setPostList(response.data);
    });
  },[]);
  return (
    <div>
        <UserLocation/>
        <UploadButton/>
        {postList.map((val, key) => {
        return <div key={key} className='food'>
          <p>{val.title}</p>
          <p>{val.description}</p>
          <img src={`data:image/png;base64,${val.image.data}`} alt="posts"/> 
        </div>
      })}
        
    </div>
  )
}

export default Dashboard

