import { PostType } from "../Ig";
import Post from "./Post";
import { useSelector } from "react-redux";

const Landing = ({ posts }: { posts: PostType[] }) => {
  const user = useSelector((state: any) => state.user);
  console.log(posts);
  return (
    <div className="container_landing">
      <div className="row">
        <div className="col-8">
          <div className="card story ">
            {[...Array(15)].map((_, i) => (
              <div className="story-img">
                <img
                  src="https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="post">
        {posts.length > 0 ? (
          posts.map((post) => <Post post={post} />)
        ) : (
          <h1>Your Posts</h1>
        )}
      </div>
      <div className="col-4"></div>
    </div>
  );
};

export default Landing;
