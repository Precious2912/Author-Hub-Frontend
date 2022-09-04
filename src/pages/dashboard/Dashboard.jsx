import React, { useState } from "react";
import { Dashboard } from "../../components/dashboard";
import { Link } from "react-router-dom";
import { Footer } from "../../components/footer";
import { Logo } from "../../components/logo";
import { Button, Stack, Input, InputGroup } from "@chakra-ui/react";
import { Modal } from "../../components/modal/Modal";
import axios from "../../api/axios";

export const DashboardPage = () => {
  const [showModal, setShowModal] = useState(false);
  const removeLocalStorage = (key) => {
    localStorage.removeItem(key);
  };

  const toggleModal = () => setShowModal(!showModal);

  const handleLogout = () => {
    removeLocalStorage("author");
    removeLocalStorage("token");
    removeLocalStorage("id");
    removeLocalStorage("authenticated");
    window.location.href = "/login";
  };


  const authorName = localStorage.getItem('author').toUpperCase()
  const greeting = `HI ${authorName}! 👋🏼 `

  const [name, setName] = useState("")
  const [isPublished, setIsPublished] = useState("")
  const [datePublished, setDatePublished] = useState("")
  const [serialNumber, setSerialNumber] = useState("")
  const [imageURL, setImageURL] = useState("")


  const token = localStorage.getItem("token");

  const addBook = async () => {
    try {
      const response = await axios.post("https://authorshub.herokuapp.com/books/create", {
        name: name,
        isPublished: Boolean(isPublished),
        datePublished: +datePublished,
        serialNumber: +serialNumber,
        imageURL: imageURL
      }, {
        method: "POST",
        headers: {
          contentType: "application/json",
          Authorization: `Bearer ${token}`,
        }
      }
      )

      console.log(response)
      setShowModal(false)
      window.location.reload(false);
     
    }
    catch(err) {
      console.log(err)
      alert('failed to addbook')
    }

    setName("");
    setIsPublished("");
    setDatePublished("");
    setSerialNumber("");
    setImageURL("")
  };

  return (
    <>
      <div id="nav-container">
        <Logo name={greeting} />
        <Stack direction="row" spacing={4} align="center">
          <Button colorScheme="orange" variant="solid" onClick={toggleModal}>
            Add a book
          </Button>

          <Link to="/books">
            <Button colorScheme="orange" variant="solid">
              View All Books
            </Button>
          </Link>

          {showModal ? (
            <Modal title="Add Book" setShowModal={setShowModal}>
              <Stack spacing={4} onSubmit={addBook} className="register-form">
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
                    onClick={addBook}
                  >
                    Add Book
                  </Button>
                </div>
              </Stack>
            </Modal>
          ) : null}

          <Button colorScheme="orange" variant="solid" onClick={handleLogout}>
            Logout
          </Button>
        </Stack>
      </div>
      <Dashboard />
      <Footer />
    </>
  );
};
