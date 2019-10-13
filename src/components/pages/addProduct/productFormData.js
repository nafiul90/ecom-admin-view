import styles from "./formStyles/formStyle.module.css";
import packagePricingStyle from "./formStyles/packagePricing.module.css"

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
        valid: "success",
        nonElement: true
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
            maxLength: { value: 100, msg: "Maximum length 100." },
            minLength: { value: 3, msg: "Minimum length 3." },
            required: { value: true, msg: "Name is required." }
        },
        errorMsg: "Name is required.",
        valid: "error",
        touched: false
    },
    brand: {
        elementType: "text",
        label: "Brand",

        config: {
            type: "text",
            placeholder: "Brand",
            value: ""
        },
        validation: {
            type: { value: "string", msg: "Brand name should be in alphabet." },
            maxLength: { value: 30, msg: "Maximum length 30." },
            minLength: { value: 2, msg: "Minimum length 2." },
            required: { value: true, msg: "Brand is required." }
        },
        errorMsg: "Brand is required.",
        valid: "error",
        touched: false
    },

    thumbnailImage: {
        elementType: "image",
        label: "Thumbnail Image",
        config: {
            type: "image",
            length: 1,
            value: null
        },
        validation: {
            type: {
                value: "image",
                valid: ["jpeg", "jpg", "png"],
                msg: "Max length 1"
            },
            required: { value: true, msg: "Thumbnail image is mandatory." }
        },
        errorMsg: "Thumbnail image is mandatory.",
        valid: "error",
        touched: false
    },

    separator2: {
        label: "PRICING",
        elementType: "separator",

        config: {
            type: "title"
        },
        validation: {
            required: { value: false, msg: "" }
        },
        errorMsg: "",
        valid: "success",
        nonElement: true
    },

    purchasePrice: {
        elementType: "number",
        label: "Purchase Price",

        config: {
            type: "number",
            placeHolder: "Purchase Price",
            value: ""
        },
        validation: {
            type: { value: "number", msg: "Purchase Price should be number." },
            max: { value: 99999999, msg: "Maximum 99999999." },
            min: { value: 0, msg: "Minimum  0." },
            required: { value: true, msg: "Purchase Price is required." }
        },
        errorMsg: "Purchase Price is required.",
        valid: "error",
        touched: false
    },

    salePrice: {
        elementType: "number",
        label: "Sale Price",

        config: {
            type: "number",
            placeHolder: "Sale Price",
            value: ""
        },
        validation: {
            type: { value: "number", msg: "Sale Price should be number." },
            max: { value: 99999999, msg: "Maximum 99999999." },
            min: { value: 0, msg: "Minimum  0." },
            required: { value: true, msg: "Sale Price is required." }
        },
        errorMsg: "Sale Price is required.",
        valid: "error",
        touched: false
    },

    specialPrice: {
        elementType: "nestedObject",
        label: "Special Price",

        config: {
            type: "nestedObject",
            placeHolder: "Special Price",
            value: {
                specialPrice: {
                    elementType: "number",
                    label: "Special Price",

                    config: {
                        type: "number",
                        placeHolder: "Special Price",
                        value: ""
                    },
                    validation: {
                        type: { value: "number", msg: "" },
                        max: { value: 99999999, msg: "Maximum 99999999." },
                        min: { value: 0, msg: "Minimum  0." },
                        required: { value: false, msg: "" }
                    },
                    errorMsg: "",
                    valid: "success",
                    touched: false
                },
                specialPriceFrom: {
                    elementType: "date",
                    label: "Special Price From",

                    config: {
                        type: "date",
                        placeHolder: "Special Price From",
                        value: ""
                    },
                    validation: {
                        type: { value: "date", msg: "" },
                        // max: { value: 99999999, msg: "Maximum 99999999." },
                        // min: { value: 0, msg: "Minimum  0." },
                        required: { value: false, msg: "" }
                    },
                    errorMsg: "",
                    valid: "success",
                    touched: false
                },
                specialPriceTo: {
                    elementType: "date",
                    label: "Special Price To",

                    config: {
                        type: "date",
                        placeHolder: "Special Price To",
                        value: ""
                    },
                    validation: {
                        type: { value: "date", msg: "" },
                        // max: { value: 99999999, msg: "Maximum 99999999." },
                        // min: { value: 0, msg: "Minimum  0." },
                        required: { value: false, msg: "" }
                    },
                    errorMsg: "",
                    valid: "success",
                    touched: false
                },
            }
        },
        validation: {
            type: { value: "number", msg: "Special Price should be number." },
            max: { value: 99999999, msg: "Maximum 99999999." },
            min: { value: 0, msg: "Minimum  0." },
            required: { value: false, msg: "" }
        },
        errorMsg: "",
        valid: "success",
        touched: false
    },

    discount: {
        elementType: "nestedObject",
        label: "Discount",

        config: {
            type: "nestedObject",
            placeHolder: "Purchase Price",
            value: {
                discountAmount: {
                    elementType: "number",
                    label: "Discount in Amount",

                    config: {
                        type: "number",
                        placeHolder: "Discount Amount",
                        value: ""
                    },
                    validation: {
                        type: { value: "number", msg: "Discount amount should be number." },
                        max: { value: 99999999, msg: "Maximum 99999999." },
                        min: { value: 0, msg: "Minimum  0." },
                        required: { value: false, msg: "" }
                    },
                    errorMsg: "",
                    valid: "success",
                    touched: false
                },
                discountPercentage: {
                    elementType: "number",
                    label: "Discount in Percentage",

                    config: {
                        type: "number",
                        placeHolder: "Discount Percentage",
                        value: ""
                    },
                    validation: {
                        type: { value: "number", msg: "Discount percentage should be number." },
                        max: { value: 99999999, msg: "Maximum 99999999." },
                        min: { value: 0, msg: "Minimum  0." },
                        required: { value: false, msg: "" }
                    },
                    errorMsg: "",
                    valid: "success",
                    touched: false
                },
            }
        },

    },



    packagePricingList: {
        elementType: "nestedArray",
        label: "Package Pricing",
        styles: packagePricingStyle,

        config: {
            type: "nestedArray",
            submitMsg: "Add Package Pricing",
            value: [],
            nested: {
                separator5: {
                    label: "PACKAGE PRICING",
                    elementType: "separator",
                    styles: styles,

                    config: {
                        type: "title"
                    },
                    validation: {
                        required: { value: false, msg: "" }
                    },
                    errorMsg: "",
                    valid: "success",
                    nonElement: true
                },

                minimumQuantity: {
                    elementType: "number",
                    label: "Minimum Quantity",

                    config: {
                        type: "number",
                        placeholder: "Quantity",
                        value: 0
                    },
                    validation: {
                        type: { value: "number", msg: "Quantity should be number." },
                        min: { value: 2, msg: "Minimum  2." },
                        required: { value: true, msg: "" }
                    },
                    errorMsg: "",
                    valid: "error",
                    touched: false
                },

                pricePerProduct: {
                    elementType: "number",
                    label: "Price Per Product",

                    config: {
                        type: "number",
                        placeholder: "Quantity",
                        value: 0
                    },
                    validation: {
                        type: { value: "number", msg: "Quantity should be number." },
                        min: { value: 0, msg: "Minimum  0." },
                        required: { value: true, msg: "" }
                    },
                    errorMsg: "",
                    valid: "error",
                    touched: false
                }


            },
        },
        validation: {
            type: { value: "array", msg: "" },
            maxLength: { value: 100, msg: "Maximum 100 package pricing allowed." },
            minLength: { value: 0, msg: "" },
            required: { value: false, msg: "" }
        },
        errorMsg: "",
        valid: "success",
        touched: false
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
            type: { value: "string", msg: "description should be in alphabet." },
            maxLength: { value: 5000, msg: "Maximum length 5000." },
            minLength: { value: 5, msg: "Minimum length 5." },
            required: { value: false, msg: "" }
        },
        errorMsg: "",
        valid: "success",
        touched: false
    },

    specificationList: {
        elementType: "nestedArray",
        label: "Description",

        config: {
            type: "nestedArray",
            submitMsg: "Add Specification",
            value: [],
            nested: {
                separator3: {
                    label: "SPECIFICATION",
                    elementType: "separator",
                    styles: styles,

                    config: {
                        type: "title"
                    },
                    validation: {
                        required: { value: false, msg: "" }
                    },
                    errorMsg: "",
                    valid: "success",
                    nonElement: true
                },

                name: {
                    elementType: "text",
                    label: "Title",

                    config: {
                        type: "text",
                        placeholder: "Title",
                        value: ""
                    },
                    validation: {
                        type: { value: "string", msg: "Description Title should be a text" },
                        maxLength: { value: 50, msg: "Maximum length 50." },
                        minLength: { value: 3, msg: "Minimum length 2." },
                        required: { value: true, msg: "Description title is required." }
                    },
                    errorMsg: "",
                    valid: "error",
                    touched: false
                },
                value: {
                    elementType: "textarea",
                    label: "Value",

                    config: {
                        type: "text",
                        placeholder: "value",
                        value: ""
                    },
                    validation: {
                        type: { value: "string", msg: "Description  should be a text" },
                        maxLength: { value: 5000, msg: "Maximum 5000." },
                        minLength: { value: 5, msg: "Minimum  5." },
                        required: { value: true, msg: "Description value is required." }
                    },
                    errorMsg: "",
                    valid: "error",
                    touched: false
                },
            },
        },
        validation: {
            type: { value: "array", msg: "" },
            maxLength: { value: 200, msg: "Maximum 200 description allowed." },
            minLength: { value: 0, msg: "" },
            required: { value: false, msg: "" }
        },
        errorMsg: "",
        valid: "success",
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
            maxLength: { value: 2000, msg: "Maximum length 2000." },
            minLength: { value: 10, msg: "Minimum length 10." },

        },
        errorMsg: "",
        valid: "success",
        touched: false
    },
    tagList: {
        elementType: "tags",
        label: "Tags",

        config: {
            type: "tags",
            submitMsg: "Add Tags",
            value: [],
            nested: {
                value: {
                    elementType: "text",
                    label: "Add Tag",

                    config: {
                        type: "text",
                        placeholder: "Tag",
                        value: ""
                    },
                    validation: {
                        type: { value: "string", msg: "Tag should be a text" },
                        maxLength: { value: 50, msg: "Maximum length 50." },
                        minLength: { value: 1, msg: "Minimum length 1." },
                        required: { value: true, msg: "" }
                    },
                    errorMsg: "",
                    valid: "error",
                    touched: false
                },
            },
        },
        validation: {
            type: { value: "array", msg: "" },
            maxLength: { value: 200, msg: "Maximum 200 tags allowed." },
            minLength: { value: 0, msg: "" },
            required: { value: false, msg: "" }
        },
        errorMsg: "",
        valid: "success",
        touched: false
    },

    shipping: {
        elementType: "nestedObject",
        label: "Shipping Information",

        config: {
            type: "nestedObject",
            value: {
                separator4: {
                    label: "SHIPPING INFORMATION",
                    elementType: "separator",
                    styles: styles,

                    config: {
                        type: "title"
                    },
                    validation: {
                        required: { value: false, msg: "" }
                    },
                    errorMsg: "",
                    valid: "success",
                    nonElement: true
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
                        required: { value: false, msg: "" }
                    },
                    errorMsg: "",
                    valid: "success",
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
                        required: { value: false, msg: "" }
                    },
                    errorMsg: "",
                    valid: "success",
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
                        required: { value: false, msg: "" }
                    },
                    errorMsg: "",
                    valid: "success",
                    touched: false
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
                    errorMsg: "Weight is required.",
                    valid: "error",
                    touched: false
                },
            }
        },
    },
    variantList: {
        elementType: "nestedArray",
        label: "Variants",

        config: {
            type: "nestedArray",
            submitMsg: "Add Variant",
            value: [],
            nested: {
                separator5: {
                    label: "VARIANTS",
                    elementType: "separator",
                    styles: styles,

                    config: {
                        type: "title"
                    },
                    validation: {
                        required: { value: false, msg: "" }
                    },
                    errorMsg: "",
                    valid: "success",
                    nonElement: true
                },
                color: {
                    elementType: "select",
                    label: "Color",

                    config: {
                        type: "select",
                        placeholder: "Choose a color",
                        value: "",
                        options: [
                            { value: "green", displayValue: "Green" },
                            { value: "blue", displayValue: "Blue" },
                            { value: "black", displayValue: "Black" },
                            { value: "white", displayValue: "White" }
                        ]
                    },
                    validation: {
                        type: { value: "string", msg: "Color family should be in alphabet." },
                        required: { value: true, msg: "Color is required." }
                    },
                    errorMsg: "Color is required.",
                    valid: "error",
                    touched: false
                },
                size: {
                    elementType: "select",
                    label: "Size",

                    config: {
                        type: "select",
                        placeholder: "Choose a size",
                        value: "",
                        options: [
                            { value: "xs", displayValue: "XS" },
                            { value: "sm", displayValue: "SM" },
                            { value: "md", displayValue: "MD" },
                            { value: "lg", displayValue: "LG" },
                            { value: "xl", displayValue: "XL" },
                            { value: "xxl", displayValue: "XXL" },
                            { value: "22", displayValue: "22" },
                            { value: "24", displayValue: "24" },
                            { value: "28", displayValue: "28" },
                            { value: "29", displayValue: "29" },
                            { value: "30", displayValue: "30" },
                            { value: "31", displayValue: "31" },
                            { value: "32", displayValue: "32" },
                            { value: "33", displayValue: "33" },
                            { value: "34", displayValue: "34" },
                            { value: "35", displayValue: "35" },
                            { value: "36", displayValue: "36" }
                        ],
                    },
                    validation: {
                        type: { value: "string", msg: "Size should be in alphabet." },
                        required: { value: true, msg: "Size is required." }
                    },
                    errorMsg: "Size is required.",
                    valid: "error",
                    touched: false
                },
                quantity: {
                    elementType: "number",
                    label: "Quantity",

                    config: {
                        type: "number",
                        placeholder: "Quantity",
                        value: 0
                    },
                    validation: {
                        type: { value: "number", msg: "Quantity should be number." },
                        min: { value: 0, msg: "Minimum  0." },
                        required: { value: true, msg: "Quantity is required." }
                    },
                    errorMsg: "Quantity is required.",
                    valid: "error",
                    touched: false
                },
                imageList: {
                    elementType: "image",
                    label: "Images",
                    config: {
                        type: "image",
                        length: 5,
                        value: null
                    },
                    validation: {
                        type: {
                            value: "image",
                            valid: ["jpeg", "jpg", "png"],
                            msg: "Max length 100"
                        },
                        required: { value: true, msg: "Variant images is mandatory." }
                    },
                    errorMsg: "Variant images are required.",
                    valid: "error",
                    touched: false
                }

            }

        },
        validation: {
            type: { value: "array", msg: "" },
            maxLength: { value: 100, msg: "Maximum 100 variants allowed." },
            minLength: { value: 1, msg: "Minimum 1 variant expected." },
            required: { value: true, msg: "Variants is required. Please add variants." }
        },
        errorMsg: "Variants is required",
        valid: "error",
        touched: false
    },
};

