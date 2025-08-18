import React from "react";

const UserContext = React.createContext({
    loggedUser : "Default user",
});

export default UserContext;