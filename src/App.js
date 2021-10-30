import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import AddTourPackage from './Pages/Dashboard/AddTourPackage/AddTourPackage';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import ManageOrder from './Pages/Dashboard/ManageOrder/ManageOrder';
import MyOrders from './Pages/Dashboard/MyOrders/MyOrders';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import OrderDetails from './Pages/OrderDetails/OrderDetails';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/dashboard'>
              <Dashboard></Dashboard>
            </Route>
            <PrivateRoute path="/addPackage">
              <AddTourPackage></AddTourPackage>
            </PrivateRoute>
            <PrivateRoute path="/myOrder">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/manageOrder">
              <ManageOrder></ManageOrder>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <PrivateRoute path='/orderDetails/:pakcageId'>
              <OrderDetails></OrderDetails>
            </PrivateRoute>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
