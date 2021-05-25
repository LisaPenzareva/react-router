import React from "react";
import { Route, Switch } from "react-router-dom";
import ToDoList from "./ToDo/ToDoList";
import Posts from "./Posts/Posts";
import Albums from "./Albums/Albums";

const PageContent = () => {
  return (
    <Switch>
      <Route path="/todo">
        <ToDoList />
      </Route>
      <Route path="/posts">
        <Posts />
      </Route>
      <Route path="/albums">
        <Albums />
      </Route>
    </Switch>
  );
};

export default PageContent;
