import React from "react";
import Article from "./Article";


function ArticleList({ posts }) {


    return (
        <main>
            { posts.map(({ id,title, date, preview, minutes }) => (
                <Article key={id} title={title} minutes={minutes} date={date} preview={preview} />
            ))}

        </main>);
}

export default ArticleList;