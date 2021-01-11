import React from "react"

function Generator(){

    const [num, setRandomly] = React.useState([])

    React.useEffect(() => { nums() }, []);

    let nums = () => {
        setRandomly(Array.apply(0, Array(10)).map(() => randomizeThis(0, 100)));
    }

    return(
        <>
            <button onClick={nums}>Generate Random List</button><br/><br/>
            { Array.apply(null, { length: 10 }).map((e, i) => (
                <li>{randomizeThis(0, 100)}</li>
            ))}
        </>
    )
}
