import React from 'react'
import { useNavigate } from 'react-router-dom'
const UploadButton = () => {
    const navigate = useNavigate();
    const onClick = () => {
        navigate("/upload");
    }

  return (
    <button onClick={onClick}>Upload</button>
  )
}

export default UploadButton