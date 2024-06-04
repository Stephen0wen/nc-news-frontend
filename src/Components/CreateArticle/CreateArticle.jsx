import { useParams, Link } from "react-router-dom";
import "./CreateArticle.css";

const CreateArticle = () => {
    const { slug } = useParams();

    const handleSubmit = () => {};

    return (
        <section id="new-article" className="flex-center">
            <h2>{slug} - Create a New Article</h2>
            <form>
                <label>
                    <p>Article Title</p>
                    <input id="new-article-title" />
                </label>
                <label>
                    <p>Article Body</p>
                    <textarea id="new-article-body" />
                </label>
                <label id="-new-article-image-label">
                    <p>Select Image File</p>
                    <input id="new-article-image" type="file" />
                </label>
                <div id="button-container">
                    <button type="submit">Post</button>
                    <Link to={`/${slug}`}>
                        <button type="submit">Cancel</button>
                    </Link>
                </div>
            </form>
        </section>
    );
};

export default CreateArticle;
