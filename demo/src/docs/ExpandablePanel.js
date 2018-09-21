import React from "react";

import Paper from "elevate-ui/Paper";
import Typography from "elevate-ui/Typography";
import ExpandablePanel from "elevate-ui/ExpandablePanel";

const ExpandablePanelExample = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
}) => (
  <Paper>
    <div>
      {" "}
      <Typography type="title">{`<ExpandablePanel />`}</Typography>
      <ExpandablePanel title="Expandable Panel Title">
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
      </ExpandablePanel>
    </div>
    <div>
      <Typography type="title">{`<ExpandablePanel /> With ExpandablePanel as children`}</Typography>
      <ExpandablePanel>
        <ExpandablePanel title="panel 1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem
          elit, commodo vitae hendrerit eu, luctus nec ipsum. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Etiam commodo, erat ut tempus
          rhoncus, felis est dapibus odio, vitae vestibulum ligula libero in
          magna. Aenean aliquet convallis feugiat. Nullam diam est, fringilla at
          ex eget, molestie scelerisque augue. Nam nibh erat, tempor eu
          pellentesque semper, auctor at ipsum. Proin tristique, sem sit amet
          suscipit vulputate, libero tortor dignissim purus, et pretium tortor
          lectus a orci. Phasellus imperdiet enim ligula, sit amet congue enim
          tempor sed. Fusce pretium purus vel felis egestas venenatis. In et
          lectus ut risus pulvinar porta. Sed a urna suscipit, posuere erat et,
          volutpat dolor.
        </ExpandablePanel>
        <ExpandablePanel title="panel 2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem
          elit, commodo vitae hendrerit eu, luctus nec ipsum. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Etiam commodo, erat ut tempus
          rhoncus, felis est dapibus odio, vitae vestibulum ligula libero in
          magna. Aenean aliquet convallis feugiat. Nullam diam est, fringilla at
          ex eget, molestie scelerisque augue. Nam nibh erat, tempor eu
          pellentesque semper, auctor at ipsum. Proin tristique, sem sit amet
          suscipit vulputate, libero tortor dignissim purus, et pretium tortor
          lectus a orci. Phasellus imperdiet enim ligula, sit amet congue enim
          tempor sed. Fusce pretium purus vel felis egestas venenatis. In et
          lectus ut risus pulvinar porta. Sed a urna suscipit, posuere erat et,
          volutpat dolor.
        </ExpandablePanel>
        <ExpandablePanel title="panel 3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem
          elit, commodo vitae hendrerit eu, luctus nec ipsum. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Etiam commodo, erat ut tempus
          rhoncus, felis est dapibus odio, vitae vestibulum ligula libero in
          magna. Aenean aliquet convallis feugiat. Nullam diam est, fringilla at
          ex eget, molestie scelerisque augue. Nam nibh erat, tempor eu
          pellentesque semper, auctor at ipsum. Proin tristique, sem sit amet
          suscipit vulputate, libero tortor dignissim purus, et pretium tortor
          lectus a orci. Phasellus imperdiet enim ligula, sit amet congue enim
          tempor sed. Fusce pretium purus vel felis egestas venenatis. In et
          lectus ut risus pulvinar porta. Sed a urna suscipit, posuere erat et,
          volutpat dolor.
        </ExpandablePanel>
      </ExpandablePanel>
    </div>
  </Paper>
);

export default ExpandablePanelExample;
