import React from 'react';

const Frame = ({children}) => {
    return (
        <div className='frame noborder inline'>
            {children}
        </div>
    );
};

export default Frame;