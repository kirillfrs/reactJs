import React, { Component } from 'react';

import './post-list-item.css';

export default class PostListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            important: false,
            like: false
        }
        // this.onImportant = this.onImportant.bind(this);
    }
    // onImportant() {
    //     this.setState(({ important }) => ({
    //         important: !important
    //     }))
    // }
    onImportant = () => {
        this.setState(({ important }) => ({
            important: !important
        }))
    }
    onLike = () => {
        this.setState(({ like }) => ({
            like: !like
        }))
    }



    render() {
        const { label,onDelete } = this.props;
        const { important, like } = this.state;
        let className = 'app-list-item d-flex justify-content-between';
        if (important) {
            className += ' important';
        }

        if (like) {
            className += ' like';
        }
        return (
            <div className={className}>
                <span
                    onClick={this.onLike}
                    className="app-list-item-label">
                    {label}
                </span>
                <div className="d-flex justify-content-center allign-items-center">
                    <button
                        onClick={this.onImportant}
                        type="button"
                        className="btn-star btn-sm">
                        <i className="fa fa-star"></i>
                    </button>
                    <button
                        type="button"
                        className="btn-trash btn-sm"
                        onClick={onDelete}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </div>
        )
    }
};
