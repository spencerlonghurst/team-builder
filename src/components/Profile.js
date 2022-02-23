import React from 'react';

export default function Profile(props) {
  return (
    <div>
      <h2>{props.info.firstname} {props.info.lastname}</h2>
      <p>Email: {props.info.email}</p>
      <p>Favorite Food: {props.info.favfood}</p>
      <p>Gender: {props.info.gender}</p>
      <p>Favorite Color: {props.info.color}</p>
    </div>
  )
}