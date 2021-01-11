import React from "react";
import Num from "./numbers/Num";

export default function List({numbers, remove = f => f, toBin = f => f, toOct = f => f, toHex = f => f, reload}) {

    return (
        <ul>
            {numbers.map((i, x) => {
                return <Num i={i} x={x} remove={remove} toBin={toBin} toOct={toOct} toHex={toHex} reload={reload}/>
            })}
        </ul>
    );
}
