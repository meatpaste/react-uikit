import React from 'react';

class UKContainer extends React.Component {
    render() {
        return (
            <div className="uk-container">
                {this.props.children}
            </div>
        );
    }
}

export default UKContainer;