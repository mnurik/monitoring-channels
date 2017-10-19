import React, { Component } from 'react';
import Input from "./Input";
import Button from "./Button";
import { saveChannel } from "./../utils/services";

class ChannelForm extends Component {
    state = {
        name: "",
        url: ""
    }

    handleChange = (key, value) => {
        this.setState({ [key]: value })
    }

    handleSave = () => {
        const { name, url } = this.state;
        saveChannel();
        this.props.onSave({ name, url })
        this.setState({ name: "", url: "" });
    }

    handleSubmit = e => {
        if (e.which === 13) {
            if (this.props.newChannel) {
                this.handleSave();
            }
        }
    }

    render() {
        return (
            <div>
                <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Yeni</button>
                <div id="myModal" className="modal fade" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4 className="modal-title">Yeni Kanal</h4>
                            </div>
                            <div className="modal-body">
                                <form className="form-horizontal">
                                    <div className="form-group">
                                        <label className="control-label col-sm-1" htmlFor="name">Adı:</label>
                                        <div className="col-sm-11">
                                            <Input id="name" value={this.state.name} onChange={(value) => this.handleChange("name", value)} placeholder="Adı" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-sm-1" htmlFor="ip">Ip:</label>
                                        <div className="col-sm-5">
                                            <Input id="ip" value={this.state.url} onChange={(value) => this.handleChange("url", value)} placeholder="Url" />
                                        </div>
                                        <label className="control-label col-sm-1" htmlFor="port">Port:</label>
                                        <div className="col-sm-5">
                                            <Input id="port" value={this.state.port} onChange={(value) => this.handleChange("url", value)} placeholder="Url" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <Button className='success' type="button" extra={{ "data-dismiss": "modal" }} onClick={this.handleSave}>Əlavə Et</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChannelForm;