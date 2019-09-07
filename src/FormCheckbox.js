import React from "react";
import {Form, Checkbox} from 'antd'
const classes = {
    label: "",
    inputType: "",
    mandatory: "mandatory-mark"
}

export default function FormCheckbox(props) {
    let { name,
        label,
        updateVal,
        defaultValue,
    } = props;
    return <div className="obc_grid" style={{margin: 25}}>
        <Checkbox
                data-testid={name}
                id={name}
                htmlFor={name}
                className={classes.inputType}
                onChange={(event) => updateVal(event.target.checked)}
                defaultValue={defaultValue || false}
            /> {label}
    </div>
}