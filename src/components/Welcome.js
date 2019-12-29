import React from "react";
import { Typography, Container } from "@material-ui/core";

const style = {
  display: "block",
  padding: 100
};

export default function Welcome() {
  return (
    <Container>
      <Typography style={style} variant="h2" align="center">
        Welcome
        <br />
        I'm Jon Snow and I know everthing you kept record
      </Typography>
    </Container>
  );
}
