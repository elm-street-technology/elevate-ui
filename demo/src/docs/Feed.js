import React from "react";
import Paper from "elevate-ui/Paper";
import Feed from "elevate-ui/Feed";

import Whatshot from "elevate-ui-icons/Whatshot";
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
                      label: () => <span>See More Updates</span>,
                      onClick() {
                        window.location =
                          "https://github.com/elm-street-technology/elevate-ui/releases";
                      },
                    },
                  ],
                  actions: [
                    {
                      label: () => <span>Learn More</span>,
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
                      label: () => <span>See More Updates</span>,
                      onClick() {
                        window.location =
                          "https://github.com/elm-street-technology/elevate-ui/releases";
                      },
                    },
                  ],
                  actions: [
                    {
                      label: () => <span>Learn More</span>,
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
                      label: () => <span>Learn More</span>,
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

const FeedExample = () => (
  <Paper>
    <Feed content={content} />
  </Paper>
);

export default FeedExample;
