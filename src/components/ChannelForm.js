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
            <thead>
                <tr>
                    <th>
                        <Input value={this.state.name} onChange={(value) => this.handleChange("name", value)} placeholder="Adı" />
                    </th>
                    <th>
                        <Input value={this.state.url} onChange={(value) => this.handleChange("url", value)} placeholder="Url" />
                    </th>
                    <th>Statusu</th>
                    <th></th>
                    <th className="text-center">
                        <Button className='success' onClick={this.handleSave}>Əlavə Et</Button>
                    </th>
                </tr>
            </thead>
        );
    }
}

export default ChannelForm;