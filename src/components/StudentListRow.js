import Axios from "axios";
import { Link } from "react-router-dom";
function StudentListRow(props) {
  const { _id, name, email, rollNo } = props.obj; //object destruction
  const handleClick = () => {
    Axios.delete(
      "https://hyndavis-crud-deployment.onrender.com/studentRoute/delete-student/" +
        _id
    )
      .then((res) => {
        if (res.status === 200) {
          alert("record id deleted sucessfully");
          window.location.reload();
        } else {
          Promise.reject();
        }
      })
      .catch((err) => alert(err));
  };
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{rollNo}</td>
      <td class="d-flex justify-content-center">
        <Link
          class="text-decoration-none text-light"
          to={"/edit-student/" + _id}
        >
          <button class="btn btn-success me-3">
            {/* // since to update the one paticular record we need id */}
            {/* //next we need to modify in app.js that path */}
            Edit
          </button>
        </Link>
        <button class="btn btn-danger" onClick={handleClick}>
          DELETE
        </button>
      </td>
    </tr>
  );
}
export default StudentListRow;
