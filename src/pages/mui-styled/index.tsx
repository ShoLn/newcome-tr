// 試著將mui-sx所寫的樣式調整到這，並「限定」在styled裡面撰寫樣式
// https://www.figma.com/file/UOpGWiVHoAahQzoF9O8kVm/General-Cloud?node-id=483%3A27266

import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";

const StyledWrapper = styled("div")(({ theme }) => ({
  // !!!
  // Put your style only here.
  // !!!
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",

  ".paper": {
    width: "345px",
    height: "387px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  ".title-wrapper": {
    padding: "18px 77px 18px 24px",
    height: "72px",
    boxShadow: "0 1px 0 0 #F3F2F1",
  },

  ".form": {
    width: "272px",
    height: "239px",
    marginLeft: "24px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    ".required": {
      color: "red",
    },
    ".user-input": {
      marginTop: theme.spacing(1),
    },
  },

  ".action": {
    height: "76px",
  },

  ".cancel": {
    color: "secondary",
    width: "74px",
    height: "36px",
    margin: "20px 0px 20px 179px",
    padding: "10px 12px",
    fontSize: "16px",
    letterSpacing: "0.16px",
  },

  ".save": {
    bgcolor: "primary",
    width: "60px",
    height: "36px",
    marginLeft: "8px",
    fontSize: "16px",
    letterSpacing: "0.16px",
  },
}));

const MuiStyledPage = () => {
  return (
    <StyledWrapper>
      <Paper className="paper">
        <Paper className="title-wrapper">
          <Typography className="title" variant="h1">
            New account
          </Typography>
        </Paper>

        <Box className="form" component="form">
          {/* Input fields */}
          <Field id="user-name" text="Name" placeholder="Please enter" />
          <Field id="user-email" text="Email" placeholder="Please enter" />
          <Field id="user-phone" text="Phone" placeholder="Please enter" />
        </Box>

        <Box className="actions">
          <Button className="cancel" variant="outlined" color="inherit">
            Cancel
          </Button>
          <Button className="save" variant="contained">
            Save
          </Button>
        </Box>
      </Paper>
    </StyledWrapper>
  );
};

type TypeFieldProp = {
  id:string,
  text:string,
  placeholder:string
}
const Field = ({ id, text, placeholder }:TypeFieldProp) => {
  return (
    // <Box className="field">
    //   <InputLabel htmlFor={id}>
    //     {text}&nbsp;
    //     <span className="required">*</span>
    //   </InputLabel>
    //   <TextField
    //     id={id}
    //     size="small"
    //     variant="outlined"
    //     placeholder={placeholder}
    //     fullWidth
    //   />
    // </Box>
    <Box className="field">
      <Typography id={id} variant="h2">
        {text}&nbsp;
        <span className="required">*</span>
      </Typography>
      <TextField
        className="user-input"
        id={id}
        size="small"
        variant="outlined"
        placeholder={placeholder}
        fullWidth
      />
    </Box>
  );
};

export default MuiStyledPage;
// **樣式完成後試著將此檔案副檔名改成.tsx並修改型別錯誤。
