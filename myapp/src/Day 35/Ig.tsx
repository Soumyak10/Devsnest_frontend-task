import REACT from "react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { User, updateUser } from "./actions";
import Navbar from "./component/Navbar";
import Landing from "./component/Landing";

export interface PostType {
  username: string;
  post: string;
}

const Ig = () => {
  const user = useSelector((state: any) => state.user);
  const [posts, setPosts] = React.useState<PostType[]>([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateUser());
    fetch("/data/post.json")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div className="main_container">
      <Navbar />
      <Landing posts={posts} />
    </div>
  );
};

export default Ig;
