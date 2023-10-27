import { useState } from "react";
import StudentForm from "./StudentForm";
import Axios from "axios";

function CreateStudent() {
  const [arr, setArr] = useState([]); //used to store the values //[Raj,raj@gmail.com,1]

  //declaring a  argument fxn
  const getState = (out) => {
    //chilData={Raj,raj@gmail.com,1}
    setArr(out);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { name: arr[0], email: arr[1], rollNo: arr[2] };
    // Axios.post("http://localhost:4000/studentRoute/create-student", data)

    Axios.post(
      "https://hyndavis-crud-deployment.onrender.com/studentRoute/create-student",
      data
    )
      .then((res) => {
        if (res.status === 200) alert("Record added successfully");
        else Promise.reject();
      })
      .catch((err) => alert(err));
    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <StudentForm getState={getState}></StudentForm>
    </form>
  );
}
export default CreateStudent;
