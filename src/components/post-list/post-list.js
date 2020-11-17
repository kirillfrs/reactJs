import React from 'react';

import PostListItem from '../post-list-item/post-list-item';

import './post-list.css';

const PostList = ({ posts }) => {

    const elements = posts.map((item) => {
        const { id, ...ItemProps } = item;
        return (
            <li key={id} className="list-group-item">
                {/* легкий синтаксис */}
                {/* <PostListItem
                    label={item.label}
                    important={item.important} /> */}
                {/* сложный (разворачивает массив и т.к данные ключ значения совпадает все будет работать) спред оператор развернет объект */}
                <PostListItem {...ItemProps} />
            </li>
        )
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default PostList;