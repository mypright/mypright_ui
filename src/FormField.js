import React from "react";
import { Input, Form } from 'antd'

const classes = {
    label: "",
    inputType: "",
    mandatory: "mandatory-mark"
}

export default function FormField(props) {
    let { name,
        label,
        required,
        updateVal,
        defaultValue,
        hint
    } = props;
    return <div className="obc_grid" style={{margin: 25}}>
         <Form.Item label={`${label} ${required ? '*': ''}`} >
            <Input
                data-testid={name}
                id={name}
                placeholder={hint}
                required={required}
                htmlFor={name}
                className={classes.inputType}
                onChange={(event) => updateVal(event.target.value)}
                defaultValue={defaultValue}
            />
        </Form.Item>
    </div>
}