import React from 'react';
import Input from "./Input";
import Button from "./Button";
import { initialState } from "./../reducers/currentChannel";

const Form = ({ currentChannel, onSave, onChangeName, onChangeList }) => {
    return <div>
        <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#channelModal">Yeni</button>
        <div id="channelModal" className="modal fade" role="dialog">
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
                                    <Input
                                        id="name"
                                        placeholder="Adı"
                                        value={currentChannel.name}
                                        onChange={(value) => onChangeName(value)}
                                    />
                                </div>
                            </div>
                            {currentChannel.ipList.map((ip, index) =>
                                <div className="form-group" key={index}>
                                    <label className="control-label col-sm-1" htmlFor="ip">Ip:</label>
                                    <div className="col-sm-5">
                                        <Input
                                            id="ip"
                                            value={ip.ip}
                                            placeholder="Url"
                                            onChange={(value) => onChangeList("ip", value, index)}
                                        />
                                    </div>
                                    <label className="control-label col-sm-1" htmlFor="port">Port:</label>
                                    <div className="col-sm-5">
                                        <Input
                                            id="port"
                                            type="number"
                                            value={ip.port}
                                            placeholder="Port"
                                            onChange={(value) => onChangeList("port", value, index)}
                                        />
                                    </div>
                                </div>
                            )}
                        </form>
                    </div>
                    <div className="modal-footer">
                        <Button
                            type="button"
                            className='success'
                            extra={{ "data-dismiss": "modal" }}
                            onClick={onSave}>Əlavə Et</Button>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}

export default Form;