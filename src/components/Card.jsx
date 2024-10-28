import React from "react";
import ReactDOM from "react-dom";
import contacts from "../contacts";

function Card() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>

      <div>
        {contacts.map((contact) => (
          <div className="card">
            <div key={contact.name}>
              <div className="top">
                <h2 className={"name"}>{contact.name}</h2>
                <img
                  className={"circle-img"}
                  src={contact.imgURL}
                  alt={contact.name}
                />
              </div>

              <div className={"bottom"}>
                <div className="info">
                  <p>{contact.phone}</p>
                  <p>{contact.email}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
