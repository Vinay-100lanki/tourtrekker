import { useState } from "react";
import './Card.css'

export default function Card ({ id, name, image, price, info ,removeTour}) {
  const [infoReadMore, setInfoReadMore] = useState(false);
  const desc = infoReadMore ? info : `${info.substring(0, 200)}....`;

  function readMoreHandler(){
    setInfoReadMore(!infoReadMore);
  }

  return (
    <div className="card">
      <img src={image} alt="cityImage" className="cityImage" />
      <div className="tourInfo">
        <div className="tourDetails">
          <h4 className="cost">&#8377; {price}</h4>
          <h4 className="cityName">{name}</h4>
        </div>
        <div className="desc">
          {desc}
          <span className="readMore" onClick={readMoreHandler}>
            {infoReadMore?`show less`:`read more`}
          </span>
        </div>
      </div>
      <button className="btn" onClick={()=>removeTour(id)}>Not Interested</button>
    </div>
  );
}
