import React, { Component } from "react";
import axios from "axios";
import { Button, Typography, Container } from "@material-ui/core";

class Calculate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      revenue: 0,
      cpTotal: 0,
      spTotal: 0
    };
  }
  updateState = () => {
    this.setState({ cpTotal: this.state.cpTotal });
    this.setState({ spTotal: this.state.spTotal });
    this.setState({ revenue: this.state.revenue });
  };
  handleClick = () => {
    axios.get("https://record-mgmt-backend.herokuapp.com/cp/total").then((res) =>
      this.setState({ cpTotal: res.data[0].total }, () => {
        this.updateState();
        this.calculate();
      })
    );
    axios.get("https://record-mgmt-backend.herokuapp.com/sp/total").then((res) =>
      this.setState({ spTotal: res.data[0].total }, () => {
        this.updateState();
        this.calculate();
      })
    );
  };
  calculate = () => {
    let revenue = (this.state.cpTotal / this.state.spTotal) * 100;
    this.setState({ revenue: revenue }, () => {
      this.updateState();
    });
  };
  render() {
    return (
      <React.Fragment>
        <Typography variant="h1" align='center'>{this.state.revenue.toFixed(2)}</Typography>
        <Container
        style={style}>
        <Button variant='contained' color="primary"  onClick={this.handleClick}>
          Click
        </Button>
        </Container>
      </React.Fragment>
    );
  }
}

const style = {
  textAlign:'center',
  width:'100%'
}
export default Calculate;
