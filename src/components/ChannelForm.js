import React, { Component } from 'react';
import Input from "./Input";
import Button from "./Button";

class ChannelForm extends Component {
    state = {}
    render() {
        return (
            <thead>
                <tr>
                    <th>
                        <Input />
                    </th>
                    <th>
                        <Input />
                    </th>
                    <th>
                        <Input />
                    </th>
                    <th className="text-center">
                        <Button className='success'>
                            Əlavə Et
                        </Button>
                    </th>
                </tr>
            </thead>
        );
    }
}

export default ChannelForm;