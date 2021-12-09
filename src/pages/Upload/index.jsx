import { useState } from "react";
import Axios from "axios";
import "./styles.css";
import { useNavigate } from "react-router-dom";

export default function Upload() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState([]);

  const navigate = useNavigate();

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("file", image[0]);
    formData.append("upload_preset", "m2wua9zo");
    Axios.post(
      `https://api.cloudinary.com/v1_1/emprendeduros/image/upload`,
      formData
    ).then((response) => {
      const fileName = response.data.public_id;

      Axios.post("http://localhost:3001/upload", {
        title: title,
        description: description,
        image: fileName,
        author: localStorage.getItem("username"),
      }).then(() => {
        navigate("/");
      });
    });
  };

  return (
    <div className="upload">
      <h2>Create A Post</h2>
      <div className="upload_form">
        <input
          type="text"
          placeholder="Title..."
          name="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description..."
          name="description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input type="file" onChange={(e) => setImage(e.target.files)} />
        <button onClick={handleUpload}>Upload</button>
      </div>
    </div>
  );
}
