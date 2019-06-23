import React from "react";

class Table extends React.Component {
    render() {
        return(
            <div className="bg-light border-right" id="sidebar-wrapper">
                <div className="sidebar-heading">API CALL</div>
                <div className="list-group list-group-flush">
                    <span className="list-group-item list-group-item-action bg-light" onClick={this.props.onClick}>Bike Point (all Location)</span>
                </div>
            </div>
        )
    }
}

export default Table;