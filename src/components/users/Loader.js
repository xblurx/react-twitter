import React from 'react';
import loader from '../../assets/loader.svg';

const Loader = (props) => {
    return (
        <div>
            {props.isFetching ? <img src={loader} alt="loading..."/> : null}
        </div>
    );
};

export default Loader;
