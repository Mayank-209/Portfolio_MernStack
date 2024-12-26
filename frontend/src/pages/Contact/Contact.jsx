import React from "react";
import "./Contact.css";
import {BsLinkedin,BsGithub} from 'react-icons/bs'

const Contact = () => {
  return (
    <>
      <div className="contact" id="con">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <img
                    className="image"
                    src="https://img.freepik.com/free-vector/contact-us-button_78370-3753.jpg"
                    alt="Contact"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="card2 d-flex card border-0 px-4 py-5">
                <div className="row">
                  <div className="row">
                    <h6>Contact With: 
                      <BsLinkedin color="#0077B5" className="ms-2" size={30}/>
                      <BsGithub color="black" className="ms-2" size={30}/>
                    </h6>
                  </div>

                  <div className="row px-3 mb-4">
                    <div className="line" />
                    <small className="or text-center">OR</small>
                    <div className="line" />
                    <div className="row px-3">
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your Name"
                        className="mb-3"
                      />
                    </div>
                    <div className="row px-3">
                      <input
                        type="text"
                        name="email"
                        placeholder="Enter your Email address"
                        className="mb-3"
                      />
                    </div>
                    <div className="row px-3">
                      <textarea
                        type="text"
                        name="msg"
                        placeholder="Write your Message"
                        className="mb-3"
                      />
                    </div>
                    <div className="row px-3">
                      <button className="button" type="submit">
                        SEND MESSAGE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
