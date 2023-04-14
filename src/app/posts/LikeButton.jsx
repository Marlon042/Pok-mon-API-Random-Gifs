"use client"
import { useState } from "react";
export function LikeButton({ id }) {
  const [liked, setliked] = useState(false);

  return(
  <button onClick={() => setliked(!liked)}>
     {liked ? "♡" : "💗"}
    
    </button>
    ) 
}
