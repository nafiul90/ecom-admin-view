import React from "react";
import { Form, InputNumber, Input, Select, Button } from 'antd';
import PackagePricing from "../../packagePricing/PackagePricing";
import "./Input.scss";

const { Option } = Select;

// import PackagePricing from "./packagePricingBox";


export default (props) => {
    const type = props.elementType;
    let input = "";
    switch (type) {
        case "separator":
            input = (
                <div className="form_header">
                    <h4>{props.label}</h4>
                    <hr />
                </div>
            );
            break;
        case "number":
            input = <InputNumber value={props.config.value}
                className="input"
                placeholder={props.config.placeholder}
                onChange={value => props.changed(value, props.elementName)}
            />;
            break;
        case "text":
            input = <Input value={props.config.value}
                className="input"
                placeholder={props.config.placeholder}
                onChange={e => props.changed(e.target.value, props.elementName)} />;
            break;
        case "textarea":
            input = (
                <textarea
                    className="textarea"
                    {...props.config}
                    onChange={e => props.changed(e.target.value, props.elementName)}
                    style={{ height: "200px" }}
                />
            );
            break;

        case "select":
            input = (
                <Select
                    onChange={e => props.changed(e.target.value, props.elementName)}
                >
                    {this.props.config.options.map((e, i) => (
                        <Option key={i} value={e.value} style={{ color: "black" }}>
                            {e.displayValue}
                        </Option>
                    ))}
                </Select>
            );
            break;
        case "packagePricingBox":
            input = (
                <div>
                    <Button onClick={() => console.log("clicked")}>
                        ADD PACKAGE PRICES
                    </Button>
                    {this.state.packagePricingModal && (
                        <div style={{ width: "500px" }}>
                            <PackagePricing
                                prices={this.props.config.value}
                                addPriceHandle={this.props.addPackagePriceHandle}
                                deletePackagePricing={this.props.deletePackagePackagePricing}
                            />
                        </div>
                    )}
                </div>
            );
            break;

        default:
            return "";
    }

    const formItemLayout = {
        labelCol: { span: 7 },
        wrapperCol: { span: 12 },
    };

    if (type === "separator") return input;
    else
        return (
            <Form>
                <Form.Item
                    {...formItemLayout}
                    label={props.label}
                    validateStatus={props.valid}
                    help={props.errorMsg || props.tips}
                    required={props.required}
                >
                    {input}
                </Form.Item>
            </Form>
        );
}

