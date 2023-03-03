//npm modules
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
// stylesheets
import styles from "./MyQuotes.module.css";

// services
import * as authService from "../../services/authService";
import * as quoteService from "../../services/quoteService";

// types
import { User, Profile, Zen_Quote } from "../../types/models";
import { getMyQuotes } from "../../services/quoteService";

interface MyQuotesProps {
  user: User | null;
  quotes?: Zen_Quote[];
}

interface FormElements extends HTMLFormControlsCollection {
  quote: HTMLInputElement;
  id: HTMLInputElement;
}

interface FormElement extends HTMLFormElement {
  elements: FormElements;
}

const MyQuotes = (props: MyQuotesProps): JSX.Element => {
  const { quotes } = props;

  if (!quotes?.length) return <p className={styles.MyQuotes_p}>No quotes yet</p>;

  const handleEditQuote = (e: React.FormEvent<FormElement>) => {
    const newFormData = { quote: e.currentTarget.elements.quote.value };
    quoteService.editQuote(
      newFormData,
      parseInt(e.currentTarget.elements.id.value)
    );
    const navigate = useNavigate();
    navigate("/myquotes");
    e.preventDefault();
  };

  const handleDeleteQuote = (e: React.FormEvent<FormElement>) => {
    console.log(e.currentTarget.elements.id.value);
    quoteService.deleteQuote(parseInt(e.currentTarget.elements.id.value));
    const navigate = useNavigate();
    navigate("/myquotes");

    e.preventDefault();
  };

  return (
      <div className={styles.MyQuotes_img}>
    <>
      <h1 className={styles.MyQuotes_h1}>My Quotes</h1>
      <main  className={styles.container}>
        {quotes.map((myQuotes) => (
          <div key={myQuotes.id}>
            <form className={styles.myQuotesForm} onSubmit={handleEditQuote}>
              <label htmlFor="title-input">Quote:</label>
              <input
                required
                type="text"
                name="quote"
                id="quote"
                defaultValue={myQuotes.quote}
              />
              <input
                required
                type="hidden"
                name="id"
                id="id"
                value={myQuotes.id}
              />
              <button className={styles.myQuotesBtn} id="formButton" type="submit">
                UPDATE
              </button>
            </form>
            <form className={styles.myQuotesForm} onSubmit={handleDeleteQuote}>
              <input
                required
                type="hidden"
                name="id"
                id="id"
                value={myQuotes.id}
              />
              <button className={styles.myQuotesBtn} type="submit">DELETE QUOTE</button>
            </form>
          </div>
        ))}
      </main>
    </>
        </div>
  );
};

export default MyQuotes;
