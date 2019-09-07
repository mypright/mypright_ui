import React from "react";

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
    return <div className="obc_grid">
        <label htmlFor={name}
               className={classes.label}>
               {label}
        </label>
        {
            required &&
            <span className={classes.mandatory}>*</span>
        }
        <input
            data-testid={name}
            id={name}
            placeholder={hint}
            required={required}
            className={classes.inputType}
            onChange={(event) => updateVal(event.target.value)}
            defaultValue={defaultValue}
        />
    </div>
}