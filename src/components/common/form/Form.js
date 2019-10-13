import React, { useState, useEffect } from "react";
import { Button } from "antd";
import _ from "lodash";
import Input from "../input/Input";
import { checkValidity, formIsValid } from "./validate";
import "./Form.scss"


export default (props) => {

    const [formData, setFormData] = useState(props.formData);

    const inputChangeHandler = (value, elementName) => {
        let newFormData = { ...formData }
        newFormData[elementName].config.value = value;

        let validity = checkValidity(value, newFormData[elementName].validation);
        newFormData[elementName].valid = validity.valid;
        newFormData[elementName].errorMsg = validity.errorMsg;
        newFormData[elementName].touched = true;
        setFormData(newFormData);
    }


    const onSubmitHandle = (e, newFormData = false, root) => {
        e && e.preventDefault();

        let form = newFormData ? newFormData : { ...formData };
        let validation = formIsValid(form);
        if (!validation.status) {
            window.alert("Please validate the form properly.\n" + validation.errorMsg);
            return;
        }
        let data = {};
        for (let e in form) {
            if (!form[e].nonElement) {
                if (form[e].elementType === "nestedObject") {
                    data[e] = onSubmitHandle(null, form[e].config.value, false);
                    continue;
                }
                data[e] = form[e].config.value;
            }
        }

        props.onSubmit(data, root);
        return data;
    }

    const onSubmitNestedObject = (elementName) => {
        let newFormData = { ...formData };
        let data = {};
        let nestedForm = { ...newFormData[elementName].config.nested };
        for (let e in nestedForm)
            if (!nestedForm[e].nonElement)
                data[e] = nestedForm[e].config.value;

        newFormData[elementName].config.value.push(data);
        let validation = checkValidity(data);
        newFormData[elementName].valid = validation.valid;
        newFormData[elementName].errorMsg = validation.errorMsg;
        newFormData[elementName].touched = true;

        setFormData(newFormData);
    }

    const onDeleteNestedObject = (index, elementName) => {
        let newFormData = { ...formData };
        let nestedArray = newFormData[elementName].config.value.filter((e, i) => i !== index);
        newFormData[elementName].config.value = nestedArray;
        let validation = checkValidity(nestedArray, newFormData[elementName].validation);
        newFormData[elementName].valid = validation.valid;
        newFormData[elementName].errorMsg = validation.errorMsg;
        newFormData[elementName].touched = true;

        setFormData(newFormData);
    }

    const resetForm = () => {
        setFormData(props.formData);
        localStorage.setItem("product", JSON.stringify(props.formData));
    }

    return (
        <div className="form">
            {
                createForm(formData).map((e, i) => (
                    <Input
                        key={i}
                        elementType={e.elementType}
                        config={e.config}
                        label={e.label}
                        valid={e.valid}
                        errorMsg={e.errorMsg}
                        required={e.required}
                        elementName={e.elementName}
                        styles={e.styles}
                        changed={inputChangeHandler}
                        onSubmitNestedObject={onSubmitNestedObject}
                        onDeleteNestedObject={onDeleteNestedObject}
                    />
                ))
            }{
                props.errorMassage && <h4 >{props.errorMassage}</h4>
            }
            {props.children}
            {
                props.submitMsg &&
                <Button type={props.submitButtonType} onClick={(e) => onSubmitHandle(e, false, props.root)}>
                    {props.submitMsg}
                </Button>
            }&nbsp;&nbsp;&nbsp;
            {
                props.resetMsg &&
                <Button type="danger" onClick={resetForm}>
                    {props.resetMsg}
                </Button>
            }
        </div>

    )
}

const createForm = data => {
    let elementArray = [];
    for (let element in data) {
        let formElement = {
            label: data[element].label,
            elementType: data[element].elementType,
            config: data[element].config,
            valid: data[element].touched ? data[element].valid : "success",
            errorMsg: data[element].errorMsg,
            required: data[element].validation && data[element].validation.required && data[element].validation.required.value,
            elementName: element,
            styles: data[element].styles
        };
        elementArray.push(formElement);
    }
    return elementArray;
};

export const createFormWithData = (formData, data) => {
    if (data)
        for (let e in formData) {
            if (formData[e].elementType === "nestedObject")
                createFormWithData(formData[e].config.value, data[e]);
            else if (!formData[e].nonElement) {
                formData[e].config.value = data[e] ? data[e] : formData[e].config.value;
                let validation = checkValidity(formData[e].config.value, formData[e].validation);
                formData[e].valid = validation.valid;
                formData[e].errorMsg = validation.errorMsg;
            }

        }
    return formData;
}
