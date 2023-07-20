import React from "react";
import {H1} from './styles'

function Title(props) {
    console.log(props.children)
    return <H1>{props.children}</H1>
}

export default Title;