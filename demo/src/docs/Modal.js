import React, { Component } from "react";
import withStyles from "elevate-ui/withStyles";
import Paper from "elevate-ui/Paper";
import Typography from "elevate-ui/Typography";
import Modal from "elevate-ui/Modal";
import Button from "elevate-ui/Button";

import AccountCircle from "elevate-ui-icons/AccountCircle";
import Cancel from "elevate-ui-icons/Cancel";
import Check from "elevate-ui-icons/Check";

class ModalExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      defaultVisible: false,
      enhancedVisible: false,
      longVisible: false,
    };
  }

  handleModalToggle = (modalTarget) => {
    this.setState((state) => ({ [modalTarget]: !state[modalTarget] }));
  };

  confirmModal = () => alert("Confirmed!");

  render() {
    const { classes } = this.props;
    const { defaultVisible, enhancedVisible, longVisible } = this.state;
    return (
      <Paper>
        <div className={classes.section}>
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
            confirmAction={this.confirmModal}
            title="Default Modal"
            visible={defaultVisible}
            toggleModal={() => this.handleModalToggle("defaultVisible")}
          >
            <Typography type="body">
              Are you sure you want to perform this action? This is a permanent
              action. Lorem ipsum dolor sit amet colon! Ipsum dolor! Proceed
              with caution.
            </Typography>
          </Modal>
        </div>
        <div className={classes.section}>
          <Typography type="title">Enhanced</Typography>
          <Button
            type="button"
            isOutlined
            color="primary"
            onClick={() => this.handleModalToggle("enhancedVisible")}
          >
            Open Enhanced Modal
          </Button>
          <Modal
            cancelText="Cancel Save"
            cancelIcon={<Cancel />}
            confirmAction={this.confirmModal}
            confirmText="Save and Finish"
            confirmIcon={<Check />}
            icon={<AccountCircle />}
            maskStyles={{
              paddingTop: "60px",
              backgroundColor: "rgba(66, 125, 125, 0.75)",
            }}
            toggleModal={() => this.handleModalToggle("enhancedVisible")}
            title="Enhanced Modal"
            visible={enhancedVisible}
          >
            <Typography type="heading6" gutterBottom>
              Lorem Ipsum Dolor?
            </Typography>
            <Typography type="body">
              Are you sure you want to perform this action? This is a permanent
              action. Lorem ipsum dolor sit amet colon! Ipsum dolor! Proceed
              with caution.
            </Typography>
          </Modal>
        </div>
        <div className={classes.section}>
          <Typography type="title">Large Content Modal</Typography>
          <Button
            type="button"
            isOutlined
            color="secondary"
            onClick={() => this.handleModalToggle("longVisible")}
          >
            Open Modal With Large Content
          </Button>
          <Modal
            confirmAction={this.confirmModal}
            title="Modal with Large Content"
            visible={longVisible}
            toggleModal={() => this.handleModalToggle("longVisible")}
          >
            <Typography type="body" gutterBottom>
              Are you sure you want to perform this action? This is a permanent
              action. Lorem ipsum dolor sit amet colon! Ipsum dolor! Proceed
              with caution.
            </Typography>
            <Typography type="body" gutterBottom>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              malesuada purus a nisl tempus, ut blandit sem posuere. In
              consectetur tortor sed sagittis luctus. Curabitur vel viverra
              lectus, eget ullamcorper nisl. Nam ultricies a ex ut aliquam.
              Aenean justo nulla, iaculis quis volutpat vel, pretium tincidunt
              libero. Praesent ac enim sollicitudin, dignissim massa et, mollis
              felis. Fusce diam erat, rhoncus at porttitor nec, sodales sit amet
              libero.
            </Typography>
            <Typography type="body" gutterBottom>
              Aliquam nec lobortis felis. Ut sed arcu varius eros imperdiet
              luctus et vel tellus. Nam purus augue, elementum sed aliquet et,
              lacinia eget enim. Nullam sed sapien in ligula aliquet tristique
              non quis urna. Morbi a facilisis sapien. Pellentesque ultrices
              luctus eros vitae ullamcorper. Sed quis dignissim sem. Nunc
              efficitur commodo laoreet. Phasellus id malesuada nibh, et
              pharetra dui. Donec nibh eros, mollis a ex vitae, luctus aliquet
              diam.
            </Typography>
            <Typography type="body" gutterBottom>
              Duis metus nulla, condimentum at blandit vitae, imperdiet ac ante.
              Aliquam consequat urna eu neque tincidunt, non ornare est
              ultricies. Proin aliquet, nisl ut ullamcorper vehicula, nulla nisi
              vehicula turpis, ac sollicitudin est orci vitae nibh. Suspendisse
              interdum volutpat feugiat. Pellentesque habitant morbi tristique
              senectus et netus et malesuada fames ac turpis egestas. Sed dui
              ipsum, eleifend sit amet suscipit ac, scelerisque maximus tortor.
              Nam id sem id leo rhoncus elementum.
            </Typography>
            <Typography type="body" gutterBottom>
              Ut eget nisl ut mauris luctus ullamcorper. Praesent sit amet
              pharetra lectus. Sed turpis felis, blandit in luctus sit amet,
              vulputate in ligula. Curabitur risus lectus, commodo et diam
              auctor, dapibus auctor felis. Donec tempor tellus a enim vehicula
              tincidunt. Nulla id auctor velit. Curabitur non accumsan mi.
            </Typography>
            <Typography type="body" gutterBottom>
              Suspendisse hendrerit dignissim tempus. Morbi faucibus mi in
              egestas tincidunt. Donec efficitur, neque et sodales bibendum,
              magna metus convallis nibh, at tincidunt mi nisl et sapien. Nam
              porta porta purus a egestas. Phasellus tortor arcu, mollis et leo
              vel, pretium sollicitudin nulla. Etiam sagittis enim ex, vel
              dignissim elit aliquet sit amet. Nam id fringilla orci, vel
              dapibus tellus. Morbi pellentesque diam sed urna pharetra, et
              dictum tortor efficitur. Vestibulum faucibus efficitur turpis at
              faucibus. Morbi hendrerit, mi et mattis tempus, libero elit
              finibus sem, ut pharetra dolor tortor id enim. Donec fermentum
              urna eu purus vulputate auctor. Quisque faucibus est sem. Integer
              fringilla ipsum nec blandit ullamcorper. Maecenas iaculis tellus
              ac velit scelerisque, nec luctus urna placerat. Praesent
              scelerisque, dui eu condimentum pulvinar, mi enim dictum erat, vel
              sodales eros ex non ante. Pellentesque habitant morbi tristique
              senectus et netus et malesuada fames ac turpis egestas.
            </Typography>
            <Typography type="body" gutterBottom>
              Are you sure you want to perform this action? This is a permanent
              action. Lorem ipsum dolor sit amet colon! Ipsum dolor! Proceed
              with caution.
            </Typography>
          </Modal>
        </div>
      </Paper>
    );
  }
}

const styles = () => ({
  section: {
    marginBottom: "40px",
  },
});

export default withStyles(styles, { name: "ModalExample" })(ModalExample);
