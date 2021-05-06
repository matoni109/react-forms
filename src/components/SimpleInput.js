import { useEffect, useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef("");
  const [enteredName, setEnteredName] = useState("");
  const [enterNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enterNameTouched, setEnteredNameTouched] = useState(false);

  const nameInputChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredName(event.target.value);
  };

  useEffect(() => {
    if (enterNameIsValid) {
      console.log("Name INput is valid");
    }
  }, [enterNameIsValid]);

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);
    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }
    setEnteredNameIsValid(true);
    console.log(enteredName);
    // const enteredvalue = nameInputRef.current.value;
    // console.log(enteredvalue);
    setEnteredName("");
  };

  const nameInputIsInvalid = !enterNameIsValid && enterNameTouched;

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control ";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          // ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && <p>Can't be Empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
