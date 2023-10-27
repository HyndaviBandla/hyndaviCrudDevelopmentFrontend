import { useParams } from "react-router-dom";
import StudentForm from "./StudentForm";
import { useEffect, useState } from "react";
import Axios from "axios";

function EditStudent() {
  // useParams is used bcs we r getting somting from the url from app.js as //edit-student/:id
  const { id } = useParams(); //object destruction
  // alert(id);
  const [initialValue, setInitialValue] = useState({
    name: "",
    email: "",
    rollNo: "",
  });
  //after clicking edit btn
  const [newValue, setNewValue] = useState([]);
  //in edit student the ype of req is put and if it is create student the type of req is post
  useEffect(() => {
    Axios.get(
      "https://hyndavis-crud-deployment.onrender.com/studentRoute/update-student/" +
        id
    )
      .then((res) => {
        if (res.status === 200) {
          const { name, email, rollNo } = res.data;
          setInitialValue({ name, email, rollNo });
        } else Promise.reject();
      })
      .catch((err) => alert(err));
  }, [id]);

  const getState = (childData) => {
    setNewValue(childData);
  };
  const handleSubmit = () => {
    const data = { name: newValue[0], email: newValue[1], rollNo: newValue[2] };
    Axios.put(
      "https://hyndavis-crud-deployment.onrender.com/studentRoute/update-student/" +
        id,
      data
    )
      .then((res) => {
        if (res.status === 200) {
          alert("record updated");
          window.location.assign("/#/student-list");
        } else {
          Promise.reject();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <StudentForm
        getState={getState}
        nameValue={initialValue.name}
        emailValue={initialValue.email}
        rollNoValue={initialValue.rollNo}
      />
    </form>
  );
}
export default EditStudent;
