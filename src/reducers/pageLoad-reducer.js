export default function schema(prevState = {}, action) {
  if (action.type === "schema") {
    return action.formData;
  } else {
    return prevState;
  }
}