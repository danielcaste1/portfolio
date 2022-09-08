import React from "react";
import { ContactItem } from "./ContactItem";

function Contact({ contacts }) {
  return (
    <div className="contact container" id="contact">
      <span className="contact__title">Contact</span>
      <div className="contact__items">
        {contacts.map((contact) => {
          return (
            <ContactItem
              key={contact.name}
              icon={contact.icon}
              name={contact.name}
              url={contact.url}
            />
          );
        })}
      </div>
    </div>
  );
}

export { Contact };
