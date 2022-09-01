// 試著切出連結左下 New account 頁面
// 你可以額外在任何component加上sx去寫樣式
// https://www.figma.com/file/UOpGWiVHoAahQzoF9O8kVm/General-Cloud?node-id=483%3A27266

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
// import TextField from '@mui/material/TextField'
// import InputLabel from '@mui/material/InputLabel'

const MuiSXPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Paper
        className="paper"
        sx={{
          width: "345px",
          height: "387px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Paper
          className="title-wrapper"
          sx={{
            p: "18px 77px 18px 24px",
            height: "72px",
            boxShadow: "0 1px 0 0 #F3F2F1",
          }}
        >
          <Typography className="title" variant="h1">
            New account
          </Typography>
        </Paper>

        <Box
          className="form"
          component="form"
          sx={{
            width: "272px",
            height: "239px",
            ml: "24px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          {/* Input fields */}
          <Typography className="label" variant="h2">
            Name
            <Box sx={{ display: "inline", color: "red", ml: 1 }}>*</Box>
            <TextField
              placeholder="Please enter"
              size="small"
              fullWidth
              sx={{ mt: 1 }}
            />
          </Typography>
          <Typography className="label" variant="h2">
            Email
            <Box sx={{ display: "inline", color: "red", ml: 1 }}>*</Box>
            <TextField
              placeholder="Please enter"
              size="small"
              fullWidth
              sx={{ mt: 1 }}
              type="email"
            />
          </Typography>
          <Typography className="label" variant="h2">
            Phone
            <Box sx={{ display: "inline", color: "red", ml: 1 }}>*</Box>
            <TextField
              placeholder="Please enter"
              size="small"
              fullWidth
              sx={{ mt: 1 }}
              type="tel"
            />
          </Typography>
        </Box>

        <Box className="actions" sx={{ height: "76px" }}>
          <Button
            variant="outlined"
            sx={{
              color: "secondary",
              width: "74px",
              height: "36px",
              m: "20px 0px 20px 179px",
              p: "10px 12px",
              fontSize: "16px",
              letterSpacing: "0.16px",
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            sx={{
              bgcolor:"primary",
              width: "60px",
              height: "36px",
              ml: "8px",
              fontSize: "16px",
              letterSpacing: "0.16px",
            }}
          >
            Save
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default MuiSXPage;
