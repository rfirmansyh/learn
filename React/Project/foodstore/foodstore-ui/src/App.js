import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import 'upkit/dist/style.min.css';

import store from './app/store';
import { listen } from './app/listener';
import { getCart } from './api/cart';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import RegisterSuccess from './pages/RegisterSuccess';
import UserAddress from './pages/UserAddress';
import UserAddressAdd from './pages/UserAddressAdd';
import Checkout from './pages/Checkout';
import Invoice from './pages/Invoice';
import UserAccount from './pages/UserAccount';
import UserOrders from './pages/UserOrders';
import Logout from './pages/Logout';
import GuardRoute from './components/GuardRoute';
import GuardOnlyRoute from './components/GuardOnlyRoute';


function App() {

    React.useEffect(() => {
        listen();
        getCart();
    }, [])

    return (
        <Provider store={store} >
            <Router>
                <Switch>

                    <Route exact path="/">
                        <Home/>
                    </Route>

                    {/* Unauthenticated */}
                    <GuardOnlyRoute exact path="/login" >
                        <Login/>
                    </GuardOnlyRoute>
                    <GuardOnlyRoute exact path="/register" component={Register} />
                    <GuardOnlyRoute exact path="/register/berhasil">
                        <RegisterSuccess/>
                    </GuardOnlyRoute>

                    {/* Authenticated */}
                    <GuardRoute exact path="/account">
                        <UserAccount/>
                    </GuardRoute>
                    <GuardRoute exact path="/pesanan">
                        <UserOrders/>
                    </GuardRoute>
                    <GuardRoute exact path="/alamat-pengiriman/" >
                        <UserAddress/>
                    </GuardRoute>
                    <GuardRoute exact path="/alamat-pengiriman/tambah" >
                        <UserAddressAdd/>
                    </GuardRoute>
                    <GuardRoute exact path="/checkout" >
                        <Checkout/>
                    </GuardRoute>
                    <GuardRoute exact path="/invoice/:order_id" >
                        <Invoice/>
                    </GuardRoute>
                    <GuardRoute exact path="/logout">
                        <Logout/>
                    </GuardRoute>

                </Switch>
            </Router>
        </Provider>
    );
}

export default App;

// current learn
// Publikasi = 578
