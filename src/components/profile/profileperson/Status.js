import React from 'react';

class Status extends React.Component {
    constructor(props) {
        super(props);
        this.state = { editMode: false };
    }

    handleChange = (e) => {
        this.setState({ value: e.target.value });
    };
    toggleMode = () => {
        this.setState({ editMode: !this.state.editMode });
        this.props.updateStatus(this.state.value);
    };

    render() {
        return (
            <div>
                {!this.state.editMode && (
                    <div>
                        <h5 onClick={this.toggleMode}>{this.props.status}</h5>
                    </div>
                )}
                {this.state.editMode && (
                    <div>
                        <input
                            type="text"
                            autoFocus={true}
                            value={this.state.value}
                            onChange={this.handleChange}
                            onBlur={this.toggleMode}
                        />
                    </div>
                )}
            </div>
        );
    }
}

export default Status;