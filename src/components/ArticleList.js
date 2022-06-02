import React from 'react';

function ArticleList({posts}){
    const card = posts.map((post) => {
        return <article key={post.id}> {post.title} {post.date} {post.preview} {post.minutes} </article>;
    })
    return(
        <main>
 .       {card}
        </main>
    ) 
}

export default ArticleList;