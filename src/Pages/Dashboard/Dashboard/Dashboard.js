import React from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import AddTourPackage from '../AddTourPackage/AddTourPackage';
import ManageOrder from '../ManageOrder/ManageOrder';
import MyOrders from "../MyOrders/MyOrders";
import './Dashboard.css';


const Dashboard = () => {
    return (
        <div className="py-3 container-fluid p-0">
            <BrowserRouter>
                <ul className="nav justify-content-center bg-dark  ">
                    <li className="nav-item ">
                        <Link className="nav-link active text-warning" to="/addPackage">Add New Package</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active text-warning" to="/myOrder">My Orders</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active text-warning" to="/manageOrder">Manages Order</Link>
                    </li>
                </ul>

                <Switch>

                    <Route path="/addPackage">
                        <AddTourPackage></AddTourPackage>
                    </Route>
                    <Route path="/manageOrder">
                        <ManageOrder></ManageOrder>
                    </Route>
                    <Route path="/myOrder">
                        <MyOrders></MyOrders>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default Dashboard;