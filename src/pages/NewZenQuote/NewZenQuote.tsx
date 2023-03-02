//npm modules
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

// stylesheets
import styles from "./NewZenQuote.module.css";

// services
import * as authService from "../../services/authService";
import * as quoteService from "../../services/quoteService";

// types
import { User, Profile, Zen_Quote } from "../../types/models";
import { QuoteFormData } from "../../types/forms";

interface NewZenQuoteProps {
  user: User | null;
  quotes?: Zen_Quote[];
}

interface FormElements extends HTMLFormControlsCollection {
  quote: HTMLInputElement;
}

interface FormElement extends HTMLFormElement {
  elements: FormElements;
}

const handleFormSubmit = (e: React.FormEvent<FormElement>) => {
  const newFormData = { quote: e.currentTarget.elements.quote.value };
  quoteService.create(newFormData);
  const navigate = useNavigate();
  navigate("/myquotes");

  e.preventDefault();
};

const NewZenQuote = (props: NewZenQuoteProps): JSX.Element => {
  return (
    <div className={styles.newZenQuote_img}>
      <>
        <h1 className={styles.NewZenQuote_h1}>New Zen Quote</h1>
        <main className={styles.container}>
          <form className={styles.NewZenQuoteForm} onSubmit={handleFormSubmit}>
            <div className={styles.NewZenQuoteForm}>
              <label htmlFor="title-input">Add Zen Quote:</label>
              <input required type="text" name="quote" id="quote" />
            </div>
            <button
              className={styles.NewZenQuoteBtn}
              id="formButton"
              type="submit"
            >
              SUBMIT
            </button>
          </form>
        </main>
      </>
    </div>
  );
};

export default NewZenQuote;
