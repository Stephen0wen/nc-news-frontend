import "./SortArticles.css";

const SortArticles = () => {
    return (
        <form id="sort-form">
            <div>
                <h2>Sort By:</h2>
                <fieldset id="sort-by">
                    <label for="sort-title">
                        Title{" "}
                        <input
                            id="sort-title"
                            type="radio"
                            name="sort-by"
                        ></input>
                    </label>
                    <label for="sort-author">
                        Author{" "}
                        <input
                            id="sort-author"
                            type="radio"
                            name="sort-by"
                        ></input>
                    </label>
                    <label for="sort-recent">
                        Recent{" "}
                        <input
                            id="sort-recent"
                            type="radio"
                            name="sort-by"
                        ></input>
                    </label>
                </fieldset>
            </div>
            <div>
                <h2>Order:</h2>
                <fieldset id="order">
                    <label for="order-asc">
                        Ascending{" "}
                        <input id="order-asc" type="radio" name="order"></input>
                    </label>
                    <label for="order-desc">
                        Descending{" "}
                        <input
                            id="order-desc"
                            type="radio"
                            name="order"
                        ></input>
                    </label>
                </fieldset>
            </div>
        </form>
    );
};

export default SortArticles;
