import { React,  Component } from "react";
import PropTypes from "prop-types";
import { withRouter, Link } from "react-router-dom";

import { auth } from "../../../firebase";

import authentication from "../../../services/authentication";
import EmptyState from "../../EmptyState";
import SideBar from "../../bs_Reusables/SideBar";
import LandingPage from "../../LandingPage";

import { ReactComponent as CabinIllustration } from "../../../illustrations/cabin.svg";
import { ReactComponent as InsertBlockIllustration } from "../../../illustrations/insert-block.svg";

class HomePage extends Component {
  constructor(props) {
    super(props);    
  }

  signInWithEmailLink = () => {
    const { user } = this.props;    

    if (user) {
      return;
    }

    const emailLink = window.location.href;

    if (!emailLink) {
      return;
    }

    if (auth.isSignInWithEmailLink(emailLink)) {
      let emailAddress = localStorage.getItem("emailAddress");

      if (!emailAddress) {
        this.props.history.push("/");

        return;
      }

      authentication
        .signInWithEmailLink(emailAddress, emailLink)
        .then((value) => {
          const user = value.user;
          const displayName = user.displayName;
          const emailAddress = user.email;

          this.props.openSnackbar(
            `Signed in as ${displayName || emailAddress}`
          );
        })
        .catch((reason) => {
          const code = reason.code;
          const message = reason.message;

          switch (code) {
            case "auth/expired-action-code":
            case "auth/invalid-email":
            case "auth/user-disabled":
              this.props.openSnackbar(message);
              break;

            default:
              this.props.openSnackbar(message);
              return;
          }
        })
        .finally(() => {
          this.props.history.push("/");
        });
    }
  };

  render() {
    const { user , userData } = this.props;
 
    if (user) {
      return (
        // logged in page
        <>          
          <SideBar user={user} userData={userData}/>          
          <LandingPage />
          Logged IN
        </>
        
      );
    }

    return (
      <>
        // logged out page 
       Logged OUT
        <LandingPage />
          
      </>
    );
  }

  componentDidMount() {
    this.signInWithEmailLink();
  }
}

HomePage.propTypes = {
  user: PropTypes.object,
};

export default withRouter(HomePage);
