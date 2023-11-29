import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MoreHorizontal, Plus, User } from "react-feather";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { size } from "lodash";
function Card(props) {

  return (
    <div className="card">
      <div>
        <p className="id1">{props.ticket.id}</p>
        <p className="id2">{props.ticket.title}</p>
      </div>
      <div className="profile_image">
        <User size={24} />
      </div>
      <div className="indicator"></div>
      <div className="icon-tag-container">
        <MoreHorizontal size={20} style={{ paddingLeft: "10px" }} />
        <div className="tag" >{props.ticket.tag}</div>
      </div>

    </div>
  );
}

export default Card;
