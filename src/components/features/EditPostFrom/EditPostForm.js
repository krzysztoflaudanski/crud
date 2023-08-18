import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";
import { editPost } from "../../../redux/postsRedux";
import PostForm from "../PostForm/PostForm";
import { useParams } from "react-router-dom";
import { getPostById } from "../../../redux/postsRedux";

const EditPostForm = () => {
    const { postId } = useParams();
    const postData = useSelector(state => getPostById(state, postId))
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSubmit = post => {
        dispatch(editPost({ ...post, postId }));
        navigate('/')
    };

    if (!postData) return <Navigate to="/" />
    return (
        <PostForm action={handleSubmit} actionText="Edit post" title={postData.title} author={postData.author}
            publishedDate={postData.publishedDate} shortDescription={postData.shortDescription} content={postData.content} category={postData.category}/>
    )
};

export default EditPostForm;