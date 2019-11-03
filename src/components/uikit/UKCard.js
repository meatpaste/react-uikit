import React from 'react';

class UKCard extends React.Component {
    render() {
        return (
            <div className="uk-card uk-card-body uk-card-default">
                {this.props.children}
            </div>
        )
    }
}

export default UKCard;