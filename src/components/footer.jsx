import React, { useState } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import "./compStyle.css";
const Footer = props => {
  const { className } = props;
  const [aboutModal, setAboutModal] = useState(false);
  const [careerModal, setCareerModal] = useState(false);

  const aboutToggle = () => setAboutModal(!aboutModal);
  const careerToggle = () => setCareerModal(!careerModal);
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <div className="footer-wrapper">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="6">
              <h5 className="title">Era Institute</h5>
              <p id="footer-desc">
                Providing you best tution services since 2010
              </p>
              <ul>
                <li className="list-unstyled">
                  <a onClick={aboutToggle} href="#!">
                    About Us
                  </a>
                </li>
                <Modal
                  isOpen={aboutModal}
                  toggle={aboutToggle}
                  className={className}
                >
                  <ModalHeader toggle={aboutToggle}>ABOUT US</ModalHeader>
                  <ModalBody>We are the pioneers in tution services</ModalBody>
                  <ModalFooter>
                    <Button color="secondary" onClick={aboutToggle}>
                      Cancel
                    </Button>
                  </ModalFooter>
                </Modal>

                <li className="list-unstyled">
                  <a onClick={careerToggle} href="#!">
                    Careers
                  </a>
                </li>
                <Modal
                  isOpen={careerModal}
                  toggle={careerToggle}
                  className={className}
                >
                  <ModalHeader toggle={careerToggle}>CAREERS</ModalHeader>
                  <ModalBody>
                    Send your CV/Resumè and Cover Letter at{" "}
                    <a href="www.gmail.com">erainstitute512@gmail.com</a>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="secondary" onClick={careerToggle}>
                      Cancel
                    </Button>
                  </ModalFooter>
                </Modal>
              </ul>
            </MDBCol>
            <div className="footer-links">
              <MDBCol md="6">
                <h5 className="title">Links</h5>
                <ul>
                  <li className="list-unstyled">
                    <a href="#!">
                      <FacebookIcon />
                      <InstagramIcon />
                      <TwitterIcon />
                    </a>
                  </li>
                </ul>
              </MDBCol>
            </div>
          </MDBRow>
        </MDBContainer>
      </div>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.MDBootstrap.com"> Era Institute </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
