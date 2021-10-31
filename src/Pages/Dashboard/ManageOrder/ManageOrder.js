import React from 'react';
import useOrder from '../../../Hooks/useOrder';
import Order from '../Order/Order';

const ManageOrder = () => {
    const [order] = useOrder();
    return (
        <div className="bg-light container-fluid">
            <h1>Order Manage</h1>
            <hr className="w-25 m-auto" />
            <div className="row row-cols-1 row-cols-md-3 g-4 container m-auto">
                {
                    order.map(item => <Order

                        key={item._id}
                        item={item}


                    >
                        <div className="d-flex justify-content-between">
                            <input type="button" className="btn btn-success pe-3" value="Approved" />
                            <input type="button" className="btn btn-warning" value="Cancel" />
                        </div>
                    </Order>)
                }
            </div>

        </div>
    );
};

export default ManageOrder;