import React from "react";
import List from "../List"
import Table from "../Table"

export default function Nums() {

    const [numArr, setNumArr] = React.useState([])
    const [reload, setReload] = React.useState(false)
    const [table, setTable] = React.useState(false)

    React.useEffect(() => {
        randomNumbers()
    }, [])

    function randomNumbers() {
        const arr = Array.from({length: 10}, () => Math.floor(Math.random() * Math.floor(100) + 1)) + 0;
        setNumArr(arr);
        setReload(!reload);
    }

    function toBin(x) {
        return parseInt(numArr[x]).toString(2)
    }

    function toOct(x) {
        return parseInt(numArr[x]).toString(8)
    }

    function toHex(x) {
        return parseInt(numArr[x]).toString(16)
    }

    function getNumArr() {
        return numArr;
    }

    function remove(x) {
        let n = [...numArr];
        n.splice(x, 1)
        setNumArr(n)
    }

    return (
        <>
            <button onClick={randomNumbers}>Losuj</button>
            <button onClick={() => setTable(!table)}>{!table ? "List" : "Table" }</button>
            {table ?
                <Table numbers={getNumArr()} del={remove} toBin={toBin} toOct={toOct} toHex={toHex}/> :
                <List numbers={getNumArr()} del={remove} toBin={toBin} toOct={toOct} toHex={toHex} reload={reload}/>
            }
        </>
    );
}
