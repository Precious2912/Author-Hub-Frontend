import React, { useState, useEffect } from "react";
import axios from "../../api/axios";
import "./Dashboard.css";
import { Modal } from "../modal/Modal";
import { Button, Stack, Input, InputGroup } from "@chakra-ui/react";
import { Link, useNavigate, useParams } from "react-router-dom";

export const Dashboard = () => {
  const [authors, setAuthor] = useState([]);

  const getAuthor = async () => {
    const id = localStorage.getItem("id");
    const response = await axios.get(
      `https://authorshub.herokuapp.com/users/read/${id}`
    );
    setAuthor(response.data.record);
  };

  console.log(authors);

  useEffect(() => {
    getAuthor();
  }, []);

  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [name, setName] = useState("");
  const [isPublished, setIsPublished] = useState("");
  const [datePublished, setDatePublished] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [imageURL, setImageURL] = useState("");

  let { id } = useParams();

  const token = localStorage.getItem("token");

  const getBookById = async () => {
    const response = await axios.get(
      `https://authorshub.herokuapp.com/books/read/${id}`,
      {
        method: "GET",
        headers: {
          contentType: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 200) {
      setName(response.data.record.name);
      setIsPublished(response.data.record.isPublished);
      setDatePublished(response.data.record.datePublished);
      setSerialNumber(response.data.record.serialNumber);
      setImageURL(response.data.record.imageURL);
    }
  };

  useEffect(() => {
    getBookById();
    // eslint-disable-next-line
  }, [id]);

  const editBook = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `https://authorshub.herokuapp.com/books/update/${id}`,
        {
          name: name,
          isPublished: Boolean(isPublished),
          datePublished: +datePublished,
          serialNumber: +serialNumber,
          imageURL: imageURL,
        },
        {
          method: "PUT",
          headers: {
            contentType: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setShowModal(false);

      if (response.status === 202) {
        window.location.reload(false);
      }

    } catch (err) {
      console.log(err);
    }

      window.location.reload(false);
    setName("");
    setIsPublished("");
    setDatePublished("");
    setSerialNumber("");
    setImageURL("");
  };

  const navigate = useNavigate();
  const removeBook = async (e) => {
    try {
      e.preventDefault();
      const thisClicked = e.currentTarget;
      thisClicked.innerText = "Deleting";
      const response = await axios.delete(
        `https://authorshub.herokuapp.com/books/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            contentType: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        thisClicked.closest("div").remove();
        navigate("/dashboard");
      }

      thisClicked.innerText = "Delete";

      setShowDeleteModal(!showDeleteModal);

      window.location.reload(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="dashboard-card">
      {authors.map((author, index) => (
        <>
          {/* loop over the books */}
          {author.books.map((book, i) => (
            <div key={i + 1} className="dashboard">
              <div className="dashboard-image">
                <img src={book.imageURL} alt={book.name} />
              </div>
              <article className="article">
                <h3> Name: {book.name}</h3>
                <p>
                  isPublished:{" "}
                  <span>{book.isPublished === "0" ? "false" : "true"}</span>
                </p>
                <p>
                  datePublished: <span>{book.datePublished}</span>
                </p>
                <p>
                  serialNumber: <span>{book.serialNumber}</span>
                </p>
              </article>

              <div className="btn-grp">
                <Link to={`/dashboard/${book.id}`}>
                  <Button
                    size="sm"
                    height="30px"
                    width="80px"
                    border="2px"
                    borderColor="rgb(76, 55, 15).500"
                    onClick={() => {
                      setShowModal(!showModal);
                      getBookById();
                    }}
                  >
                    Edit
                  </Button>
                </Link>

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
                          type="text"
                          name="serialNumber"
                          value={serialNumber}
                          placeholder="Serial Number"
                          onChange={(e) => setSerialNumber(e.target.value)}
                        />
                      </InputGroup>

                      <InputGroup size="md">
                        <Input
                          pr="4.5rem"
                          type="text"
                          name="imageURL"
                          value={imageURL}
                          placeholder="Image URL"
                          onChange={(e) => setImageURL(e.target.value)}
                        />
                      </InputGroup>

                      <div className="btn">
                        <Button
                          size="md"
                          height="48px"
                          width="100px"
                          border="1px"
                          borderColor="rgb(76, 55, 15).500"
                          onClick={editBook}
                        >
                          Update
                        </Button>
                      </div>
                    </Stack>
                  </Modal>
                ) : null}
                <Link to={`/dashboard/${book.id}`}>
                  <Button
                    size="sm"
                    height="30px"
                    width="80px"
                    border="2px"
                    borderColor="rgb(76, 55, 15).500"
                    type="submit"
                    onClick={() =>
                      setShowDeleteModal({ showDeleteModal: !showDeleteModal })
                    }
                  >
                    Delete
                  </Button>
                </Link>

                {showDeleteModal ? (
                  <Modal
                    title="Are you show you want to Delete?"
                    setShowModal={setShowDeleteModal}
                  >
                    <Stack
                      spacing={4}
                      onSubmit={editBook}
                      className="delete-book-modal"
                    >
                      <div className="delete-modal-btn">
                        <Button
                          size="sm"
                          height="30px"
                          width="80px"
                          border="2px"
                          className="cancel-delete"
                          borderColor="rgb(76, 55, 15).500"
                          type="submit"
                          onClick={() => setShowDeleteModal(!showDeleteModal)}
                        >
                          Cancel
                        </Button>

                        <Link to={"/dashboard"}>
                          <Button
                            size="sm"
                            height="30px"
                            width="80px"
                            border="2px"
                            borderColor="rgb(76, 55, 15).500"
                            type="submit"
                            className="delete-book"
                            onClick={(e) => removeBook(e)}
                          >
                            Delete
                          </Button>
                        </Link>
                      </div>
                    </Stack>
                  </Modal>
                ) : null}
              </div>
            </div>
          ))}
        </>
      ))}
    </section>
  );
};
