import React from 'react';

import PostListItem from '../post-list-item/post-list-item';
import { ListGroup } from 'reactstrap';
import './post-list.css';


const PostList = ({ posts,onDelete }) => {
    const dataFilter = posts.filter(item => item.label);
    const elements = dataFilter.map((item) => {

        const { id, ...ItemProps } = item;
        return (
            <li key={id} className="list-group-item">
                {/* легкий синтаксис */}
                {/* <PostListItem
                    label={item.label}
                    important={item.important} /> */}
                {/* сложный (разворачивает массив и т.к данные ключ значения совпадает все будет работать) спред оператор развернет объект */}
                <PostListItem
                    {...ItemProps}
                    onDelete={() => onDelete(id)} />
            </li>
        )
    });



    return (
        <ListGroup className="app-list">
            {elements}
        </ListGroup>
    )
}

export default PostList;