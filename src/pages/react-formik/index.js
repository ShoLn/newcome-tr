import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-mui";
import * as Yup from "yup";

// Formik Component 方法
// 表單初始值
const initialValues = {
  email: "",
  password: "",
  userInfo: {
    name: "",
    phone: "",
  },
};

// 提交表單
const onSubmit = (values) => {
  console.log(values);
};

// yup schema 驗證
const validationSchemaSignin = Yup.object({
  email: Yup.string()
    .required("Email is required !!")
    .email("Invalid format !!"),
  password: Yup.string()
    .required("Password is required !!")
    .min(6, "password must greater or equal to 6 words !!"),
  userInfo: Yup.object({
    name: Yup.string().required("Name is required !!"),
    phone: Yup.string()
      .required("Phone is required !!")
      .matches(/^[0-9]{10}$/g, "Invalid format !!"),
  }),
});

function ReactFormikPage() {
  return (
    <Paper
      sx={{
        display: "flex",
        marginTop: 25,
        padding: 5,
        flexDirection: "column",
        alignItems: "center",
        width: "350px",
      }}
    >
      <Avatar sx={{ m: 2, bgcolor: "red" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>

      {/* Formik Component */}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchemaSignin}
        onSubmit={onSubmit}
      >
        <Form>
          <Field
            component={TextField}
            sx={{ mt: 3, mb: 3 }}
            fullWidth
            name="email"
            type="email"
            label="Email"
          />
          <Field
            component={TextField}
            sx={{ mt: 3, mb: 3 }}
            fullWidth
            name="password"
            type="password"
            label="Password"
          />
          <Field
            component={TextField}
            sx={{ mt: 3, mb: 3 }}
            fullWidth
            name="userInfo.name"
            type="text"
            label="Name"
          />
          <Field
            component={TextField}
            sx={{ mt: 3, mb: 3 }}
            fullWidth
            name="userInfo.phone"
            type="text"
            label="Phone"
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
            Sign up
          </Button>
        </Form>
      </Formik>
    </Paper>
  );
}

export default ReactFormikPage;

// // useFormik 方法
// // 表單初始值
// const initialValues = {
//   email: "",
//   password: "",
// };

// // 提交表單
// const onSubmit = (values) => {
//   console.log(values);
// };

// // 驗證涵式
// const validate = (values) => {
//   let errors = {};

//   if (!values.email) {
//     errors.email = "Name is required";
//   } else if (
//     !/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/.test(
//       values.email
//     )
//   ) {
//     errors.email = "Invalid email format";
//   }

//   if (!values.password) {
//     errors.password = "Password is required";
//   } else if (values.password.length <= 6) {
//     errors.password = "Password length must greater or equal to 6";
//   }

//   return errors;
// };

// function ReactFormikPage() {
//   const formik = useFormik({
//     initialValues,
//     onSubmit,
//     validate,
//   });

//   return (
//     <Paper
//       sx={{
//         marginTop: 25,
//         padding: 5,
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         width: "350px",
//       }}
//     >
//       <Avatar sx={{ m: 2, bgcolor: "red" }}>
//         <LockOutlinedIcon />
//       </Avatar>
//       <Typography component="h1" variant="h5">
//         Sign in
//       </Typography>
//       <Box
//         component="form"
//         noValidate
//         sx={{ mt: 1 }}
//         onSubmit={formik.handleSubmit}
//       >
//         <TextField
//           {...formik.getFieldProps("email")}
//           error={Boolean(formik.touched.email && formik.errors.email)}
//           helperText={formik.touched.email ? formik.errors.email : ""}
//           margin="normal"
//           required
//           fullWidth
//           id="email"
//           label="Email Address"
//           name="email"
//           autoComplete="email"
//           autoFocus
//         />
//         <TextField
//           {...formik.getFieldProps("password")}
//           error={Boolean(formik.touched.password && formik.errors.password)}
//           helperText={formik.touched.password ? formik.errors.password : ""}
//           margin="normal"
//           required
//           fullWidth
//           name="password"
//           label="Password"
//           type="password"
//           id="password"
//           autoComplete="current-password"
//         />
//         <FormControlLabel
//           control={<Checkbox value="remember" color="primary" />}
//           label="Remember me"
//         />
//         <Button
//           type="submit"
//           fullWidth
//           variant="contained"
//           sx={{ mt: 3, mb: 2 }}
//         >
//           Sign In
//         </Button>
//       </Box>
//     </Paper>
//   );
// }

// export default ReactFormikPage;
