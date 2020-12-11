import React from "react";
import Table from "react-bootstrap/Table";

const List = ({ contact }) => {
  return (
    <>
      {contact.map((person) => {
        const { id, name, email, image } = person;
        return (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>IMAGE</th>
                <th>NAME</th>
                <th>EMAIL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{id}</td>
                <td>
                  <img src={image} width="150" height="150" />
                </td>
                <td>{name}</td>
                <td>{email}</td>
              </tr>
            </tbody>
          </Table>
        );
      })}
    </>
  );
};

export default List;
