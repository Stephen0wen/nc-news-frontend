import { useParams, Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Contexts/UserContext";
import "./CreateTopic.css";

const CreateTopic = () => {
    const [slug, setSlug] = useState("");
    const [description, setDescription] = useState("");
    const [warnings, setWarnings] = useState({
        slug: "",
        description: "",
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

    const handleCancel = () => {
        setWarnings({
            slug: "",
            description: "",
        });
        setSlug("");
        setDescription("");
    };

    const handleCreate = () => {
        const requestBody = {
            slug,
            description,
        };
        console.log(requestBody);
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
                    <button type="button" onClick={handleCancel}>
                        Cancel
                    </button>
                </div>
            </form>
        </section>
    );
};

export default CreateTopic;
