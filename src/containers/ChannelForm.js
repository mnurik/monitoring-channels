import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from "jquery";
import Form from "./../components/Form";
import * as actions from "./../actions/actions";
import * as services from "./../utils/services";

class ChannelForm extends Component {

    handleChangeList = (key, value, index) => {
        this.props.editList({ key, value, index });
    }

    handleSaveChannel = () => {
        services.saveChannel(this.props.currentChannel)
            .subscribe(response => {
                if (response.id) this.props.editChannel(response)
                else this.props.addChannel(response)
                this.props.clearCurrent()
            });
    }

    handleCloseModal = () => {
        $('#channelModal').modal('hide');
        this.props.clear();
    }

    render() {
        return <Form
            currentChannel={this.props.currentChannel}
            onChangeData={this.props.editData}
            onChangeList={this.handleChangeList}
            onChangeCurrent={this.handleChange}
            onSave={this.handleSaveChannel}
            onCloseModal={this.handleCloseModal}
        />;
    }
};

const mapStateToProps = (state) => ({
    currentChannel: state.currentChannel
});

const mapDispatchToProps = {
    addChannel: actions.addChannel,
    editChannel: actions.editChannel,
    clearCurrent: actions.clearCurrent,
    editData: actions.editCurrentData,
    editList: actions.editCurrentList,
    clear: actions.clearCurrent
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelForm);