import { useState } from "react";
import ItemPerson from "./ItemPerson";
import personData from "../JsonInformation/JsonInformation.json";

const ListPerson = () => {
  // Initialize state with the JSON data
  const [contacts, setContacts] = useState(personData);

  // Function to handle the deletion of a contact
  const deletePerson = (id) => {
    const updatedContacts = contacts.filter((person) => person.id !== id);
    setContacts(updatedContacts); // Update the state with the new contacts array
  };

  return (
    <ul>
      {contacts.map(
        (
          person // Use contacts instead of personData
        ) => (
          <ItemPerson
            key={person.id}
            id={person.id}
            firstName={person.firstName}
            lastName={person.lastName}
            email={person.email}
            deletePerson={deletePerson} // Pass delete function as a prop
          />
        )
      )}
    </ul>
  );
};

export default ListPerson;
