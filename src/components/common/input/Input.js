import React from "react";
import { Form, InputNumber, Input, Select, Button, Table, Icon, DatePicker } from 'antd';
import CustomForm from "../form/Form";
import ImageUploader from "./ImageUploader"
import defaultStyles from "./Input.module.css";
import moment from 'moment';

const { Option } = Select;
const { TextArea } = Input;

// import PackagePricing from "./packagePricingBox";


export default (props) => {
    const type = props.elementType;
    const styles = props.styles || defaultStyles;

    //for nested arrray data table.
    const getColumns = (data) => {

        let columns = [];
        for (let e in data) {
            if (data[e].nonElement) continue;
            let column = {
                title: data[e].label,
                dataIndex: e,
                key: e,
                render: e.toLowerCase().includes('image') ? (e) => renderImage(e) : null
            }
            columns.push(column);
        }
        columns.push({
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: (e => <Button shape="circle" type="danger" onClick={() => props.onDeleteNestedObject(e.key, props.elementName)}><Icon type="delete" /></Button>)
        })
        return columns;
    }



    let input = "";
    switch (type) {
        case "separator":
            input = (
                <div className={styles.formHeader}>
                    <h4>{props.label}</h4>
                    <hr className={styles.hr} />
                </div>
            );
            break;
        case "number":
            input = <InputNumber value={props.config.value}
                className={styles.input}
                placeholder={props.config.placeholder}
                onChange={value => props.changed(value, props.elementName)}
            />;
            break;
        case "text":
            input = <Input value={props.config.value}
                className={styles.input}
                placeholder={props.config.placeholder}
                onChange={e => props.changed(e.target.value, props.elementName)} />;
            break;

        case "date":
            input = <DatePicker defaultValue={props.config.value ? moment(props.config.value, "DD-MM-YYYY") : ""}
                className={styles.input}
                format="DD-MM-YYYY"
                onChange={(date, dateString) => props.changed(dateString, props.elementName)}
            />;
            break;

        case "textarea":
            input = (
                <TextArea
                    className={styles.textarea}
                    placeholder={props.config.placeholder} placeholder={props.config.placeholder}
                    value={props.config.value}
                    onChange={e => props.changed(e.target.value, props.elementName)}
                />
            );
            break;

        case "select":
            input = (
                <Select
                    defaultValue={props.config.placeholder}
                    onChange={value => props.changed(value, props.elementName)}
                >
                    {props.config.options.map((e, i) => (
                        <Option key={i} value={e.value}>
                            {e.displayValue}
                        </Option>
                    ))}
                </Select>
            );
            break;
        case "nestedObject":
            input = (<div className={styles.nested}>
                <CustomForm formData={props.config.value} root={false} />
            </div>)
            break;

        case "nestedArray":
            input = (
                <div className={styles.nested}>
                    <CustomForm
                        formData={props.config.nested}
                        submitMsg={props.config.submitMsg}
                        submitButtonType={props.config.submitButtonType}
                        onSubmit={() => props.onSubmitNestedObject(props.elementName)}
                        root={false}
                    />
                    {props.config.value.length > 0 &&
                        <Table className={styles.table} columns={getColumns(props.config.nested)} dataSource={props.config.value.map((e, i) => ({ ...e, key: i }))} pagination={false} />
                    }
                </div>
            );
            break;

        case "tags":
            input = (
                <div className={styles.nested}>
                    <CustomForm
                        className={styles.addTagBox}
                        formData={props.config.nested}
                        submitMsg={props.config.submitMsg}
                        submitButtonType={props.config.submitButtonType}
                        onSubmit={() => props.onSubmitNestedObject(props.elementName)}
                    />
                    {
                        props.config.value.map((e, i) => (
                            <span key={i} className={styles.tagBox}>
                                {e.value}
                                <Button className={styles.deleteTagButton} type="link" onClick={() => props.onDeleteNestedObject(i, props.elementName)}>
                                    <Icon type="close" />
                                </Button>
                            </span>)
                        )
                    }
                </div>
            )
            break;

        case "image":
            input = (
                <ImageUploader length={props.config.length} fileList={props.config.value} changed={props.changed} elementName={props.elementName} />
            );
            break;

        default:
            return "";
    }


    const formItemLayout = {
        labelCol: { span: 7 },
        wrapperCol: { span: 12 },
    };

    if (type === "separator" || type === "nestedObject" || type === "nestedArray") return input;
    else
        return (
            <Form>
                <Form.Item
                    style={{ textAlign: "left" }}
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


const renderImage = (data) => {
    if (!data) return "error !";
    if (data.url)
        return <img src={data.url} alt="no content" style={{ height: "60px", width: "60px", borderRadius: "5px" }} />

    else if (data.length === 1)
        return <img src={data[0].url} alt="no content" style={{ height: "60px", width: "60px", borderRadius: "5px" }} />

    else if (data.length > 1)
        return "array should be rendered.";

    else return "error !";
}

