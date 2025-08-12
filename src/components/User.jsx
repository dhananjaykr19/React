import React, { useEffect, useState } from 'react'

const User = (props) => {
    // const {name} = props
    const [count, setCount] = useState(0);
    const [count1] = useState(1);

    useEffect(() => {
        //api call
    }, [])
    return (
        <div className='user-card'>
            <h2>Name : {props.name}</h2>
            <h3>Location : Kolkata</h3>
            <h4>Contact : @Dhananjay19</h4>
            <h3>Count = {count}</h3>
            <button
                onClick={() => (
                    setCount(count + 1)
                )}
            >
                Increase Count
            </button>
        </div>
    );
};

export default User;