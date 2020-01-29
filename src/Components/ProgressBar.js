import React from 'react';

class ProgressBar extends React.Component {
    constructor() {
        super()
        this.state = {
            barLength: ""
        }
    }

    render() {
        return (
            <div className="ProgressBar">
                <div className="bar-background">
                    <div className="bar-shadow-indicator"></div>
                    <div className="bar-indicator"></div>
                </div>
            </div>
        )
    }
}

export default ProgressBar