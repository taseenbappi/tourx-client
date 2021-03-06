import React from 'react';
import { Spinner } from 'react-bootstrap';
import useOrder from '../../../Hooks/useOrder';
import Order from '../Order/Order';

const MyOrders = () => {
    const [order, isLoading] = useOrder();
    if (isLoading) {

        return <Spinner animation="border" variant="dark" />;
    }

    return (
        <div className="bg-light container-fluid">
            <h1>My order</h1>
            <hr className="w-25 m-auto" />
            <div className="row row-cols-1 row-cols-md-3 g-4 container m-auto">
                {
                    order.map(item => <Order
                        key={item._id}
                        item={item}

                    >
                        <input type="button" className="btn btn-danger" value="Cancel" />
                    </Order>)
                }
            </div>

        </div>
    );
};

export default MyOrders;