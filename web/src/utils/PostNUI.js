import axios from "axios";

const PostNUI = async (data, cb) => {
    await axios.post(`https://${GetParentResourceName()}/${data}`, cb);
};
export default PostNUI;
