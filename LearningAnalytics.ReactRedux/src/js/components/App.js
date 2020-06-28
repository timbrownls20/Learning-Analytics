import React from "react";
import List from "./List";
import Form from "./Form";
import Students from "./Students";

const App = () => (
    <>
  {/* <div>
    <h2>Articles</h2>
      <List />
  </div> */}
  <h2 className="jumbotron">Learning Analytics</h2>
  <div className="p-5">
  <div>
    <h2>Add a new student</h2>
    <Form />
  </div>
  <div className="mt-3">
      <h2>Students</h2>
      <Students />
    </div>
  </div>
  </>
);

export default App;