import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from "./../components/Form";
import * as actions from "./../actions/actions";
import { initialState } from "./../reducers/currentChannel";

class ChannelForm extends Component {

    handleChangeList = (key, value, index) => {
        this.props.editList({ key, value, index })
    }

    handleChangeName = (value) => {
        this.props.editName(value);
    }

    handleSaveChannel = () => {
        this.props.save(this.props.currentChannel);
    }

    render() {
        return <Form
            currentChannel={this.props.currentChannel}
            onChangeName={this.handleChangeName}
            onChangeCurrent={this.handleChange}
            onSave={this.handleSaveChannel}
        />
    }
};

const mapStateToProps = (state) => ({
    currentChannel: state.currentChannel
});

const mapDispatchToProps = {
    save: actions.saveChannel,
    editName: actions.editCurrentName,
    editList: actions.editCurrentList
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelForm);