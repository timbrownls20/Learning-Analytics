import React from "react";
import Form from "./Form";
import StudentList from "./StudentList";

const App = () => (
    <>
  <h2 className="jumbotron">Learning Analytics</h2>
  <div className="p-5">
  <div>
    <h2>Add a new student</h2>
    <Form />
  </div>
  <div className="mt-3">
      <h2>Students</h2>
      <StudentList />
    </div>
  </div>
  </>
);

export default App;