export default function bread(state = "", action) {
  switch (action.type) {
    case "CHANGE_BREED":
      return action.payload;
    case "CHANGE_ANIMAL":
      return "";

    default:
      return state;
  }
}
