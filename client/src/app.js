import React from "react";
import Form from "./form";

const App = () => {
  const URL = "http://localhost:4000/";
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      // console.log(, e.target.password.value);
      const formData = new FormData();
      formData.append("name", e.target.name.value);
      formData.append("password", e.target.password.value);
      let response = await fetch(`${URL}`, {
        method: "POST",
        body: new URLSearchParams(
          new FormData(document.getElementById("adminForm"))
        ),
      });
      let resjson = await response.json();
      console.log(resjson);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <Form handleSubmit={handleSubmit} />;
    </>
  );
};

export default App;
