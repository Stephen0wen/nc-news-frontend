import "./ArticleFooter.css";
import { UserContext } from "../../Contexts/UserContext";
import { Link } from "react-router-dom";
import Expand from "../Expand/Expand";
import Comments from "../Comments/Comments";
import Vote from "../Vote/Vote";
import { useState, useEffect, useContext } from "react";
import Delete from "../Delete/Delete";

const ArticleFooter = ({ slug, comment_count, votes, setVotes, author }) => {
    const { user } = useContext(UserContext);

    const [isOwnArticle, setIsOwnArticle] = useState(false);

    useEffect(() => {
        if (user.username === author) {
            setIsOwnArticle(true);
        } else {
            setIsOwnArticle(false);
        }
    }, [user, author]);

    if (!isOwnArticle) {
        return (
            <div id="article-footer">
                <Link to={`/${slug}`}>
                    <button>{slug}</button>
                </Link>
                <div>
                    <Expand
                        expandId="comments-container"
                        label={
                            <>
                                <span>Comments</span>
                                <span className="count"> {comment_count}</span>
                            </>
                        }
                    >
                        <Comments />
                    </Expand>
                </div>
                <Vote votes={votes} setVotes={setVotes} />
            </div>
        );
    }

    if (isOwnArticle) {
        return (
            <div id="article-footer">
                <Link to={`/${slug}`}>
                    <button>{slug}</button>
                </Link>
                <div>
                    <Expand
                        expandId="comments-container"
                        label={
                            <>
                                <span>Comments</span>
                                <span className="count"> {comment_count}</span>
                            </>
                        }
                    >
                        <Comments />
                    </Expand>
                </div>
                <Delete />
            </div>
        );
    }
};

export default ArticleFooter;
