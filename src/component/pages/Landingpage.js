import React from "react";
import "../css/LandingPage.css";
import Assets from "../assets/Assets";
import { useNavigate } from "react-router-dom";

import DefaultLayout from "../defaultLayout/DefaultLayout";
import SliderComponent from "../pages/SliderComponent";
import JobSlider from "./JobSlider";
import BuyCards from "./BuyCards";
import Foot from "../com/Foot"

function LandingPage() {
  const nav = useNavigate();

  const handlebtn = () => {
    nav("/companyRegister");
  };

  return (
    <>
      <div className="landingPage">
        <DefaultLayout />
        <div className="imgs">
          <img src={Assets?.Top}></img>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="header"></div>
          </div>
          <div className="col-12">
            <div className="info-body">
              <div className="col-12">
                <div className="info-body">
                  <div className="row">
                    <div className="col-12">
                      <div className="search_info" style={{ display: "flex" }}>
                        <input
                          className="skills p-2"
                          placeholder="Enter skills / job title"
                        ></input>
                        <input
                          className="University p-2"
                          placeholder="University"
                        ></input>
                        <input
                          className="Locations p-2"
                          placeholder="Locations"
                        ></input>
                        <button className="Search btn btn-primary">
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>

<div className="media">
<div className="header-content">
  <h1>Find Your Next Career Opportunity</h1>
  <p className="tagline">Your gateway to top jobs and opportunities</p>
  <span>Discover new roles that match your skills and ambitions.</span>
  <span>Apply effortlessly and take the next step in your career journey.</span>
  <button className="btn btn-primary">Join Us Today!</button>
</div>
</div>
   


      <div className="head_card">
        <div>
          <p>Provide experienced talent for simplified employee placement.</p>
          <p style={{ fontSize: "15px" }}>
            Streamlining process for efficient workforce integration.
          </p>
        </div>
        <div>
          <button className="text-white btn btn-danger pr-5 pl-5 trynow_btn">
            Try now
          </button>
        </div>
      </div>

      <div className="job_intern">
        <h1>Job</h1>
        <h1>Internship</h1>
      </div>

      <div className="">
          <JobSlider />
      </div>

      <div>
        <h1
          style={{
            fontSize: "18px",
            color: "#707070",
            fontWeight: "normal",
            marginTop: "50px",
          }}
        >
          We're the lead generation agency that can help you grow your business,
          <br /> that covers all your verticles.
        </h1>
      </div>

      <div className="container-fluid mt-5 bg-light p-5 rounded">
        <div className="row text-center">
          <div className="col-6 col-md-2 mb-4">
            <div className="vertical-card">
              <img
                className="edu-img img-fluid"
                src={Assets.Edu}
                alt="Education"
              />
              <h1 className="h5 mt-2">Education</h1>
            </div>
          </div>
          <div className="col-6 col-md-2 mb-4">
            <div className="vertical-card">
              <img
                className="edu-img img-fluid"
                src={Assets.Heath}
                alt="Healthcare"
              />
              <h1 className="h5 mt-2">Healthcare</h1>
            </div>
          </div>
          <div className="col-6 col-md-2 mb-4">
            <div className="vertical-card">
              <img
                className="edu-img img-fluid"
                src={Assets.Reality}
                alt="Realty"
              />
              <h1 className="h5 mt-2">Realty</h1>
            </div>
          </div>
          <div className="col-6 col-md-2 mb-4">
            <div className="vertical-card">
              <img
                className="edu-img img-fluid"
                src={Assets.Gadgets}
                alt="Gadgets"
              />
              <h1 className="h5 mt-2">Gadgets</h1>
            </div>
          </div>
          <div className="col-6 col-md-2 mb-4">
            <div className="vertical-card">
              <img
                className="edu-img img-fluid"
                src={Assets.Sports}
                alt="Sports"
              />
              <h1 className="h5 mt-2">Sports</h1>
            </div>
          </div>
          <div className="col-6 col-md-2 mb-4">
            <div className="vertical-card">
              <img
                className="edu-img img-fluid"
                src={Assets.Hospitality}
                alt="Hospitality"
              />
              <h1 className="h5 mt-2">Hospitality</h1>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div style={{ marginTop: "50px" }}>
          <SliderComponent />
        </div>
      </div>

      <div
        style={{
          backgroundColor: "whitesmoke",
          padding: "30px 40px",
          borderRadius: "20px",
          marginTop: "40px",
        }}
        className="container-fluid"
      >
        <div
          style={{
            padding: "0 15px",
            marginLeft: "10px",
            marginBottom: "10px",
          }}
          className="row section"
        >
          <div className="col-12 col-md-4 mb-4">
            <div className="dm-card d-flex align-items-center">
              <div>
                <h1>Digital Marketing</h1>
                <p className="text-left">
                  We help businesses grow their online presence and reach their
                  target audience through a variety of digital marketing
                  channels, including search engine optimization (SEO),
                  pay-per-click (PPC) advertising, social media marketing, and
                  email marketing.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4 mb-4">
            <div className="dm-card d-flex align-items-center">
              <div>
                <h1>Grow your business</h1>
                <p className="text-left">
                  We provide the strategies and tools you need to grow your
                  business, from increasing brand awareness to generating leads
                  and sales. We work with you to understand your goals and
                  develop a customized marketing plan that will help you achieve
                  them.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4 mb-4">
            <div className="dm-card d-flex align-items-center">
              <div>
                <h1>Branding</h1>
                <p className="text-left">
                  We help businesses create a strong and memorable brand that
                  will resonate with their target audience. We develop branding
                  strategies that include logo design, website development, and
                  social media marketing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

       <div>
        <BuyCards />
       </div>


       <footer>
        <Foot />
       </footer>

  
    </>
  );
}

export default LandingPage;
