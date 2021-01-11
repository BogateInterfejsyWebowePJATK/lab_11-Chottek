import React from "react"

export default function Num({x, i, remove = f => f, toBin = f => f, toOct = f => f, toHex = f => f, reload}) {

    const [converted, convert] = React.useState("")

    React.useEffect(() => { convert("") }, [reload]);

    return (
        <li key={x}>{i}
            <button onClick={() => remove(x)}>Delete</button>
            <button onClick={() => convert(toBin(x))}>Bin</button>
            <button onClick={() => convert(toOct(x))}>Oct</button>
            <button onClick={() => convert(toHex(x))}>Hex</button>
            <b>{converted}</b>
        </li>
    )
}
