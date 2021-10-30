import React from 'react';
import usePackage from '../../../Hooks/usePackage';
import Package from '../Package/Package';
import './TourPakage.css';

const TourPackage = () => {
    const [packages] = usePackage();
    return (
        <div className="container-fluid packages-container py-3  bg-light">
            <div className="py-5">
                <p className="fw-bolder text-danger">FEATURED TOURS</p>
                <h3 className="package-header">Select Your Best Package For Your Travel</h3>
                <hr className="w-50 m-auto" />
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 container m-auto" id="tourPackage">
                {
                    packages.map(packageItem => <Package
                        key={packageItem._id}
                        packageItem={packageItem}
                    >

                    </Package>)
                }
            </div>
        </div>
    );
};

export default TourPackage;