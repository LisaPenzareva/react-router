import React, { useContext, useEffect, useState, Fragment } from "react";
import { userContext } from "../App";
import Loading from "../Loading";
import { URL } from "../../data";

const ToDoList = () => {
  const [todoList, setTodoList] = useState([]);
  const cntxt = useContext(userContext);

  useEffect(() => {
    fetchingData();
  }, []);

  useEffect(() => {
    fetchingData();
  }, [cntxt.user]);

  const fetchingData = () => {
    fetch(`${URL}todos?userId=${cntxt.user.id}`)
      .then((data) => data.json())
      .then((json) => setTodoList(json));
  };

  const renderTodoList = () => {
    if (!todoList.length) {
      return <Loading />;
    }
    return todoList.map((item) => (
      <div className="cont" id={"todo_" + item.id} key={item.id}>
        {item.title}
      </div>
    ));
  };

  return <Fragment>{renderTodoList()}</Fragment>;
};

export default ToDoList;
