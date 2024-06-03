import { useParams } from "react-router-dom";
import "./CreateArticle.css";

const CreateArticle = () => {
    const { slug } = useParams();

    return (
        <section id="new-article" className="flex-center">
            <h2>{slug} - Create a New Article</h2>
            <form>
                <label>
                    Article Title
                    <input id="new-article-title"></input>
                </label>
                <label>
                    Article Body
                    <textarea id="new-article-body"></textarea>
                </label>
                <label id="-new-article-image-label">
                    Select Image File
                    <input id="new-article-image" type="file"></input>
                </label>
                <button type="submit">Post</button>
            </form>
        </section>
    );
};

export default CreateArticle;
