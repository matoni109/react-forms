import useInput from "../hooks/use-input";
// https://academind.com/tutorials/reactjs-a-custom-useform-hook/
// FORMIK Forms
const BasicForm = (props) => {
  // email
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
  // first_name
  const {
    value: enteredFirstName,
    isValid: setEnteredFirstNameIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameChangedHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetfirstNameInput,
    // passes the value as a function below...
    // mind bending hey..
    // yep
  } = useInput((value) => value.length > 6 && value !== "");
  // last_name
  const {
    value: enteredLastName,
    isValid: setEnteredLastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangedHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetlastNameInput,
    // passes the value as a function below...
    // mind bending hey..
    // yep
  } = useInput((value) => value.length > 6 && value !== "");

  // submit handler
  const formSubmissionHandler = (event) => {
    event.preventDefault();
    // console.log("hey");

    if (
      !setEnteredEmailIsValid &&
      !setEnteredFirstNameIsValid &&
      !setEnteredLastNameIsValid
    ) {
      return;
    }

    resetEmailInput();
    resetlastNameInput();
    resetfirstNameInput();
  };

  //css bits
  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control ";

  const firstNameInputClasses = firstNameInputHasError
    ? "form-control invalid"
    : "form-control ";

  const lastNameInputClasses = lastNameInputHasError
    ? "form-control invalid"
    : "form-control ";

  // for is valid
  let formIsValid = false;

  if (
    setEnteredEmailIsValid &&
    setEnteredLastNameIsValid &&
    setEnteredFirstNameIsValid
  ) {
    formIsValid = true;
  }

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={firstNameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            value={enteredFirstName}
            onChange={firstNameChangedHandler}
            onBlur={firstNameBlurHandler}
            type="text"
            id="name"
          />
          {firstNameInputHasError && (
            <p className="error-text">erno 1st name</p>
          )}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="last name">Last Name</label>
          <input
            value={enteredLastName}
            onChange={lastNameChangedHandler}
            onBlur={lastNameBlurHandler}
            type="text"
            id="name"
          />
          {lastNameInputHasError && <p className="error-text">erno 2nd name</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          value={enteredEmail}
          onChange={emailChangedHandler}
          onBlur={emailBlurHandler}
          type="email"
          id="email"
        />
        {emailInputHasError && <p className="error-text">erno email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
