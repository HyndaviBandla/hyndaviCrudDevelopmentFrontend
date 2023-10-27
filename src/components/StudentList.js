import Axios from "axios";
import StudentListRow from "./StudentListRow";
// axios is http req which is ntg but a sideEffect
import { useEffect, useState } from "react";
function StudentList() {
  const [arr, setArr] = useState([]);
  useEffect(() => {
    Axios.get("https://hyndavis-crud-deployment.onrender.com/studentRoute/")
      .then((res) => {
        if (res.status === 200) setArr(res.data);
        else Promise.reject();
      })
      .catch((err) => alert(err));
  }, []);

  const ListItems = () => {
    return arr.map((val, ind) => {
      //[{_id,name,email,rollNo},{},{}]
      return <StudentListRow obj={val} />;
    });
  };

  return (
    <table class="table table-success table-bordered table-striped">
      <thead>
        <tr style={{ backgroundColor: "forestgreen" }}>
          <th class="text-center">Name</th>
          <th class="text-center">Email</th>
          <th class="text-center">Roll Number</th>
          <th class="text-center">Action</th>
        </tr>
      </thead>

      <tbody>{ListItems()}</tbody>
    </table>
  );
}
export default StudentList;
