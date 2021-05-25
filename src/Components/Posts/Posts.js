import React, { useContext, useEffect, useState, Fragment } from "react";
import { userContext } from "../App";
import Loading from "../Loading";
import { URL } from "../../data";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const cntxt = useContext(userContext);

  useEffect(() => {
    fetchingData();
  }, []);

  useEffect(() => {
    fetchingData();
  }, [cntxt.user]);

  const fetchingData = () => {
    fetch(`${URL}posts?userId=${cntxt.user.id}`)
      .then((data) => data.json())
      .then((json) => setPosts(json));
  };

  const renderPosts = () => {
    if (!posts.length) {
      return <Loading />;
    }
    return posts.map((item) => (
      <div className="cont" id={"post_" + item.id} key={item.id}>
        {item.title}
        <div className="cont">{item.body}</div>
      </div>
    ));
  };

  return <Fragment>{renderPosts()}</Fragment>;
};

export default Posts;
