// Code SimpleComponent Here
import {Component} from 'react';

export default class SimpleComponent extends Component {
    constructor() {
        super()
        state = {
            mood: happy
        }
    }

    handleClick() {
        this.setState = {
            mood: sad
        }
    }

    render() {
        return(
            <div onClick={handleClick}></div>
        )
    }
}