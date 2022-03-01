import React from 'react';

const InfoList = ({dataInfo}) => {
    return (
        <div>
            <input type = "checkbox" />
            <p>{dataInfo.text}</p>
            <button>X</button>
            
        </div>
    );
};

export default InfoList;