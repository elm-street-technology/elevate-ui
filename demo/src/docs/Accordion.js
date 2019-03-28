import React from "react";
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
      <Typography type="body">
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
      </Typography>
    ),
  },
  {
    title: "Accordion Title 2",
    contents: (
      <Typography type="body">
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
      </Typography>
    ),
  },
  {
    title: "Accordion Title 3",
    contents: (
      <Typography type="body">
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
      </Typography>
    ),
  },
  {
    title: "Accordion Title 4",
    contents: (
      <div>
        <iframe
          title="exampleVideo"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/A0FZIwabctw"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    ),
  },
];

const AccordionExample = () => (
  <div>
    <Typography style={{ marginTop: "24px" }} type="heading5">
      Default Accordion
    </Typography>
    <Accordion
      items={items}
      style={{ marginTop: "16px", marginBottom: "32px" }}
    />

    <Typography type="heading5" style={{ marginTop: "80px" }}>
      State Reducer: singleOpen
    </Typography>
    <Typography type="body">
      Only allows one accordion panel to be open at a time.
    </Typography>
    <Accordion
      items={items}
      stateReducer={singleOpen}
      style={{ marginTop: "16px", marginBottom: "32px" }}
    />

    <Typography type="heading5" style={{ marginTop: "80px" }}>
      State Reducer: preventClose
    </Typography>
    <Typography type="body">
      Requires at least one accordion panel to be open.
    </Typography>
    <Accordion
      items={items}
      stateReducer={preventClose}
      style={{ marginTop: "16px", marginBottom: "32px" }}
    />

    <Typography type="heading5" style={{ marginTop: "80px" }}>
      State Reducer: combineReducers
    </Typography>
    <Typography type="body">
      Combination of the singleOpen and preventClose reducers.
    </Typography>
    <Accordion
      items={items}
      stateReducer={combineReducers(singleOpen, preventClose)}
      style={{ marginTop: "16px" }}
    />
  </div>
);

export default AccordionExample;
