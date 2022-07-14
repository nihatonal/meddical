import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";

import './LikeBtn.css';
function LikeBtn(props) {
  const [like, setLikes] = useState(0);

  return <button className="btn-like"onClick={() => setLikes(like + 1)}><FaRegHeart className="faheart"/>{props.likes+like}</button>;
}

export default LikeBtn