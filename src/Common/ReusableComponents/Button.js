import React, { Component } from 'react';
import Demo from '../../Demo/MockFile'

class Submit extends Component {
    render() {
        console.log(this.props)
        return (
            <button
                onClick={this.props.onClick}>
                {this.props.value}
            </button>

        );
    }
}
Submit.defaultProps = {Content:Demo}
export default Submit
