import { useParams, Link } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../../Contexts/UserContext";
import "./CreateArticle.css";

const CreateArticle = () => {
    const { slug } = useParams();

    const { user } = useContext(UserContext);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [warnings, setWarnings] = useState({
        title: "",
        body: "",
        imgUrl: "",
    });

    const updateTitle = ({ target: { value } }) => {
        setWarnings({
            ...warnings,
            title: value ? "" : "Please create a title.",
        });
    };

    const updateBody = ({ target: { value } }) => {
        setWarnings({
            ...warnings,
            body: value ? "" : "Please write an article body.",
        });
    };

    const updateImgUrl = ({ target: { value } }) => {
        setWarnings({
            ...warnings,
            imgUrl: value ? "" : "Please select an image.",
        });
    };

    return (
        <section id="new-article" className="flex-center">
            <h2>{slug} - Create a New Article</h2>
            <form>
                <label>
                    <h3>Article Title</h3>
                    <input
                        id="new-article-title"
                        onChange={updateTitle}
                        onBlur={updateTitle}
                    />
                    <p>{warnings.title}</p>
                </label>
                <label>
                    <h3>Article Body</h3>
                    <textarea
                        id="new-article-body"
                        onChange={updateBody}
                        onBlur={updateBody}
                    />
                    <p>{warnings.body}</p>
                </label>
                <label id="-new-article-image-label">
                    <h3>Select Image File</h3>
                    <input
                        id="new-article-image"
                        type="file"
                        onChange={updateImgUrl}
                        onBlur={updateImgUrl}
                    />
                    <p>{warnings.imgUrl}</p>
                </label>
                <div id="button-container">
                    <button type="submit">Post</button>
                    <Link to={`/${slug}`}>
                        <button type="button">Cancel</button>
                    </Link>
                </div>
            </form>
        </section>
    );
};

export default CreateArticle;
