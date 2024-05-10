import "./SortArticles.css";
import { useSearchParams } from "react-router-dom";

const SortArticles = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const handleClick = (event) => {
        const newParams = new URLSearchParams(searchParams);
        const order = event.target.form.elements.order.value;
        const sortBy = event.target.form.elements["sort-by"].value;
        newParams.set("sort_by", sortBy);
        newParams.set("order", order);
        setSearchParams(newParams);
    };

    return (
        <>
            <form id="sort-form">
                <div>
                    <div>
                        <h2>Sort By:</h2>
                        <fieldset id="sort-by">
                            <label htmlFor="sort-recent">
                                Recent{" "}
                                <input
                                    id="sort-recent"
                                    type="radio"
                                    name="sort-by"
                                    value="recent"
                                    defaultChecked
                                ></input>
                            </label>
                            <label htmlFor="sort-title">
                                Title{" "}
                                <input
                                    id="sort-title"
                                    type="radio"
                                    name="sort-by"
                                    value="title"
                                ></input>
                            </label>
                            <label htmlFor="sort-author">
                                Author{" "}
                                <input
                                    id="sort-author"
                                    type="radio"
                                    name="sort-by"
                                    value="author"
                                ></input>
                            </label>
                        </fieldset>
                    </div>
                    <div>
                        <h2>Order:</h2>
                        <fieldset id="order">
                            <label htmlFor="order-asc">
                                Ascending{" "}
                                <input
                                    id="order-asc"
                                    type="radio"
                                    name="order"
                                    value="asc"
                                    defaultChecked
                                ></input>
                            </label>
                            <label htmlFor="order-desc">
                                Descending{" "}
                                <input
                                    id="order-desc"
                                    type="radio"
                                    name="order"
                                    value="desc"
                                ></input>
                            </label>
                        </fieldset>
                    </div>
                </div>
                <button type="button" onClick={handleClick}>
                    Update
                </button>
            </form>
        </>
    );
};

export default SortArticles;
