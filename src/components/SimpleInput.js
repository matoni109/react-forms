import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: setEnteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
    // passes the value as a function below...
    // mind bending hey..
    // yep
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: setEnteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
    // passes the value as a function below...
    // mind bending hey..
    // yep
  } = useInput((value) => value.includes("@"));

  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enterNameIsValid, setEnteredNameIsValid] = useState(false);
  // const [enterNameTouched, setEnteredNameTouched] = useState(false);
  // const [enterEmailTouched, setEnterEmailTouched] = useState(false);
  // const [formIsValid, setFormIsValid] = useState(false);

  // const enterEmailIsValid = enteredEmail.includes("@");
  //

  // const emailInputIsInvalid = !setEnteredNameIsValid && !setEnteredEmailIsValid;

  // const inputChangeHandler = (event) => {
  //   const input = event.target.id;

  //   //   // case it baby
  //   //   switch (input) {
  //   //     case "name":
  //   //       setEnteredName(event.target.value);
  //   //       console.log("name");
  //   //       break;
  //   //     case "email":
  //   //       setEnteredEmail(event.target.value);
  //   //       console.log("email");
  //   //       break;
  //   //     default:
  //   //       console.log("Something Broken Baby");
  //   //   }
  // };

  // const inputBlurHandler = (event) => {
  //   const input = event.target.id;
  //   // case it baby
  //   switch (input) {
  //     case "name":
  //       setEnteredNameTouched(true);
  //       break;
  //     case "email":
  //       setEnterEmailTouched(true);
  //       break;
  //     default:
  //       console.log("Something Broken Baby");
  //   }
  // };

  let formIsValid = false;

  if (setEnteredNameIsValid && setEnteredEmailIsValid) {
    formIsValid = true;
  }

  // useEffect(() => {
  //   // check all the valids
  //   if (enterNameIsValid) {
  //     return setFormIsValid(true);
  //   }

  //   setFormIsValid(false);
  // }, [enterNameIsValid]);

  // useEffect(() => {
  //   if (enterNameIsValid) {
  //     console.log("Name INput is valid");
  //   }
  // }, [enterNameIsValid]);

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    // setEnteredNameTouched(true);
    if (!setEnteredEmailIsValid && !setEnteredNameIsValid) {
      return;
    }
    resetNameInput();
    resetEmailInput();
    // setEnteredName("");

    // setEnteredNameTouched(false);
    // setEnterEmailTouched(false);
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control ";

  const emailInputClasses = emailInputHasError
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
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && <p>Name field can't be empty</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          // ref={nameInputRef}
          type="email"
          id="email"
          onChange={emailChangedHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && <p>Email field can't be empty</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
