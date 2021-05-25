import React, { useState, Fragment } from "react";
import User from "./User";
import PageNavigate from "./PageNavigate";
import PageContent from "./PageContent";

export const userContext = React.createContext();

const App = () => {
  const [user, setUser] = useState(null);
  const changeUser = (newUser) => {
    setUser(newUser);
  };
  const renderPage = () => {
    if (!user) return null;
    return (
      <Fragment>
        <section className="container">
          <PageNavigate />
          <PageContent />
        </section>
      </Fragment>
    );
  };
  return (
    <userContext.Provider value={{ user, changeUser }}>
      <User />
      {renderPage()}
    </userContext.Provider>
  );
};
export default App;
