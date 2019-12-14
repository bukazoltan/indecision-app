import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        contentLabel="Selected Option"
        onRequestClose={props.handleClearSelected}
    >
        <h3>Selected option:</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button
            onClick={props.handleClearSelected}>
                Okay
        </button>
    </Modal>
);

export default OptionModal;