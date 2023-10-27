import { useEffect, useState } from "react";

function StudentForm(props) {
  const [name, setName] = useState("props.nameValue");
  const [email, setEmail] = useState("props.emailValue");
  const [rollNo, setRollNo] = useState("props.rollNoValue");

  useEffect(() => {
    setName(props.nameValue);
    setEmail(props.emailValue);
    setRollNo(props.rollNoValue);
  }, [props.nameValue, props.emailValue, props.rollNoValue]);

  const arr = [name, email, rollNo];
  //data available in the child component need to be transferred to the parent component for thet we need callback
  const handleClick = () => {
    props.getState(arr); //this argument arr is ntg but childData
  };

  return (
    <div style={{ maxWidth: "40%", margin: "0px auto" }}>
      <input
        // setting here default values bcs when editing there in the i/p field it should show the already present values
        defaultValue={props.nameValue}
        onChange={(event) => setName(event.target.value)}
        class="form-control my-2"
        placeholder="Enter your name"
      />
      <input
        defaultValue={props.emailValue}
        onChange={(event) => setEmail(event.target.value)}
        class="form-control my-2"
        placeholder="Enter your email"
      />
      <input
        defaultValue={props.rollNoValue}
        onChange={(event) => setRollNo(event.target.value)}
        class="form-control my-2"
        placeholder="Enter your roll number"
      />
      <button
        onClick={handleClick}
        class="btn btn-success my-2 d-block mx-auto"
        type="submit"
      >
        Submit
      </button>
    </div>
  );
}
export default StudentForm;
