"use client";

import { useState } from "react";

export default function StudentForm() {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setSubmittedName(name);
  }

  return (
    <div className="card">
      <h2>Student Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <button type="submit">Submit</button>
      </form>

      {submittedName ? (
        <p>Hello {submittedName}! Your name was submitted successfully.</p>
      ) : (
        <p>Please enter your name.</p>
      )}
    </div>
  );
}