import React, { Component } from 'react';

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-form';
import nextId from "react-id-generator";

import './app.css';

import styled from 'styled-components';

const AppBlock = styled.div`
  margin: 0 auto;
  max-width: 800px; 
`;
// const StyledAppBlock = styled(AppBlock)`
// background-color:grey;

// `;

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [

                {
                    label: 'Going to learn React',
                    important: true,
                    id: 'id-1'
                }, {
                    label: 'That is so good',
                    important: false,
                    id: 'id-2'
                }, {
                    label: 'I need a break...',
                    important: false,
                    id: 'id-3'
                }
            ]
        }
        // this.maxiD = 4;
    }
    

    deleteItem = (id) => {
        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id === id);
            const before = data.slice(0, index);
            const after = data.slice(index + 1);
            const newArr = [...before, ...after];


            return {
                data: newArr
            }

        })
    }
    addItem = (body) => {
        const setid = nextId(); // 
        const newItem = {
            label: body,
            improtant: false,
            id: setid
        }
        this.setState(({ data }) => {
            const newArray = [...data, newItem];
            return {
                data: newArray
            }
        })
    }

    render() {

        return (

            <AppBlock>
                <AppHeader />
                <div className="search-panel d-flex">
                    <SearchPanel />
                    <PostStatusFilter />
                </div>
                <PostList
                    posts={this.state.data}
                    onDelete={this.deleteItem}
                />
                <PostAddForm
                    onAdd={this.addItem}

                />
            </AppBlock >
        )
    }

}

