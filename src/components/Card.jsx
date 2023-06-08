import React from "react";
import Avatar from "./Avatar";
import Detail from "./Details";

function Card(props) {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <Avatar img={props.img} />
        </div>
        <div className="bottom">
          <Detail detailInfo={props.tel} />
        <Detail detailInfo={props.email} />
        </div>
      </div>
    </div>
  );
}

export default Card;
