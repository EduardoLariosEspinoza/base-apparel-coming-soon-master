import { useState } from "react";
import "./App.css";
import logo from "./assets/logo.svg";
import arrow from "./assets/icon-arrow.svg";
import errorIcon from "./assets/icon-error.svg";

function App() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  function handleChange(event) {
    setEmail(event.target.value);
  }

  function handleSubmit() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email) === error) {
      setError((prev) => !prev);
    }
  }

  return (
    <div className="app">
      <nav>
        <img src={logo} alt="Logo" id="logo" />
      </nav>
      <div id="photo"></div>
      <div id="info">
        <h1 id="title-init">WE&apos;RE</h1>
        <h1>COMING SOON</h1>
        <p>
          Hello fellow shoppers! We&apos;re currently building our new fashion
          store. Add your email below to stay up-to-date with announcements and
          our launch deals.
        </p>
        <div id="input">
          <input
            type="text"
            placeholder="Email Address"
            className={error ? "error" : ""}
            onChange={(event) => handleChange(event)}
          />
          <button onClick={handleSubmit}>
            <img src={arrow} alt="" />
          </button>
          {error && (
            <>
              <img src={errorIcon} alt="" id="error-icon" />
              <p>Please provide a valid email</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
