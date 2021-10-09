//rafce
import { PostType } from "../Ig";
const Post = ({ post }: { post: PostType }) => {
  return (
    <div>
      <div className="card">
        <img src={post.post} className="card-img-top" alt="..." />
      </div>
    </div>
  );
};

export default Post;
