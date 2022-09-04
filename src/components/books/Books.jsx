import React, { useState, useEffect } from "react";
import axios from "../../api/axios";
import { Link } from "react-router-dom";
import "./Books.css";

export const Books = () => {
  const [books, setBooks] = useState([]);
  const getBooks = async () => {
    const token = localStorage.getItem("token");
    const response = await axios.get(
      "https://authorshub.herokuapp.com/books/read",
      {
        method: "GET",
        headers: {
          contentType: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setBooks(response.data.record);
  };

  useEffect(() => {
    getBooks();
  }, []);

  console.log(books);

  return (
    <div className="books-style">
      <Link to="/author"></Link>
      <section className="card">
        {books.map((book, index) => {
          const { name, isPublished, datePublished, serialNumber } = book;

          return (
            <article key={index}>
              <div className="item">
                <div className="image-style">
                  <img src={book.imageURL} alt={book.name} />
                </div>
                <div className="details">
                  <h3> Name: {name}</h3>
                  <p>
                    isPublished:{" "}
                    <span>{isPublished === "0" ? "false" : "true"}</span>
                  </p>
                  <p>
                    datePublished: <span>{datePublished}</span>
                  </p>
                  <p>
                    serialNumber: <span>{serialNumber}</span>
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
};
