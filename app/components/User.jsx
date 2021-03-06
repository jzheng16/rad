import React from 'react';
import Items from './Items';
import Orders from './Orders';
import { Link } from 'react-router';

export default (props) => {

  // Expect props to have user,

  return (
    <div className="list-group-item col-md-6 col-md-offset-3">
      <h1>Name: {props.user.name}</h1>
      <p>Email: {props.user.email}</p>
      <p>Rating: {props.user.rating}/5</p>
      <Link to={`/user/${props.user.id}/items`} >Items</Link>
      { /*props.user.id === props.params.id ? <Link to={Orders} >Orders</Link> : null*/ }
    </div>
  );
};
