import React from 'react';
import PropTypes from 'prop-types';
import ImageMode from "./../components/ImageMode";
import FormModal from "./../components/FormModal";

const Form = (props) =>
  <div className="col-lg-10 col-sm-9 clearfix channel__add__container margin-b-10">
    <button type='button' className='btn btn-default pull-left channel__add__button' data-toggle='modal' data-target='#channelModal'>Yeni</button>
    <FormModal
      currentChannel={props.currentChannel}
      onSave={props.onSave}
      onChangeData={props.onChangeData}
      onChangeList={props.onChangeList}
      onCloseModal={props.onCloseModal}
    />
    <ImageMode toggleImageMode={props.toggleImageMode} imageMode={props.imageMode} />
  </div>;

Form.propTypes = {
  currentChannel: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChangeData: PropTypes.func.isRequired,
  onChangeList: PropTypes.func.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  toggleImageMode: PropTypes.func.isRequired,
  imageMode: PropTypes.bool.isRequired
};

export default Form;
