import React from "react";
import Container from "../../container/Container";
import { Link } from "react-router-dom";
import mainLogo from "../../../assets/main-logo.png";

const Navbar = () => {
  return (
    <div>
      <Container>
        <div>
          <div>
            <div>
              <Link to="/">
                <img className="w-10" src={mainLogo} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
