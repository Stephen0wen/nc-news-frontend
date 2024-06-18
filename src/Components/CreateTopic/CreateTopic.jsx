import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";
import "./CreateTopic.css";
import { postTopic } from "../../APIs";

const CreateTopic = () => {
    const navigate = useNavigate();
    const { isLoggedIn, setShowLoginPopup, authToken } =
        useContext(UserContext);

    const [slug, setSlug] = useState("");
    const [description, setDescription] = useState("");
    const [warnings, setWarnings] = useState({
        slug: "",
        description: "",
    });

    useEffect(() => {
        if (!isLoggedIn) {
            setShowLoginPopup(true);
            navigate("/");
        }
    });

    const updateTopicName = ({ target: { value } }) => {
        setWarnings({
            ...warnings,
            slug: value ? "" : "Please name your topic",
        });
        setSlug(value);
    };

    const updateDescription = ({ target: { value } }) => {
        setWarnings({
            ...warnings,
            description: value
                ? ""
                : "Please write a description for your topic.",
        });
        setDescription(value);
    };

    const handleCreate = () => {
        const requestBody = {
            slug,
            description,
        };
        postTopic(requestBody, authToken).then(({ slug }) => {
            navigate(`/topics/${slug}`);
        });
    };

    return (
        <section id="new-topic" className="flex-center">
            <h2>Create a topic</h2>
            <form>
                <label>
                    <h3>Topic Name</h3>
                    <input
                        id="new-topic-slug"
                        onChange={updateTopicName}
                        onBlur={updateTopicName}
                    />
                    <p>{warnings.slug}</p>
                </label>
                <label>
                    <h3>Description</h3>
                    <textarea
                        id="new-topic-description"
                        onChange={updateDescription}
                        onBlur={updateDescription}
                    />
                    <p>{warnings.description}</p>
                </label>
                <div id="button-container">
                    <button type="button" onClick={handleCreate}>
                        Create
                    </button>
                    <Link to="/">
                        <button type="button">Cancel</button>
                    </Link>
                </div>
            </form>
        </section>
    );
};

export default CreateTopic;
