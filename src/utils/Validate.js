export const checkValidData = (email, password,name) => {
  const isNameValid = /^[a-zA-Z0-9]{4,10}$/.test(name);
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPassWordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if (!isEmailValid) return "Email is not valid";
  if (!isPassWordValid) return "Password is not valid";
  if (!isNameValid)
    return " Enter a valid name(special characters are not allowed)  ";
  return null;
};
