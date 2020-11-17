import React from 'react';

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-form';

import './app.css';

import styled from 'styled-components';

const AppBlock = styled.div`
  margin: 0 auto;
  max-width: 800px; 
`;
const StyledAppBlock = styled(AppBlock)`
background-color:grey;

`;

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

    return (
        <AppBlock>
            <AppHeader />
            <div className="search-panel d-flex">
                <SearchPanel />
                <PostStatusFilter />
            </div>
            <PostList posts={data} />
            <PostAddForm />
        </AppBlock>
    )
}

export default App;