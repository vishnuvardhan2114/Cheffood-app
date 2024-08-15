import { createContext } from "react";

const UserContext = createContext({
  logedInUser: "default",
});

export default UserContext;
