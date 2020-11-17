import React from 'react';

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-form';

import './app.css';

const App = () => {

    const data = [
        'ffa',
        2,
        {
            label: '',
            important: true,
            id: 'afaar'
        },
        {
            label: 'Going to learn React',
            important: true,
            id: 'afar'
        }, {
            label: 'That is so good',
            important: false,
            id: 'qwer'
        }, {
            label: 'I need a break...',
            important: false,
            id: 'sex'
        }
    ]

    const filteredData = data.filter((data) => {
        return data.label;
    })


    return (
        <div className="app">
            <AppHeader />
            <div className="search-panel d-flex">
                <SearchPanel />
                <PostStatusFilter />
            </div>
            <PostList posts={filteredData} />
            <PostAddForm />
        </div>
    )
}

export default App;