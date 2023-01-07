import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
const Capture = () => {

  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  
  async function handleSubmit(event) {
    event.preventDefault();

    
    const formData = new FormData();
    formData.append("image", file);
    formData.append("title", title);
    formData.append("description", description);

    const response = await fetch("http://localhost:5000/upload", {
      method: "POST",
      body: formData
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      navigate("/");
    } else {
      console.error("An error occurred:", response.statusText);
    }
    // Process the server response here
  }

  return (
    <div class="container">
        <h1 class="mb-4 text-white">New blog post</h1>

        <form action="http://localhost:5000/" method="POST" enctype="multipart/form-data">
            <div class="form-group">

                <label for="title" class="text-white">Title</label>
                <input type="text" class="form-control" placeholder="Title" name="title" onChange={event => setTitle(event.target.value)} required/>
            </div>

            <div class="form-group">

                <label for="description" class="text-white">Description</label>
                <textarea name="description" placeholder="Description" class="form-control" onChange={event => setDescription(event.target.value)}></textarea>
            </div>
            <div class="form-group">
                <label for="image" class="text-white">Upload image</label>
                <input type="file" id="capture" accept="image/*" capture  onChange={event => setFile(event.target.files[0])}/>
              
            </div>

            <div class="form-group">
                <a href="/" class="btn btn-warning">Cancel</a>
                <button type="submit" onClick={handleSubmit}>Save</button>
            </div>
        </form>
    </div>
    
  )
}

export default Capture;

