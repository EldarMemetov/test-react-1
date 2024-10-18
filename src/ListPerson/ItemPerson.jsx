const ItemPerson = ({ firstName, lastName, email, id, deletePerson }) => {
  const handleDelete = () => {
    deletePerson(id); // Call the delete function passed from ListPerson
  };

  return (
    <li>
      <p>{firstName}</p>
      <p>{lastName}</p>
      <p>{email}</p>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default ItemPerson;
