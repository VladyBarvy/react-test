import React from "react";

const Greetings = ({ firstName, lastName, resistanceOne }) => (
    <div>
        Hey you! {firstName} {lastName}!
        <div>{resistanceOne}</div>
    </div>
);

export default Greetings;
