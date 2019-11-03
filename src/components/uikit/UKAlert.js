import React from 'react';
import 'uikit/dist/css/uikit.min.css';
import 'uikit/dist/js/uikit.min.js';

class UKAlert extends React.Component {
    render() {
        return (
            <div data-uk-alert={
                'animation:' + this.props.animation + ',' +
                'duration:' + this.props.duration + ',' +
                'sel-close:' + this.props.selClose + ','
            }>
                <a className="uk-alert-close" data-uk-close></a>
                {this.props.children}
            </div>
        );
    }
}

UKAlert.defaultProps = {
    animation: 'true',
    duration: '150',
    selClose: 'uk-alert-close',
}

export default UKAlert;