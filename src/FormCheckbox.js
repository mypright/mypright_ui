import React from "react";

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
    return <div className="obc_grid">
        <label htmlFor={name}
               className={classes.label}>
               {label}
        </label>
        <input
          type="checkbox"
          data-testid={name}
          id={name}
          className={classes.inputType}
          onChange={(event) => updateVal(event.target.checked)}
          defaultValue={defaultValue || false}
        />
    </div>
}