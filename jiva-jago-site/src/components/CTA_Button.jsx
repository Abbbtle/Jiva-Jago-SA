import React from 'react'
import '../index.css'

const CTA_Button = ({ children }) => {
    return (
        <button className="button-hollow-to-filled">
            {children}
        </button>
    );
};

export default CTA_Button;