import { useState } from "react";
// import "./App.css";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <div>
        <h1>Welcome to the Dropbox clone</h1>
        <form action="" className={styles.form_container}>
          <input
            type="Username"
            className={styles.form_input}
            placeholder="Username"
          />
          <input
            type="Username"
            className={styles.form_input}
            placeholder="passowrd"
          />
          <button className={styles.button}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
