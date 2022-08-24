import React, { useState, useEffect } from "react";
import axios from "../../api/axios";
import "./Dashboard.css";
import { Modal } from "../modal/Modal";
import { Button, Stack, Input, InputGroup } from "@chakra-ui/react";

export const Dashboard = () => {
  const [authors, setAuthor] = useState([]);

  const getAuthor = async () => {
    const id = localStorage.getItem("id");
    const response = await axios.get(
      `https://authorshub.herokuapp.com/users/read/${id}`
    );
    setAuthor(response.data.record);
  };

  useEffect(() => {
    getAuthor();
  }, []);

  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);

  // const [deleteModal, setDeleteModal] = useState(false);
  // const toggleDeleteModal = () => setDeleteModal(!deleteModal);

  const [name, setName] = useState("");
  const [isPublished, setIsPublished] = useState("");
  const [datePublished, setDatePublished] = useState("");
  const [serialNumber, setSerialNumber] = useState("");

  const token = localStorage.getItem("token");

  const [editItem, setEditItem] = useState({
    book: {},
    edit: false,
  });
  const updateBook = async (id, updateBook) => {
    const response = await axios.put(
      `https://authorshub.herokuapp.com/books/create/${id}`,
      { body: JSON.stringify(updateBook) },
      {
        method: "PUT",
        headers: {
          contentType: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();
    setAuthor(
      authors.map((author) => {
        author.books.map((book) => {
          return book.id === id ? { ...book, data } : book;
        });
      })
    );

    // setName("");
    // setIsPublished("");
    // setDatePublished("");
    // setSerialNumber("");
  };

  // set books to updated
  const editBook = (book) => {
    setEditItem({ book: {}, edit: true });
  };

  return (
    <section className="dashboard-card">
      {authors.map((author, index) => (
        <>
          {/* loop over the books */}
          {author.books.map((book, i) => (
            <div key={i} className="dashboard">
              <div className="dashboard-image">
                <img
                  src="https://images.unsplash.com/photo-1544716278-e513176f20b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                  alt="book"
                />
              </div>
              <article className="article">
                <h3> Name: {book.name}</h3>
                <p>
                  isPublished:{" "}
                  <span>{book.isPublished == "0" ? "false" : "true"}</span>
                </p>
                <p>
                  datePublished: <span>{book.datePublished}</span>
                </p>
                <p>
                  serialNumber: <span>{book.serialNumber}</span>
                </p>
              </article>

              <div className="btn-grp">
                <Button
                  size="sm"
                  height="30px"
                  width="80px"
                  border="2px"
                  borderColor="rgb(76, 55, 15).500"
                  onClick={toggleModal}
                >
                  Edit
                </Button>

                {showModal ? (
                  <Modal title="Edit Book" setShowModal={setShowModal}>
                    <Stack
                      spacing={4}
                      onSubmit={editBook}
                      className="register-form"
                    >
                      <InputGroup size="md">
                        <Input
                          pr="4.5rem"
                          type="text"
                          name="name"
                          value={name}
                          placeholder="Author"
                          onChange={(e) => setName(e.target.value)}
                        />
                      </InputGroup>

                      <InputGroup size="md">
                        <Input
                          pr="4.5rem"
                          type="text"
                          name="isPublished"
                          value={isPublished}
                          placeholder="Is Published"
                          onChange={(e) => setIsPublished(e.target.value)}
                        />
                      </InputGroup>

                      <InputGroup size="md">
                        <Input
                          pr="4.5rem"
                          type="text"
                          name="datePublished"
                          value={datePublished}
                          placeholder="Date Published"
                          onChange={(e) => setDatePublished(e.target.value)}
                        />
                      </InputGroup>

                      <InputGroup size="md">
                        <Input
                          pr="4.5rem"
                          type="texf"
                          name="serialNumber"
                          value={serialNumber}
                          placeholder="Serial Number"
                          onChange={(e) => setSerialNumber(e.target.value)}
                        />
                      </InputGroup>

                      <div className="btn">
                        <Button
                          size="md"
                          height="48px"
                          width="100px"
                          border="1px"
                          borderColor="rgb(76, 55, 15).500"
                          // onClick={editBook(book)}
                        >
                          Update
                        </Button>
                      </div>
                    </Stack>
                  </Modal>
                ) : null}

                <Button
                  size="sm"
                  height="30px"
                  width="80px"
                  border="2px"
                  borderColor="rgb(76, 55, 15).500"
                  type="submit"
                  // onClick={toggleDeleteModal}
                  // onClick={handleLogin}
                >
                  Delete
                </Button>

                {/* {showModal ? (
              <Modal title="Delete Book" setDeleteModal={setDeleteModal}>
                <h1>Hello Delete</h1>
              </Modal>
            ) : null} */}
              </div>
            </div>
          ))}
        </>
      ))}
    </section>
  );
};
