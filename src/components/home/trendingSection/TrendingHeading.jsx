import React from "react";
import { Row, Col } from "react-bootstrap";
import rArrow from "/Images/cArrow.png";
import { useNavigate } from "react-router-dom";
import "./trendingheading.scss";

const TrendingHeading = () => {
  return (
    <>
      <Row>
        <Col>
          <div>
            <p className="h2 fw-bolder fontsize-trending">
              Trending on BargainFox
            </p>
          </div>
        </Col>

        <Col className="d-flex justify-content-end align-items-center">
          <div className="trending-heading">
            <span className="fontsize-allDeals"> View All Deals</span>
            <img src={rArrow} className="mx-1" />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default TrendingHeading;
