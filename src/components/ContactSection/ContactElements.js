import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import { styled } from "@material-ui/styles";

export const Styles = makeStyles(theme => ({
  container: {
    backgroundColor: "#1b1442",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "15px",
    paddingTop: "25px",
    scrollMarginTop: "75px",
  },

  textField: {
    width: "750px",
    minWidth: "250px",
    margin: "15px auto",
    background: "white !important",
    backgroundColor: "white !important",
    borderRadius: "4px !important",
    "&:hover": {
      backgroundColor: "white !important",
      borderRadius: "4px !important",
    },
  },

  input: {
    backgroundColor: "white",
  },

  button: {
    margin: "15px auto",
    backgroundColor: "white",
    color: "#1b1442",
    width: "240px",
    fontWeight: "bold",
    "&:hover": {
      background: "#D3D3D3",
    },
  },
}));

export const CssTextField = styled(TextField, {
  shouldForwardProp: props => props !== "focusColor",
})(p => ({
  // input label when focused
  "& label.Mui-focused": {
    color: p.focuscolor,
  },
  // focused color for input with variant='filled'
  "& .MuiFilledInput-underline:after": {
    borderBottomColor: p.focuscolor,
  },
}));
