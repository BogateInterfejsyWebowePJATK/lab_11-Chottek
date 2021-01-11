import React from "react";

export default function Table({numbers, toBin = f => f, toOct = f => f, toHex = f => f }) {

    return (
        <table>
            <tr>
                <td>Number</td>
                <td>Binary</td>
                <td>Octal</td>
                <td>Hexadecimal</td>
            </tr>

            { numbers.map((i, x) => {
                return (
                    <tr key={x}>
                        <td>{i}</td>
                        <td>{toBin(x)}</td>
                        <td>{toOct(x)}</td>
                        <td>{toHex(x)}</td>
                    </tr>
                )
            })}
        </table>
    );
}
