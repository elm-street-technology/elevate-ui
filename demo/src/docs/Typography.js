import React from "react";

import Paper from "elevate-ui/Paper";
import Typography from "elevate-ui/Typography";

const TypographyExample = () => (
  <Paper>
    <Typography type="title">{`<Typography />`}</Typography>
    <hr />
    <Typography type="title" gutterBottom>
      Title
    </Typography>
    <Typography type="heading2" gutterBottom>
      Heading2
    </Typography>
    <Typography type="heading3" gutterBottom>
      Heading3
    </Typography>
    <Typography type="heading4" gutterBottom>
      Heading4
    </Typography>
    <Typography type="heading5" gutterBottom>
      Heading5
    </Typography>
    <Typography type="heading6" gutterBottom>
      Heading6
    </Typography>
    <Typography type="body">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt
      vulputate mi, sit amet elementum arcu rutrum sit amet. Vivamus in semper
      lorem. Nullam et nibh semper, pellentesque est quis, mattis elit. Nullam
      tellus lectus, placerat sit amet arcu eu, placerat condimentum elit.
      Quisque sit amet neque laoreet turpis euismod hendrerit. Curabitur sed
      rutrum metus, ut aliquet arcu. Sed a arcu quis nisi sagittis commodo quis
      ut leo. Aliquam interdum massa augue, a ornare ante mattis consectetur.
      Fusce tempus, quam vel fermentum rutrum, velit risus hendrerit sapien, at
      ornare quam nibh a nulla. Suspendisse dictum venenatis augue, in ultricies
      augue dignissim porttitor. Nullam dictum consequat elit eu dictum. Sed
      imperdiet est ac tempus facilisis.
    </Typography>
  </Paper>
);

export default TypographyExample;
