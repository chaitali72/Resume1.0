import React from "react";
import Basic from "../components/Left/Basic";
import Right from "../components/Right/Right";
import "./styles.css";
import ResumeContextProvider from "../contexts/ResumeContext";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import myClasses from "./../components/Left/Left.module.css";
import logo from "../../src/assets/resumelogo.jpeg";
import thumbn from "../../src/assets/resumeTemplate.png";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
function Templates() {
  const useStyles = makeStyles({
    headerLink: {
      color: "#FF8E53 ",
      minWidth: 100,
      marginLeft: 30,
      backgroundColor:'	#D3D3D3',
    },
  });

  const classes = useStyles();

  return (
    <div className="left">
      <div className={myClasses.headerLeft}>
        <Link to="/" style={{ textAlign: "left" }}>
          <img src={logo} alt="logo" className={myClasses.img2} />
        </Link>
      </div>
      <hr className={myClasses.hr2} />
      <h2 className={myClasses.templatesH2}>Templates</h2>
      <div className={myClasses.cards}>
        <div className={myClasses.templateCard}>
          <img src={thumbn} alt="thumbnail" className={myClasses.imgThumb} />
          <Button
            className={classes.headerLink}
            component={Link}
            to="/basic/header">
            The Basic
          </Button>
          <ArrowUpwardIcon />
          <p>Click button to create one!!</p>
        
        </div>
        
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <ResumeContextProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Templates} exact />
            <Route path="/basic" component={Basic} />
          </Switch>
        </BrowserRouter>
        <Right />
      </ResumeContextProvider>
    </div>
  );
}

export default App;