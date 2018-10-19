import React from "react";
import Paper from "elevate-ui/Paper";
import Typography from "elevate-ui/Typography";
import Accordion from "elevate-ui/Accordion";
import {
  singleOpen,
  preventClose,
  combineReducers,
} from "elevate-ui/Accordion/state-reducers";

const items = [
  {
    title: "Accordion Title 1",
    contents: (
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem elit,
        commodo vitae hendrerit eu, luctus nec ipsum. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Etiam commodo, erat ut tempus
        rhoncus, felis est dapibus odio, vitae vestibulum ligula libero in
        magna. Aenean aliquet convallis feugiat. Nullam diam est, fringilla at
        ex eget, molestie scelerisque augue. Nam nibh erat, tempor eu
        pellentesque semper, auctor at ipsum. Proin tristique, sem sit amet
        suscipit vulputate, libero tortor dignissim purus, et pretium tortor
        lectus a orci. Phasellus imperdiet enim ligula, sit amet congue enim
        tempor sed. Fusce pretium purus vel felis egestas venenatis. In et
        lectus ut risus pulvinar porta. Sed a urna suscipit, posuere erat et,
        volutpat dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed lorem elit, commodo vitae hendrerit eu, luctus nec ipsum. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo, erat
        ut tempus rhoncus, felis est dapibus odio, vitae vestibulum ligula
        libero in magna. Aenean aliquet convallis feugiat. Nullam diam est,
        fringilla at ex eget, molestie scelerisque augue. Nam nibh erat, tempor
        eu pellentesque semper, auctor at ipsum. Proin tristique, sem sit amet
        suscipit vulputate, libero tortor dignissim purus, et pretium tortor
        lectus a orci. Phasellus imperdiet enim ligula, sit amet congue enim
        tempor sed. Fusce pretium purus vel felis egestas venenatis. In et
        lectus ut risus pulvinar porta. Sed a urna suscipit, posuere erat et,
        volutpat dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed lorem elit, commodo vitae hendrerit eu, luctus nec ipsum. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo, erat
        ut tempus rhoncus, felis est dapibus odio, vitae vestibulum ligula
        libero in magna. Aenean aliquet convallis feugiat. Nullam diam est,
        fringilla at ex eget, molestie scelerisque augue. Nam nibh erat, tempor
        eu pellentesque semper, auctor at ipsum. Proin tristique, sem sit amet
        suscipit vulputate, libero tortor dignissim purus, et pretium tortor
        lectus a orci. Phasellus imperdiet enim ligula, sit amet congue enim
        tempor sed. Fusce pretium purus vel felis egestas venenatis. In et
        lectus ut risus pulvinar porta. Sed a urna suscipit, posuere erat et,
        volutpat dolor.
      </div>
    ),
  },
  {
    title: "Accordion Title 2",
    contents: (
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem elit,
        commodo vitae hendrerit eu, luctus nec ipsum. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Etiam commodo, erat ut tempus
        rhoncus, felis est dapibus odio, vitae vestibulum ligula libero in
        magna. Aenean aliquet convallis feugiat. Nullam diam est, fringilla at
        ex eget, molestie scelerisque augue. Nam nibh erat, tempor eu
        pellentesque semper, auctor at ipsum. Proin tristique, sem sit amet
        suscipit vulputate, libero tortor dignissim purus, et pretium tortor
        lectus a orci. Phasellus imperdiet enim ligula, sit amet congue enim
        tempor sed. Fusce pretium purus vel felis egestas venenatis. In et
        lectus ut risus pulvinar porta. Sed a urna suscipit, posuere erat et,
        volutpat dolor.
      </div>
    ),
  },
  {
    title: "Accordion Title 3",
    contents: (
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem elit,
        commodo vitae hendrerit eu, luctus nec ipsum. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Etiam commodo, erat ut tempus
        rhoncus, felis est dapibus odio, vitae vestibulum ligula libero in
        magna. Aenean aliquet convallis feugiat. Nullam diam est, fringilla at
        ex eget, molestie scelerisque augue. Nam nibh erat, tempor eu
        pellentesque semper, auctor at ipsum. Proin tristique, sem sit amet
        suscipit vulputate, libero tortor dignissim purus, et pretium tortor
        lectus a orci. Phasellus imperdiet enim ligula, sit amet congue enim
        tempor sed. Fusce pretium purus vel felis egestas venenatis. In et
        lectus ut risus pulvinar porta. Sed a urna suscipit, posuere erat et,
        volutpat dolor.
      </div>
    ),
  },
  {
    title: "Accordion Title 4",
    contents: (
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem elit,
        commodo vitae hendrerit eu, luctus nec ipsum. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Etiam commodo, erat ut tempus
        rhoncus, felis est dapibus odio, vitae vestibulum ligula libero in
        magna. Aenean aliquet convallis feugiat. Nullam diam est, fringilla at
        ex eget, molestie scelerisque augue. Nam nibh erat, tempor eu
        pellentesque semper, auctor at ipsum. Proin tristique, sem sit amet
        suscipit vulputate, libero tortor dignissim purus, et pretium tortor
        lectus a orci. Phasellus imperdiet enim ligula, sit amet congue enim
        tempor sed. Fusce pretium purus vel felis egestas venenatis. In et
        lectus ut risus pulvinar porta. Sed a urna suscipit, posuere erat et,
        volutpat dolor.
      </div>
    ),
  },
];

const AccordionExample = () => (
  <Paper>
    <Typography type="heading3" gutterBottom>
      Default Accordion
    </Typography>
    <Accordion
      items={items}
      style={{ marginTop: "16px", marginBottom: "32px" }}
    />

    <Typography type="heading3" gutterTop gutterBottom>
      State Reducer: singleOpen
    </Typography>
    <Typography type="body" gutterBottom>
      Only allows one accordion panel to be open at a time.
    </Typography>
    <Accordion
      items={items}
      stateReducer={singleOpen}
      style={{ marginTop: "16px", marginBottom: "32px" }}
    />

    <Typography type="heading3" gutterTop gutterBottom>
      State Reducer: preventClose
    </Typography>
    <Typography type="body" gutterBottom>
      Requires at least one accordion panel to be open.
    </Typography>
    <Accordion
      items={items}
      stateReducer={preventClose}
      style={{ marginTop: "16px", marginBottom: "32px" }}
    />

    <Typography type="heading3" gutterTop gutterBottom>
      State Reducer: combineReducers
    </Typography>
    <Typography type="body" gutterBottom>
      Combination of the singleOpen and preventClose reducers.
    </Typography>
    <Accordion
      items={items}
      stateReducer={combineReducers(singleOpen, preventClose)}
      style={{ marginTop: "16px" }}
    />
  </Paper>
);

export default AccordionExample;
