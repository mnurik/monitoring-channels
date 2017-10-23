import React from 'react';

const Form = ({ currentChannel, onSave, onChangeName, onChangeList }) => <div>
    <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#channelModal">Yeni</button>
    <div id="channelModal" className="modal fade" role="dialog">
        <div className="modal-dialog modal-lg">
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
                                <input
                                    className="form-control"
                                    id="name"
                                    placeholder="Adı"
                                    value={currentChannel.name}
                                    onChange={({ target }) => onChangeName(target.value)}
                                />
                            </div>
                        </div>
                        {currentChannel.ipList.map((item, index) =>
                            <div className="form-group" key={index}>
                                <label className="control-label col-sm-1" htmlFor="type">Cixaris:</label>
                                <div className="col-sm-2">
                                    <select
                                        className="form-control"
                                        id="type"
                                        value={item.type}
                                        onChange={({ target }) => onChangeList("type", target.value, index)}
                                    >
                                        <option>Secin</option>
                                        <option value="1">Cixis</option>
                                        <option value="2">Giris</option>
                                    </select>
                                </div>
                                <label className="control-label col-sm-1" htmlFor="ip">Ip:</label>
                                <div className="col-sm-2">
                                    <input
                                        className="form-control"
                                        id="ip"
                                        value={item.ip}
                                        placeholder="Url"
                                        onChange={({ target }) => onChangeList("ip", target.value, index)}
                                    />
                                </div>
                                <label className="control-label col-sm-1" htmlFor="port">Port:</label>
                                <div className="col-sm-2">
                                    <input
                                        className="form-control"
                                        id="port"
                                        type="number"
                                        value={item.port}
                                        placeholder="Port"
                                        onChange={({ target }) => onChangeList("port", target.value, index)}
                                    />
                                </div>
                                <label className="control-label col-sm-1" htmlFor="hz">Tezlik:</label>
                                <div className="col-sm-2">
                                    <input
                                        className="form-control"
                                        id="hz"
                                        value={item.hz}
                                        placeholder="Hz"
                                        onChange={({ target }) => onChangeList("hz", target.value, index)}
                                    />
                                </div>
                            </div>
                        )}
                    </form>
                </div>
                <div className="modal-footer">
                    <button
                        type="button"
                        className='btn btn-success'
                        data-dismiss="modal"
                        onClick={onSave}>Əlavə Et</button>
                </div>
            </div>
        </div>
    </div>
</div>;

export default Form;