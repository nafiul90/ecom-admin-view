import React, { useState } from "react";
import { Button } from "antd";
import _ from "lodash";
import Input from "../input/Input";
import "./Form.scss"


export default (props) => {

    const [formData, setFormData] = useState(createForm(props.formData, props.data));
    const [isValid, setIsValid] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errorMassage, setErrorMassage] = useState(null);

    const inputChangeHandler = (value, elementName) => {
        let newFormData = JSON.parse(JSON.stringify(formData));
        newFormData[elementName].config.value = value;

        let validity = checkValidity(value, newFormData[elementName].validation);
        newFormData[elementName].valid = validity.valid;
        newFormData[elementName].errorMsg = validity.errorMsg;
        newFormData[elementName].touched = true;
        setFormData(newFormData);
        setIsValid(formIsValid(newFormData));
    }


    return (
        !loading ?
            <div className="form">
                {
                    createFormData(formData).map((e, i) => (
                        <Input
                            key={i}
                            elementType={e.elementType}
                            config={e.config}
                            label={e.label}
                            valid={e.valid}
                            errorMsg={e.errorMsg}
                            required={e.required}
                            elementName={e.elementName}
                            changed={inputChangeHandler}

                        />
                    ))
                }{
                    errorMassage && <h4 >{errorMassage}</h4>
                }
                <Button disabled={!isValid}
                    variant="contained" color="primary"
                    onClick={() => console.log("Clicked!")}
                >
                    {props.submitMsg}
                </Button>
            </div> : <Progress />

    )
}

const createForm = (formData, data) => {
    if (data)
        for (let e in formData) {
            formData[e].config.value = data[e] ? data[e] : formData[e].config.value;
        }
    return formData;
}


const createFormData = data => {
    let elementArray = [];
    for (let element in data) {
        let formElement = {
            label: data[element].label,
            elementType: data[element].elementType,
            config: data[element].config,
            valid: data[element].touched ? data[element].valid : true,
            errorMsg: data[element].errorMsg,
            required: data[element].validation.required.value,
            elementName: element
        };
        elementArray.push(formElement);
    }
    return elementArray;
};


const checkValidity = (value, rules) => {

    if (!rules) {
        return { valid: "success", errorMsg: "" };;
    }

    let isValid = true;
    let errorMsg = "";

    if (rules.required.value && rules.type.value === "string") {
        isValid = value.trim() !== "" && isValid;
        errorMsg += isValid ? "" : rules.required.msg;
        if (!isValid) return { valid: "error", errorMsg: errorMsg };
    }

    if (rules.type.value === "file" && rules.required.value) {
        isValid = value !== null;
        errorMsg += isValid ? "" : rules.required.msg;
        if (!isValid) return { valid: "error", errorMsg: errorMsg };
    }

    if (rules.minlength) {
        isValid = value.length >= rules.minlength.value && isValid;
        errorMsg +=
            value.length < rules.minlength.value ? rules.minlength.msg + "" : "";
        if (!isValid) return { valid: "error", errorMsg: errorMsg };
    }

    if (rules.maxlength) {
        isValid = value.length <= rules.maxlength.value && isValid;
        errorMsg +=
            value.length > rules.maxlength.value ? rules.maxlength.msg + "" : "";
        if (!isValid) return { valid: "error", errorMsg: errorMsg };
    }

    if (rules.type.value === "number") {
        // const pattern = /^\d+$/;
        // isValid = pattern.test(value) && isValid;
        isValid = value !== NaN;
        errorMsg += isValid ? "" : rules.type.msg;
        if (isValid) {
            isValid = value >= rules.min.value && value <= rules.max.value;
            errorMsg += value >= rules.min.value ? "" : rules.min.msg;
            errorMsg += value <= rules.max.value ? "" : rules.max.msg;
        }
        if (!isValid) return { valid: "error", errorMsg: errorMsg };
    }

    if (rules.type.value === "array" && rules.required.value) {
        isValid = value.length > 0 && isValid;
        if (!isValid) return { valid: "error", errorMsg: errorMsg };
    }

    return { valid: "success", errorMsg: errorMsg };
};

const formIsValid = form => {
    let isValid = true;

    for (let e in form) {
        if (form[e].elementType !== "separetor") {
            if (!form[e].valid || form[e].valid === "error") {
                isValid = false;
                break;
            }
        }
    }
    console.log("form is valid========>", isValid);

    return isValid;
};


const Progress = () => {
    return (
        <h2>loading ...</h2>
    );

}
