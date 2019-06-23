import React from "react";

class Table extends React.Component {
    render() {
        return(
            <div className="bg-light border-right" id="sidebar-wrapper">
                <div className="sidebar-heading">API CALL</div>
                <div className="list-group list-group-flush">
                    <span className="list-group-item list-group-item-action bg-light" onClick={this.props.onClick}>Bike Point (all Location)</span>
                    <span className="list-group-item list-group-item-action bg-light">Bike Point (with given ID)</span>
                    <span className="list-group-item list-group-item-action bg-light">Bike Stations (by name)</span>
                </div>
            </div>
            // <div>
            //     <table className="table table-bordered">
            //         <thead className="thead-dark">
            //             <tr>
            //                 <th scope="col">#</th>
            //                 <th scope="col">API Ref</th>
            //                 <th scope="col"></th>
            //             </tr>
            //         </thead>
            //         <tbody>
            //             <tr>
            //                 <th scope="row">1</th>
            //                 <td>Bike Point</td>
            //                 <td><button type="button" className="btn btn-primary" onClick={this.props.onClick}>Show on Map</button></td>
            //             </tr>
            //         </tbody>
            //     </table>
            // </div>
        )
    }
}

export default Table;