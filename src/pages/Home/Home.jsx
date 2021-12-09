import React, { useEffect, useState } from "react";
import "./styles.css";
import { Image } from "cloudinary-react";
import Axios from "axios";
import { AiFillLike } from "react-icons/ai";

export default function Home() {
  const [uploads, setUploads] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("loggedIn")) {
      localStorage.setItem("loggedIn", false);
    }
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:3001/upload").then((response) => {
      setUploads(response.data);
    });
  }, []);
  console.log(uploads);

  const likePost = (id, key) => {
    var tempLikes = uploads;
    tempLikes[key].likes = tempLikes[key].likes + 1;

    Axios.post("http://localhost:3001/upload/like", {
      userLiking: localStorage.getItem("username"),
      postId: id,
    }).then((response) => {
      setUploads(tempLikes);
    });
  };

  return (
    <div className="home">
      {uploads.map((val, key) => (
        <div className="post" key={val.id}>
          <div className="image">
            <Image cloudName="emprendeduros" publicId={val.image} />
          </div>
          <div className="content">
            <div className="titlle">
              {val.title} / by @{val.author}
            </div>
            <div className="description">{val.description}</div>
          </div>
          <div className="Engagement">
            <AiFillLike
              style={{ fontSize: 40, color: "grey" }}
              id="likeButton"
              onClick={() => {
                likePost(val.id, key)
              }}
            />
          </div>
          {val.likes}
        </div>
      ))}
    </div>
  );
}
