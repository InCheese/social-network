import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import { required, maxLength30 } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormControls/FormControls";

const MyPosts = ({ posts, addPost }) => {
  const onAddPost = (value) => {
    addPost(value.newPostText);
  };
  return (
    <div className={styles.posts}>
      <div>
        <h2>My posts</h2>
        <NewPostReduxForm onSubmit={onAddPost} />
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};

const NewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={styles.content}>
        <div className={styles.textarea}>
          <Field
            name="newPostText"
            component={Textarea}
            placeholder="Write your post..."
            value={props.newPostText}
            validate={[required, maxLength30]}
          />
        </div>
        <button>Add</button>
      </div>
    </form>
  );
};

const NewPostReduxForm = reduxForm({ form: "newPostForm" })(NewPostForm);

export default MyPosts;
