export const checkValidity = (value, rules) => {

    if (!rules) {
        return { valid: "success", errorMsg: "" };;
    }

    let isValid = true;
    let errorMsg = "";

    if (((rules.required && !rules.required.value) || !rules.required) && value === "") {
        return { valid: "success", errorMsg: "" }
    }

    if ((rules.required && rules.required.value) && rules.type.value === "string") {
        isValid = value.trim() !== "" && isValid;
        errorMsg = isValid ? "" : rules.required.msg;
        if (!isValid) return { valid: "error", errorMsg: errorMsg };
    }

    if (rules.type.value === "file" && (rules.required && rules.required.value)) {
        isValid = value !== null;
        errorMsg = isValid ? "" : rules.required.msg;
        if (!isValid) return { valid: "error", errorMsg: errorMsg };
    }

    if (rules.type.value === "image" && (rules.required && rules.required.value)) {
        isValid = value !== null;
        if (!isValid) return { valid: "error", errorMsg: rules.required.msg };
    }

    if (rules.minLength) {
        isValid = value.length >= rules.minLength.value;
        if (!isValid) return { valid: "error", errorMsg: rules.minLength.msg };
    }

    if (rules.maxLength) {
        isValid = value.length <= rules.maxLength.value;
        if (!isValid) return { valid: "error", errorMsg: rules.maxLength.msg };
    }

    if (rules.type.value === "number") {
        isValid = !isNaN(value)
        if (rules.required && rules.required.value)
            isValid = isValid && value !== null;

        errorMsg = isValid ? "" : rules.type.msg;
        if (isValid) {

            if (rules.min && value < rules.min.value) {
                return { valid: "error", errorMsg: rules.min.msg }
            }
            if (rules.max && value > rules.max.value) {
                return { valid: "error", errorMsg: rules.max.msg }
            }

            return { valid: "success", errorMsg: "" }
        }

        return { valid: "error", errorMsg: rules.type.msg }
    }

    if (rules.type.value === "array" && rules.required.value) {

        if (value.length < rules.minLength.value) {
            return { valid: "error", errorMsg: rules.minLength.msg }
        }

        if (value.length > rules.maxLength.value) {
            return { valid: "error", errorMsg: rules.minLength.msg }
        }
        return { valid: "success", errorMsg: "" };

    }

    return { valid: "success", errorMsg: "" };
};

export const formIsValid = form => {
    let isValid = { status: true, errorMsg: "" };

    for (let e in form) {
        if (form[e].nonElement) continue;
        if (form[e].elementType === "nestedObject") {
            isValid = formIsValid(form[e].config.value);
        }

        else if (!form[e].valid || form[e].valid === "error") {
            isValid = { status: false, errorMsg: form[e].errorMsg };
            break;
        }
    }
    return isValid;
};
