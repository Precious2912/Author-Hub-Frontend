import React, { useState, useEffect } from "react";
import axios from "../../api/axios";
import { Link } from "react-router-dom";
import './Books.css'

export const Books = () => {
  const [books, setBooks] = useState([]);
  const getBooks = async () => {
    // const id = localStorage.getItem('id')
    const token = localStorage.getItem("token");
    const response = await axios.get("https://authorshub.herokuapp.com/books/read", {
      method: "GET",
      headers: {
        contentType: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    setBooks(response.data.record);
    // console.log(books[0].id)

  };

  useEffect(() => {
    getBooks();
  }, []);

  console.log(books);

  return (
    <div className="books-style">
      <Link to="/author">
      </Link>
      <section className="card">
        {books.map((book, index) => {
          const { name, isPublished, datePublished, serialNumber } = book;

          return (
            <article key={index}>
              <div className="item">
                <div className="image-style">
                  <img src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="book" />
                </div>
                <div className="details">
                  <h3> Name: {name}</h3>
                  <p>
                    isPublished: <span>{isPublished === '0' ? 'false' : 'true'}</span>
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
