import React, {Component} from 'react'
import {Layout, Form, Upload, Button, Message} from 'element-react';
import { API_URL } from '../constants/dev';

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dialogImageUrl: '',
            fileList: [],
            dialogVisible: false,
            downloadLink: ''
        };

        this.submitUpload = this.submitUpload.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handlePreview = this.handlePreview.bind(this);
        this.uploadSuccess = this.uploadSuccess.bind(this);
        this.uploadError = this.uploadError.bind(this);
    }
    
    submitUpload() {
        this.refs.upload.submit();
    }

    handleRemove(file, fileList) {
        console.log(file, fileList);
    }

    handlePreview(file) {
        console.log(file);
    }

    uploadSuccess (response) {
        this.setState({downloadLink: API_URL + response.data.responsePath})
    }

    uploadError (e) {
        let [, handleError] = e.message.split(' {');
        handleError = JSON.parse(`{${handleError}`);
        Message.error(handleError.error);
        this.setState({downloadLink: ''})
        
    }

    render() {
        return (
            <Layout.Row>
                <Layout.Col offset="6" span="12">
                    <Form
                        className="en-US"
                        model={this.state.form}
                        >
                        <Form.Item label="Upload file json/xlsx">
                            <Upload
                                onSuccess={this.uploadSuccess} 
                                onError={this.uploadError} 
                                className="upload-demo"
                                ref="upload"
                                action="//localhost:4000/api/upload-json/"
                                onPreview={file => this.handlePreview(file)}
                                onRemove={(file, fileList) => this.handleRemove(file, fileList)}
                                fileList={this.state.fileList}
                                autoUpload={false}
                                trigger={<Button size = "small" type = "primary" > select file</Button>}>
                                <Button
                                    style={{
                                        marginLeft: '10px'
                                    }}
                                    size="small"
                                    type="success"
                                    onClick={() => this.submitUpload()}>upload to server</Button>
                            </Upload>
                        </Form.Item>
                    </Form>
                </Layout.Col>
                <Layout.Col offset="6" span="12">
                {this.state.downloadLink ? <a href={this.state.downloadLink} download>Download</a> : '' }
                </Layout.Col>
            </Layout.Row>
        )
    }
}