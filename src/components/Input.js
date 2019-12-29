import React from "react";
import { TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(4),
      width: 200
    }
  },
  titlePos: {
    marginLeft: 30
  }
}));

function Input(props) {
  const classes = useStyle();
  const pageUsername = props.type === 1 ? "Customer Name" : "Merchant Name";
  const pageUserPno = props.type === 1 ? "Customer Pno" : "Merchant Pno";
  const {values,handleChange} = props;
  return (
    <React.Fragment>
      <form className={classes.root} autoComplete="off">
        <Typography variant="h4" className={classes.titlePos}>
          Product Details
        </Typography>
        <TextField
          label="Product ID"
          style={{ width: 130 }}
          variant="outlined"
          id="outlined-size-normal"
          onChange={handleChange('productId')}
          value={values.productId}
        />
        <TextField
          label="Product Name"
          style={{ width: 300 }}
          variant="outlined"
          id="outlined-size-normal"
          onChange={handleChange('productName')}
          value={values.productName}
        />
        <TextField
          label="Quantity"
          variant="outlined"
          placeholder="In KG"
          id="outlined-size-normal"
          onChange={handleChange('quantity')}
          value={values.quantity}
        />
        <TextField
          label="Amount"
          placeholder="Rupees"
          variant="outlined"
          id="outlined-size-normal"
          onChange={handleChange('amount')}
          value={values.amount}
        />
        
        <Typography variant="h4" className={classes.titlePos}>
          User Details
        </Typography>
        <TextField
          label={pageUsername}
          style={{ width: 300 }}
          variant="outlined"
          id="outlined-size-normal"
          onChange={handleChange('userName')}
          value={values.userName}
        />
        <TextField
          label={pageUserPno}
          style={{ width: 300 }}
          variant="outlined"
          id="outlined-size-normal"
          onChange={handleChange('userPno')}
          value={values.userPno}
        />
      </form>
    </React.Fragment>
  );
}

export default Input;
