import React from "react";
import at from "./Author.module.css";

export default function AuthorTop({ image, name, date }) {
  return (
    <>
      <div className={at.topbox}>
        <div className={at.inside}>
          <div className={at.imgbox}><img src={image} alt="" /></div>
          <div className={at.detail}>
            <h3>{name}</h3>
            <p>{date}</p>
          </div>
        </div>
      </div>
    </>
  );
}
