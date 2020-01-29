import React from "react";
import "./compStyle.css";
import Card from "react-bootstrap/Card";

const Service = () => {
  return (
    <div className="service-wrapper">
      <img
        src="https://pngimage.net/wp-content/uploads/2018/06/red-book-png-3.png"
        alt="Service Logos not found"
        height="125px"
        width="125px"
      />
      <h3>Our Services</h3>
      <br />
      <br />
      <div className="service-button">
        <div className="service-button-row-01">
          <Card style={{ width: "18rem" }} className="service-button-single">
            <Card.Img
              variant="top"
              src="https://s3-ap-south-1.amazonaws.com/blogmindler/bloglive/wp-content/uploads/2017/01/06135158/Blog-4.3-53-770x479.png"
            />
            <Card.Body>
              <Card.Title>O Levels</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <br></br>
          <Card style={{ width: "18rem" }} className="service-button-single">
            <Card.Img
              variant="top"
              src="https://s3-ap-south-1.amazonaws.com/blogmindler/bloglive/wp-content/uploads/2017/01/06135158/Blog-4.3-53-770x479.png"
            />
            <Card.Body>
              <Card.Title>A Levels</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="service-button-row-02">
          <Card style={{ width: "18rem" }} className="service-button-single">
            <Card.Img
              variant="top"
              src="https://seeklogo.com/images/F/fbise-logo-D79E897BBC-seeklogo.com.png"
              height="179px"
            />
            <Card.Body>
              <Card.Title>Matric</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <br></br>
          <Card style={{ width: "18rem" }} className="service-button-single">
            <Card.Img
              variant="top"
              src="https://seeklogo.com/images/F/fbise-logo-D79E897BBC-seeklogo.com.png"
              height="179px"
              width="50px"
            />
            <Card.Body>
              <Card.Title>FSC</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Service;
