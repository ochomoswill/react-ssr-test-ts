import { addAndMultiply } from '../add'
import { multiplyAndAdd } from '../multiply'
import React from "react";
import {Button} from "@mantine/core";

export default function Home() {
    return (
        <>
            <h1>Home</h1>

            <Button>Click me!</Button>
            <div>{addAndMultiply(1, 2, 3)}</div>
            <div>{multiplyAndAdd(1, 2, 3)}</div>
        </>
    )
}