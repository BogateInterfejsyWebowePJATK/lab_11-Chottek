import React from "react"

export default function Generator(){

    return Array.apply(null, { length: 10 }).map((e, i) => (
        <li>{generate(0, 100)}</li>
    ));

}


function generate(min, max){
    min = Math.ceil(min);
    return Math.floor(Math.random() * (Math.floor(max) - min + 1)) + min;
}
