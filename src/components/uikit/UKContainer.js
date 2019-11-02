import React from 'react';

class UKContainer extends React.Component {
    render() {
        return (
            <div class="uk-container">
                {this.props.children}
            </div>
        );
    }
}

export default UKContainer;