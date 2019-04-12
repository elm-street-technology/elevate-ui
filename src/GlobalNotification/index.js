// @flow
import React, { Component } from "react";
import Notifications from "./Notifications";

export type $Notification = {
  icon?: any,
  id: string | number,
  message: string,
  timeout?: number, // ms
  title: string,
  type: "error" | "info" | "success" | "warning",
};

type $Props = {
  children: any,
};

type $State = {
  notifications: Array<$Notification>,
};

const GlobalNotification = React.createContext({
  notifications: [],
  dispatchNotification: () => {},
});

export class GlobalNotificationProvider extends Component<$Props, $State> {
  constructor(props: $Props) {
    super(props);

    this.state = {
      notifications: [],
    };
  }

  dispatchNotification = ({
    icon,
    id,
    message,
    timeout,
    title,
    type,
  }: $Notification) => {
    if (this.state.notifications.find((notification) => notification.id === id))
      return null;

    // Assign a unique id to the notification if it wasn't passed in
    if (!id) {
      id = new Date().getTime();
    }

    // Set up timer to automatically dismiss notification after given time
    const notificationExpires = timeout || 6000;
    if (notificationExpires) {
      setTimeout(() => this.expireNotification(id), notificationExpires);
    }

    // Clone the existing state, add the new notification to the end of the array
    const update = [...this.state.notifications].concat([
      ({
        icon,
        id,
        message,
        timeout: notificationExpires,
        title,
        type: type || "warning",
      }: $Notification),
    ]);

    this.setState({ notifications: update });
  };

  expireNotification = (id: number | string) => {
    // Clone the existing state, find the expiring notification and filter it out
    const update = [...this.state.notifications].filter(
      (notification) => notification.id !== id
    );

    this.setState({ notifications: update });
  };

  render() {
    const { notifications } = this.state;
    return (
      <GlobalNotification.Provider
        value={{
          notifications,
          dispatchNotification: this.dispatchNotification,
        }}
      >
        <Notifications notifications={notifications} />
        {this.props.children}
      </GlobalNotification.Provider>
    );
  }
}

export const withGlobalNotification = (Component: React$Element<*>) => (
  props: *
) => (
  <GlobalNotification.Consumer>
    {/* $FlowFixMe */}
    {(globalContext) => <Component {...globalContext} {...props} />}
  </GlobalNotification.Consumer>
);
