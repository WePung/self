import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RouteTest = () => {
    const [change, setChange] = useState("");
    const onChangeLink= (e) =>{
      setChange(e.target.value);
    }
    return (
        <div>
            <Link to = {"/"}>HOME</Link>
            <br />
            <Link to = {"/diary"}>DIARY</Link>
            <br />
            <Link to = {"/new"}>NEW</Link>
            <br />
            <Link to = {"/edit"}>EDIT</Link>
            <br />
        <select onChange={onChangeLink}>
            <option value="/">home</option>
            <option value="new">new</option>
            <option value="edit">edit</option>
            <option value="diary">diary</option>
        </select>
      <Link to = {change}>
      <button>이동</button>
      </Link>
        </div>
    );
};

export default RouteTest;