import React from 'react';

class UKButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            class: 'uk-button-primary'
        };
        
        this.change = this.change.bind(this);
    }

    change() {
        this.setState({
            class: 'uk-button-danger'
        });
    }

    render() {
        return (
            <button className={'uk-button ' + this.state.class} onClick={this.change}>
                {this.props.children}
            </button>
        )
    }
}

export default UKButton;