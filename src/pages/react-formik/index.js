import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { useFormik } from "formik";

// 表單初始值
const initialValues = {
  email: "",
  password: "",
};

// 提交表單
const onSubmit = (values) => {
  console.log(values);
};

// 驗證涵式
const validate = (values) => {
  let errors = {};

  if (!values.email) {
    errors.email = "Name is required";
  } else if (
    !/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/.test(
      values.email
    )
  ) {
    errors.email = "Invalid email format";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length <= 6) {
    errors.password = "Password length must greater or equal to 6";
  }

  return errors;
};

function ReactFormikPage() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <Paper
      sx={{
        marginTop: 25,
        padding: 5,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "350px",
      }}
    >
      <Avatar sx={{ m: 2, bgcolor: "red" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <Box
        component="form"
        noValidate
        sx={{ mt: 1 }}
        onSubmit={formik.handleSubmit}
      >
        <TextField
          {...formik.getFieldProps("email")}
          error={Boolean(formik.touched.email && formik.errors.email)}
          helperText={formik.touched.email ? formik.errors.email : ""}
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          {...formik.getFieldProps("password")}
          error={Boolean(formik.touched.password && formik.errors.password)}
          helperText={formik.touched.password ? formik.errors.password : ""}
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
      </Box>
    </Paper>
  );
}

export default ReactFormikPage;
