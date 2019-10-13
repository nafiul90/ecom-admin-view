import React from "react";
import { Upload, Icon, Modal } from 'antd';
import { PRODUCT_FILE_UPLOAD } from "../../../helpers/apis";

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

const getFileList = (data, length) => {
  if (!data) return [];
  if (length === 1) return [{ uid: "-1", name: "image", status: "done", url: data }];
  return data.map((e, i) => ({ uid: `-${i}`, name: "image", status: "done", url: e.url }));
}

class ImageUploader extends React.Component {
  state = {
    previewVisible: false,
    previewImage: '',
    fileList: getFileList(this.props.fileList, this.props.length)
  };

  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
    });
  };

  handleChange = ({ fileList }) => {
    const props = this.props;
    this.setState({ fileList }, () => {
      if (!fileList.length) {
        props.changed(null, props.elementName);
        return;
      }
      let list = props.length > 1 ? fileList.map(e => e.response && { url: e.response }) : fileList[0].response && fileList[0].response;
      props.changed(list, props.elementName);
    });
  }

  render() {
    const props = this.props;
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div className="clearfix">
        <Upload
          action={PRODUCT_FILE_UPLOAD}
          listType="picture-card"
          fileList={fileList}
          onPreview={this.handlePreview}
          onChange={this.handleChange}
        >
          {fileList.length >= props.length ? null : uploadButton}
        </Upload>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
    );
  }
}

export default ImageUploader;