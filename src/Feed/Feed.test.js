import React from "react";
import renderer from "react-test-renderer";

import ThemeProvider from "../ThemeProvider";
import Feed from "./";

import Whatshot from "elevate-ui-icons/Whatshot";
import Cancel from "elevate-ui-icons/Cancel";
import CheckCircle from "elevate-ui-icons/CheckCircle";
import Info from "elevate-ui-icons/Info";

const content = [
  {
    title: "Latest News",
    fetch: () => {
      return new Promise((resolve) => {
        setTimeout(
          () =>
            resolve({
              cards: [
                {
                  title: "Another Great Update!",
                  icon: <Whatshot />,
                  children: <div>elevate-ui v0.22.3 shipped 7 days ago!</div>,
                  secondaryActions: [
                    {
                      label: "Learn More",
                      onClick() {
                        window.location =
                          "https://github.com/elm-street-technology/elevate-ui/releases";
                      },
                    },
                  ],
                  actions: [
                    {
                      label: "Learn More",
                      onClick() {
                        window.location =
                          "https://github.com/elm-street-technology/elevate-ui/commit/7acc1465eebcf0b18d947fae228ec34b77c64dd2";
                      },
                    },
                  ],
                },
                {
                  title: "Elevate UI Update!",
                  icon: <Whatshot />,
                  children: <div>elevate-ui v0.21.2 shipped 14 days ago!</div>,
                  secondaryActions: [
                    {
                      label: "See More Updates",
                      onClick() {
                        window.location =
                          "https://github.com/elm-street-technology/elevate-ui/releases";
                      },
                    },
                    {
                      label: "Elevate UI",
                      onClick() {
                        window.location = "http://elevate-ui.com";
                      },
                    },
                    {
                      label: "Try Elevate",
                      onClick() {
                        window.location = "https://tryelevate.com";
                      },
                    },
                  ],
                  actions: [
                    {
                      label: "Remove",
                      icon: <Cancel />,
                      color: "#ccc",
                      isOutlined: true,
                      onClick() {
                        window.location =
                          "https://github.com/elm-street-technology/elevate-ui/commit/7acc1465eebcf0b18d947fae228ec34b77c64dd2";
                      },
                    },
                    {
                      label: "Approve",
                      icon: <CheckCircle />,
                      color: "secondary",
                      onClick() {
                        window.location =
                          "https://github.com/elm-street-technology/elevate-ui/commit/7acc1465eebcf0b18d947fae228ec34b77c64dd2";
                      },
                    },
                  ],
                },
              ],
            }),
          500
        );
      });
    },
  },
  {
    title: "Tips",
    fetch: () => {
      return new Promise((resolve) => {
        setTimeout(
          () =>
            resolve({
              cards: [
                {
                  title: "Did you know?",
                  icon: <Info />,
                  children: (
                    <div>
                      With elevate-ui you can easily standardize your UI!
                    </div>
                  ),
                  secondaryActions: [],
                  actions: [
                    {
                      label: "Learn More",
                      onClick() {
                        window.location =
                          "https://github.com/elm-street-technology/elevate-ui";
                      },
                    },
                  ],
                },
              ],
            }),
          500
        );
      });
    },
  },
];

const WrappedFeed = (props) => (
  <ThemeProvider>
    <Feed {...props} />
  </ThemeProvider>
);

test("renders without crashing, matches the snapshot", () => {
  const component = renderer.create(<WrappedFeed content={content} />);
  const componentJSON = component.toJSON();
  expect(componentJSON).toMatchSnapshot();
});
