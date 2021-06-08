import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
// import Button from "@material-ui/core/Button";
import classes from "./Left.module.css";
import { useForm } from "react-hook-form";
import { ResumeContext } from "../../contexts/ResumeContext";

function Header() {
  const { content, updateHeaderData, removeFakeData } = useContext(
   ResumeContext
  );

  // const { ref, ...rest } = register('red')
  // const onSubmit = (data) => {
  //   removeFakeData();
  //   updateHeaderData(data);
  // };

  return (
    <div className="">
      <h2>Header</h2>
      <form
        className={classes.formStyle}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Full Name"
          name="name"
          variant="outlined"
          defaultValue={content.header.name}
          
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="Address"
          name="address"
          variant="outlined"
          defaultValue={content.header.address}
          
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="City"
          name="city"
          variant="outlined"
          defaultValue={content.header.city}
          
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="State"
          name="state"
          variant="outlined"
          defaultValue={content.header.state}
          
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="Zip Code"
          name="zip"
          variant="outlined"
          defaultValue={content.header.zip}
          
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="Phone"
          name="phone"
          variant="outlined"
          defaultValue={content.header.phone}
          
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="E-mail"
          name="email"
          variant="outlined"
          defaultValue={content.header.email}
                    style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-multiline-static"
          label="Summary"
          name="summary"
          multiline
          rows={7}
          variant="outlined"
          defaultValue={content.header.summary}
          
          style={{
            marginTop: 20,
            marginBottom: 15,
            marginLeft: 8,
            marginRight: 8,
          }} 
        />
    
      </form>
    </div>
  );
}

export default Header;