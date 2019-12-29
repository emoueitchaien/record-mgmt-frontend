import React, { Component } from "react";
import {
  Radio,
  RadioGroup,
  Typography,
  FormControlLabel,
  Fab,
  TextField
} from "@material-ui/core";

import Results from './Results';
import axios from "axios";

class Search extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.transferData = this.transferData.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

    this.state = {
      search: "1",
      productId: "",
      productName: "",
      userName: "",
      results: []
    };
  }
  handleChange(e) {
    this.setState({
      search: e.target.value
    });
  }
  handleInput = (input) => (event) => {
    this.setState({
      [input]: event.target.value
    });
  };
  handleReset = () => {
    this.setState({
      search: "1",
      productId: "",
      productName: "",
      userName: "",
      results:[]
    });
  };
  transferData(data) {
    this.setState({
      results: data
    });
  }
  
  handleSearch = () => {
    const priceSelector = this.state.search === "1" ? "sp" : "cp";
    const nameSelector = this.state.userName ? this.state.userName : "null";

    if (this.state.productId) {
      axios
        .get(
          "https://record-mgmt-backend.herokuapp.com/" +
            priceSelector +
            "/" +
            this.state.productId +
            "&" +
            nameSelector
        )
        .then((res) => this.transferData(res.data));
    } else {
      axios
        .get("https://record-mgmt-backend.herokuapp.com/" + priceSelector + "/")
        .then((res) => this.transferData(res.data));
    }
  };
  handleDelete = (id) => {
    const priceSelector = this.state.search === "1" ? "sp" : "cp";

    axios
      .delete("https://record-mgmt-backend.herokuapp.com/" + priceSelector + "/" + id)
      .then(this.setState({results: this.state.results.filter(element => element._id !== id)}))
      .catch((err) => window.alert(err));
  }  


  render(
    handleUserLabel = this.state.search === "0"
      ? "Merchant Name"
      : "Customer Name",
  ) {
    return (
      <React.Fragment>
        <div style={style}>
          <Typography>Choose Your Area to Search</Typography>
          <RadioGroup defaultValue="1" onChange={this.handleChange}>
            <FormControlLabel
              value="1"
              control={<Radio color="primary" />}
              label="Exports"
            />
            <FormControlLabel
              value="0"
              control={<Radio color="primary" />}
              label="Imports"
            />
          </RadioGroup>
        </div>
        <form style={style} autoComplete="off">
          <Typography variant="h4">Product Details</Typography>
          <TextField
            label="Product ID"
            variant="outlined"
            id="outlined-size-normal"
            onChange={this.handleInput("productId")}
            value={this.state.productId}
          />
          <TextField
            label="Product Name"
            style={inputStyle}
            variant="outlined"
            id="outlined-size-normal"
            onChange={this.handleInput("productName")}
            value={this.state.productName}
          />
          <Typography style={{ marginTop: 20 }} variant="h4">
            User Details
          </Typography>
          <TextField
            label={handleUserLabel}
            variant="outlined"
            id="outlined-size-normal"
            onChange={this.handleInput("userName")}
            value={this.state.userName}
          />
        </form>
        <Fab
          onClick={this.handleSearch}
          style={style}
          color="primary"
          variant="extended"
        >
          Search
        </Fab>
        <Fab
          onClick={this.handleReset}
          style={style}
          color="primary"
          variant="extended"
        >
          Reset
        </Fab>
        <br />
        <br />
        <br />
        <Results results={this.state.results} handleDelete={this.handleDelete} search={this.state.search} />
      </React.Fragment>
    );
  }
}

const style = {
  marginLeft: 30,
  marginTop: 20
};
const inputStyle = {
  marginLeft: 30
};

export default Search;
