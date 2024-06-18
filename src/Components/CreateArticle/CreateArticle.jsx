import { useParams, Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Contexts/UserContext";
import { postArticle } from "../../APIs";
import "./CreateArticle.css";

const CreateArticle = () => {
    const { slug } = useParams();
    const { isLoggedIn, authToken } = useContext(UserContext);
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [warnings, setWarnings] = useState({
        title: "",
        body: "",
        imgUrl: "",
    });

    useEffect(() => {
        if (!isLoggedIn) {
            navigate(`/topics/${slug}`);
        }
    });

    const updateTitle = ({ target: { value } }) => {
        setWarnings({
            ...warnings,
            title: value ? "" : "Please create a title.",
        });
        setTitle(value);
    };

    const updateBody = ({ target: { value } }) => {
        setWarnings({
            ...warnings,
            body: value ? "" : "Please write an article body.",
        });
        setBody(value);
    };

    const updateImgUrl = ({ target: { files } }) => {
        setWarnings({
            ...warnings,
            imgUrl: files ? "" : "Please select an image.",
        });
        if (files[0]) {
            const imgUrl = URL.createObjectURL(files[0]);
            setImgUrl(imgUrl);
        }
    };

    const handlePost = () => {
        const requestBody = {
            title,
            body,
            topic: slug,
            article_img_url: imgUrl,
        };
        postArticle(requestBody, authToken)
            .then(({ article_id }) => {
                navigate(`/topics/${slug}/${article_id}`);
            })
            .catch((error) => {
                console.log(error);
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
                        accept="image/png, image/jpeg"
                    />
                    <p>{warnings.imgUrl}</p>
                </label>
                <div id="button-container">
                    <button type="button" onClick={handlePost}>
                        Post
                    </button>
                    <Link to={`/topics/${slug}`}>
                        <button type="button">Cancel</button>
                    </Link>
                </div>
            </form>
        </section>
    );
};

export default CreateArticle;
