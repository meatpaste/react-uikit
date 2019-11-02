import React from 'react';
import 'uikit/dist/css/uikit.min.css';
import 'uikit/dist/js/uikit.min.js';

class UKAlert extends React.Component {
    render() {
        return (
            <div data-uk-alert>
                <a className="uk-alert-close" data-uk-close></a>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
        );
    }
}

export default UKAlert;