import React, { Component } from "react";
import Paper from "elevate-ui/Paper";
import Typography from "elevate-ui/Typography";
import Modal from "elevate-ui/Modal";
import Button from "elevate-ui/Button";

class ModalExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      defaultVisible: false,
    };
  }

  handleModalToggle = (modalTarget) => {
    this.setState((state) => ({ [modalTarget]: !state[modalTarget] }));
  };

  render() {
    const { defaultVisible } = this.state;
    return (
      <Paper>
        <Typography type="title">Default</Typography>
        <Button
          type="button"
          isOutlined
          color="secondary"
          onClick={() => this.handleModalToggle("defaultVisible")}
        >
          Open Modal
        </Button>
        <Modal
          visible={defaultVisible}
          toggleModal={() => this.handleModalToggle("defaultVisible")}
        >
          <Typography type="body">This is a default modal.</Typography>
        </Modal>
      </Paper>
    );
  }
}

export default ModalExample;
