import { useEffect, useState } from "react";
import "./Topic.css";
import { useParams } from "react-router-dom";
import Articles from "../Articles/Articles";

const Topic = () => {
    const { slug } = useParams();

    const queries = { params: { topic: slug } };

    return (
        <main id="topic">
            <h1 className="topic-title">{slug}</h1>
            <Articles slug={slug} />
        </main>
    );
};

export default Topic;
