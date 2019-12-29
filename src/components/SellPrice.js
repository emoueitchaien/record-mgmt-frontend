import React, { Component } from "react";
import Fab from "@material-ui/core/Fab";
import axios from "axios";

//Importing Component
import Input from "./Input";

class SellPrice extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productId: "",
      productName: "",
      quantity: "",
      amount: "",
      userName: "",
      userPno: ""
    };
  }
  //Handling the change
  handleChange = (input) => (event) => {
    this.setState({
      [input]: event.target.value
    });
  };
  handleSumbit = (e) => {
    e.preventDefault();

    const newData = {
      productId: this.state.productId,
      productName: this.state.productName,
      quantity: this.state.quantity,
      amount: this.state.amount,
      userName: this.state.userName,
      userPno: this.state.userPno
    };

    axios
      .post("http://localhost:5000/sp/add", newData)
      .then(alert("Your Data has been added to SellPrice Database"));

      this.setState({
        productId: "",
        productName: "",
        quantity: "",
        amount: "",
        userName: "",
        userPno: ""
      });
  };
  //Handling Reset
  handleReset = e =>{
    e.preventDefault();
    this.setState({
      productId: "",
      productName: "",
      quantity: "",
      amount: "",
      userName: "",
      userPno: ""
    });
  }
  render() {
    return (
      <div>
        <Input type={1} values={this.state} handleChange={this.handleChange} />
        <Fab
          onClick={this.handleSumbit}
          style={style}
          color="primary"
          variant="extended"
        >
          Add
        </Fab>
        <Fab
          onClick={this.handleReset}
          style={{marginLeft:20,width:200}}
          color="primary"
          variant="extended"
        >
          Reset
        </Fab>
      </div>
    );
  }
}

const style = {
  marginLeft: 30,
  width: 200
};

export default SellPrice;
