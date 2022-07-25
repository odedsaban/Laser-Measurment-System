import React from "react";

//Material UI
import Grid from "@material-ui/core/Grid";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import Button from "@material-ui/core/Button";
import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  TextField,
} from "@material-ui/core";
import useStyles from "./styles";
import { useState } from "react";
import axios from "../../axios";
import { useAlert } from "react-alert"

function Form() {
  const classes = useStyles();
  const alert = useAlert();

  //state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    city: "",
    organization: "",
    role: "",
    permission: "watcher",
  });

  const handlePermissionChange = (event) => {
    setFormData({ ...formData, permission: event.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // axios.post("http://localhost:5050/api/registerNewUser", formData);
    try {
      const { status } = await axios.post("/api/registerNewUser", formData);
      if (status === 200) {
        // history.push("/");
        alert.success("User successfully added");
      }
    } catch (error1) {
      alert.error("Error! try to refill the fields");
    }
  };

  return (
    <form noValidate onSubmit={handleSubmit}>
      <Box mt={2}>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6} md={6}>
            <TextField
              fullWidth
              placeholder="שם פרטי"
              label="שם פרטי:"
              color="primary"
              type="text"
              variant="filled"
              style={{ direction: "rtl" }}
              InputLabelProps={{
                classes: { root: classes.labelRoot, shrink: classes.shrink },
              }}
              onChange={(event) => {
                setFormData({ ...formData, firstName: event.target.value });
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField
              fullWidth
              color="primary"
              required
              placeholder="שם משפחה"
              label="שם משפחה:"
              variant="filled"
              type="text"
              style={{ direction: "rtl" }}
              InputLabelProps={{
                classes: { root: classes.labelRoot, shrink: classes.shrink },
              }}
              onChange={(event) => {
                setFormData({ ...formData, lastName: event.target.value });
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              fullWidth
              required
              placeholder="כינוי"
              label="כינוי:"
              variant="filled"
              type="text"
              style={{ direction: "rtl" }}
              InputLabelProps={{
                classes: { root: classes.labelRoot, shrink: classes.shrink },
              }}
              onChange={(event) => {
                setFormData({ ...formData, username: event.target.value });
              }}
            />
          </Grid>
          <Grid xs={12} sm={6} item md={4}>
            <TextField
              fullWidth
              required
              placeholder="מייל"
              label="מייל:"
              variant="filled"
              type="email"
              style={{ direction: "rtl" }}
              InputLabelProps={{
                classes: { root: classes.labelRoot, shrink: classes.shrink },
              }}
              onChange={(event) => {
                setFormData({ ...formData, email: event.target.value });
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              fullWidth
              required
              placeholder="עיר"
              label="עיר:"
              variant="filled"
              style={{ direction: "rtl" }}
              InputLabelProps={{
                classes: { root: classes.labelRoot, shrink: classes.shrink },
              }}
              onChange={(event) => {
                setFormData({ ...formData, city: event.target.value });
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField
              fullWidth
              required
              placeholder="ארגון"
              label="ארגון:"
              variant="filled"
              style={{ direction: "rtl" }}
              InputLabelProps={{
                classes: { root: classes.labelRoot, shrink: classes.shrink },
              }}
              onChange={(event) => {
                setFormData({ ...formData, organization: event.target.value });
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <TextField
              fullWidth
              required
              placeholder="תפקיד"
              label="תפקיד:"
              variant="filled"
              style={{ direction: "rtl" }}
              InputLabelProps={{
                classes: { root: classes.labelRoot, shrink: classes.shrink },
              }}
              onChange={(event) => {
                setFormData({ ...formData, role: event.target.value });
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <FormControl component="fieldset">
              <FormLabel component="legend">הרשאה:</FormLabel>
              <RadioGroup
                aria-label="הרשאה"
                name="הרשאה"
                value={formData.permission}
                onChange={handlePermissionChange}
              >
                <FormControlLabel
                  value="admin"
                  control={<Radio color="primary" />}
                  label="מנהל"
                  className={classes.blue}
                />
                <FormControlLabel
                  value="editor"
                  control={<Radio color="primary" />}
                  label="עורך"
                />
                <FormControlLabel
                  value="watcher"
                  control={<Radio color="primary" />}
                  label="צופה"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              className="regBtn blueBtn"
              size="large"
              type="submit"
              
            ><PersonAddIcon /> צור משתמש</Button>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
}

export default Form;
