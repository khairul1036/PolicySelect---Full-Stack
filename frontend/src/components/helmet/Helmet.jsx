import React from 'react';

const Helmet = ({ title, description }) => {
    return (
        <div>
            <title>{title}</title>
            <meta name="description" content={description} />
        </div>
    );
};

export default Helmet;