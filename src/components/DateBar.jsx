import React from 'react';

const DateBar = () => {
    
    const currentDate = new Date().toLocaleDateString();
    
    return (
        <div className="date-bar">
            <p>Today's Date: {currentDate}</p>
        </div>
    );
};

export default DateBar;