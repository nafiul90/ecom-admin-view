export const productFormData = {
    separator1: {
        label: "PRIMARY INFO",
        elementType: "separator",

        config: {
            type: "title"
        },
        validation: {
            required: { value: false, msg: "" }
        },
        errorMsg: "",
        valid: true,
        separetor: true
    },
    name: {
        elementType: "text",
        label: "Product Name",

        config: {
            type: "text",
            placeholder: "Product Name",
            value: ""
        },
        validation: {
            type: { value: "string", msg: "name should be in alphabet." },
            maxlength: { value: 100, msg: "Maximum length 100." },
            minlength: { value: 3, msg: "Minimum length 3." },
            required: { value: true, msg: "Name is required." }
        },
        errorMsg: "",
        valid: false,
        touched: false
    },
    brandName: {
        elementType: "text",
        label: "Brand",

        config: {
            type: "text",
            placeholder: "Brand",
            value: ""
        },
        validation: {
            type: { value: "string", msg: "Brand name should be in alphabet." },
            maxlength: { value: 30, msg: "Maximum length 30." },
            minlength: { value: 2, msg: "Minimum length 2." },
            required: { value: true, msg: "Brand is required." }
        },
        errorMsg: "",
        valid: false,
        touched: false
    },

    model: {
        elementType: "text",
        label: "Model Name",

        config: {
            type: "text",
            placeholder: "Model name",
            value: ""
        },
        validation: {
            type: { value: "string", msg: "Model name should be in alphabet." },
            maxlength: { value: 100, msg: "Maximum length 100." },
            minlength: { value: 1, msg: "Minimum length 1." },
            required: { value: true, msg: "Brand is required." }
        },
        errorMsg: "",
        valid: false,
        touched: false
    },

    // thumbnailImages: {
    //     elementType: "file",
    //     label: "Thumbnail Image",
    //     config: {
    //         type: "file",
    //         value: []
    //     },
    //     validation: {
    //         type: {
    //             value: "file",
    //             valid: ["jpeg", "jpg", "png"],
    //             msg: "Max length 100"
    //         },
    //         required: { value: true, msg: "Thumbnail image is mandatory." }
    //     },
    //     errorMsg: "",
    //     valid: false,
    //     touched: false
    // },
    separator2: {
        label: "DETAIL INFORMATIONS",
        elementType: "separator",

        config: {
            type: "title"
        },
        validation: {
            required: { value: false, msg: "" }
        },
        errorMsg: "",
        valid: true,
        separetor: true
    },
    description: {
        elementType: "textarea",
        label: "Description",

        config: {
            type: "text",
            placeholder: "Description",
            value: ""
        },
        validation: {
            type: { value: "string", msg: "Description should be in alphabet." },
            maxlength: { value: 2000, msg: "Maximum length 2000." },
            minlength: { value: 10, msg: "Minimum length 10." },
            required: { value: false, msg: "Brand is required." }
        },
        errorMsg: "",
        valid: true,
        touched: false
    },
    videoUrl: {
        elementType: "text",
        label: "Video Url",

        config: {
            type: "text",
            placeholder: "Video Url",
            value: ""
        },
        validation: {
            type: { value: "string", msg: "Url should be in alphabet." },
            maxlength: { value: 2000, msg: "Maximum length 2000." },
            minlength: { value: 10, msg: "Minimum length 10." },
            required: { value: false, msg: "" }
        },
        errorMsg: "",
        valid: true,
        touched: false
    },
    addTags: {
        elementType: "tags",
        label: "Add Tags",

        config: {
            type: "text",
            placeholder: "Add tags",
            value: ""
        },
        validation: {
            type: { value: "string", msg: "tags should be in alphabet." },
            maxlength: { value: 50, msg: "Maximum length 50." },
            minlength: { value: 2, msg: "Minimum length 2." },
            required: { value: false, msg: "" }
        },
        errorMsg: "",
        valid: true,
        touched: false
    },
    separator3: {
        label: "SHIPPING INFORMATIONS",
        elementType: "separator",

        config: {
            type: "title"
        },
        validation: {
            required: { value: false, msg: "" }
        },
        errorMsg: "",
        valid: true,
        separetor: true
    },
    weight: {
        elementType: "number",
        label: "Package Weight (kg)",

        config: {
            type: "number",
            placeholder: "Package Weight (kg)",
            value: ""
        },
        validation: {
            type: { value: "number", msg: "Weight should be number." },
            max: { value: 2000, msg: "Maximum 2000." },
            min: { value: 0.001, msg: "Minimum  0.002." },
            required: { value: true, msg: "Weight is required." }
        },
        errorMsg: "",
        valid: false,
        touched: false
    },
    height: {
        elementType: "number",
        label: "Package Height (Inch)",

        config: {
            type: "number",
            placeholder: "Package Height (Inch)",
            value: ""
        },
        validation: {
            type: { value: "number", msg: "Height should be number." },
            max: { value: 2000, msg: "Maximum 2000." },
            min: { value: 0.001, msg: "Minimum  0.002." },
            required: { value: true, msg: "Height is required." }
        },
        errorMsg: "",
        valid: false,
        touched: false
    },
    width: {
        elementType: "number",
        label: "Package Width (Inch)",

        config: {
            type: "number",
            placeholder: "Package Width (Inch)",
            value: ""
        },
        validation: {
            type: { value: "number", msg: "Width should be number." },
            max: { value: 2000, msg: "Maximum 2000." },
            min: { value: 0.001, msg: "Minimum  0.002." },
            required: { value: true, msg: "Width is required." }
        },
        errorMsg: "",
        valid: false,
        touched: false
    },
    length: {
        elementType: "number",
        label: "Package Length (Inch)",

        config: {
            type: "number",
            placeholder: "Package Length (Inch)",
            value: ""
        },
        validation: {
            type: { value: "number", msg: "Length should be number." },
            max: { value: 2000, msg: "Maximum 2000." },
            min: { value: 0.001, msg: "Minimum  0.002." },
            required: { value: true, msg: "Length is required." }
        },
        errorMsg: "",
        valid: false,
        touched: false
    },
    warehouseAddresses: {
        elementType: "checkBox",
        label: "Warehouse Addresses",

        config: {
            type: "select",
            options: [
                {
                    value: "khilkhet",
                    displayValue: "Khilkhet",
                    checked: false
                },
                {
                    value: "uttara",
                    displayValue: "Malibag",
                    checked: false
                },
                {
                    value: "mohammad pur",
                    displayValue: "Mohammad pur",
                    checked: false
                }
            ],
            value: []
        },
        validation: {
            type: { value: "array", msg: "" },
            required: { value: false, msg: "" }
        },
        errorMsg: "",
        valid: true,
        touched: false
    }
};

