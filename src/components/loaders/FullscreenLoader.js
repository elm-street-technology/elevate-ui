import React from 'react';
import withStyles from 'react-jss';

/* Animated SVG thanks to @sherb at http://samherbert.net/svg-loaders/ */
const LoadingIndicator = ({
  classes,
  error,
  isLoading,
  pastDelay,
  text,
  timedOut,
}) => {
  if (isLoading) {
    // While our other component is loading...
    if (timedOut) {
      // In case we've timed out loading our other component.
      return <div>Loader timed out!</div>;
    } else if (pastDelay) {
      // Display a loading screen after a set delay.
      return (
        <div className={classes.root}>
          <svg
            width="118"
            height="70"
            viewBox="0 0 135 140"
            xmlns="http://www.w3.org/2000/svg"
            fill="#f15953"
          >
            <rect y="10" width="15" height="120" rx="6">
              <animate
                attributeName="height"
                begin="0.5s"
                dur="1s"
                values="120;110;100;90;80;70;60;50;40;140;120"
                calcMode="linear"
                repeatCount="indefinite"
              />
              <animate
                attributeName="y"
                begin="0.5s"
                dur="1s"
                values="10;15;20;25;30;35;40;45;50;0;10"
                calcMode="linear"
                repeatCount="indefinite"
              />
            </rect>
            <rect x="30" y="10" width="15" height="120" rx="6">
              <animate
                attributeName="height"
                begin="0.25s"
                dur="1s"
                values="120;110;100;90;80;70;60;50;40;140;120"
                calcMode="linear"
                repeatCount="indefinite"
              />
              <animate
                attributeName="y"
                begin="0.25s"
                dur="1s"
                values="10;15;20;25;30;35;40;45;50;0;10"
                calcMode="linear"
                repeatCount="indefinite"
              />
            </rect>
            <rect x="60" width="15" height="140" rx="6">
              <animate
                attributeName="height"
                begin="0s"
                dur="1s"
                values="120;110;100;90;80;70;60;50;40;140;120"
                calcMode="linear"
                repeatCount="indefinite"
              />
              <animate
                attributeName="y"
                begin="0s"
                dur="1s"
                values="10;15;20;25;30;35;40;45;50;0;10"
                calcMode="linear"
                repeatCount="indefinite"
              />
            </rect>
            <rect x="90" y="10" width="15" height="120" rx="6">
              <animate
                attributeName="height"
                begin="0.25s"
                dur="1s"
                values="120;110;100;90;80;70;60;50;40;140;120"
                calcMode="linear"
                repeatCount="indefinite"
              />
              <animate
                attributeName="y"
                begin="0.25s"
                dur="1s"
                values="10;15;20;25;30;35;40;45;50;0;10"
                calcMode="linear"
                repeatCount="indefinite"
              />
            </rect>
            <rect x="120" y="10" width="15" height="120" rx="6">
              <animate
                attributeName="height"
                begin="0.5s"
                dur="1s"
                values="120;110;100;90;80;70;60;50;40;140;120"
                calcMode="linear"
                repeatCount="indefinite"
              />
              <animate
                attributeName="y"
                begin="0.5s"
                dur="1s"
                values="10;15;20;25;30;35;40;45;50;0;10"
                calcMode="linear"
                repeatCount="indefinite"
              />
            </rect>
          </svg>
          <div className={classes.text}>{text || 'Loading…'}</div>
        </div>
      );
    } else {
      // Don't flash "Loading..." when we don't need to.
      return null;
    }
  } else if (error) {
    // If we aren't loading, maybe
    return <div>Error! Component failed to load. Try refreshing the page.</div>;
  }
  // This case shouldn't happen... but we'll return null anyways.
  return null;
};

export default withStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: '1',
  },
  text: {
    color: theme.colors.gray700,
    fontSize: '16px',
    fontWeight: '500',
    marginTop: '32px',
  },
}))(LoadingIndicator);
