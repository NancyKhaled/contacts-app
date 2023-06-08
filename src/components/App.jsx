import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function createCard(contact) {
    return (
      <Card
        key={contact.id}
        name={contact.name}
        img={contact.imgURL}
        tel={contact.phone}
        email={contact.email}
      />
    );
  }

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
        <hr />
      <div className="container">
        <div className="row">
        {contacts.map(createCard)}
        </div>
      </div>
    </div>
  );
}

export default App;