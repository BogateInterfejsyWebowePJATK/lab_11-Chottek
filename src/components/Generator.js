import React from "react"

export default function Generator(){

    const [num, setRandomly] = React.useState([])

    React.useEffect(() => { nums() }, []);

    let nums = () => {
        setRandomly(Array.apply(0, Array(10)).map(() => generate(0, 100)));
    }

    return(
        <>
            <button onClick={nums}>Generate Random List</button><br/><br/>
            { Array.apply(null, { length: 10 }).map((e, i) => (
                <li>{generate(0, 100)}</li>
            ))}
        </>
    )
}

function generate(min, max){
    min = Math.ceil(min);
    return Math.floor(Math.random() * (Math.floor(max) - min + 1)) + min;


}
