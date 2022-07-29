import React from "react";

const Form = ({ handleSubmit }) => {
  return (
    <>
      <form action="" onSubmit={handleSubmit} id="adminForm">
        <label htmlFor="name">
          Name
          <input type="text" name="name" />
        </label>
        <br />
        <label htmlFor="password">
          Password
          <input type="password" name="password" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Form;
