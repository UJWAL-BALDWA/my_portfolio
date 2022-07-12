import "./Footer.css";
import { Link } from "react-router-dom";

import React from 'react';
import { FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTag, FaUser, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="Me">Contact Me</div>

          <div className="Name">
            <FaUser size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p> UJWAL BALDWA </p>
            </div>
          </div>

          <div className="Profession">
            <FaTag size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p> Electronics Engg & Web Developer</p>
            </div>
          </div>

          <div className="Contact">
            <a href="tel:+917022874220">
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
            <div>
              <a href="tel:+917022874220">
                <p> +91-7022874220 </p>
              </a>
            </div>
          </div>

          <div className="location">
            <a href="https://www.google.com/maps/dir//16.1880972,77.3463658/@16.1880508,77.3462861,20z">
              <FaHome
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
            <div>
              <p> 1-4-89/7, </p>
              <p> IB Road, S.R.G colony, </p>
              <p> Raichur - 584101 </p>
            </div>
          </div>
          <div className="Mail">
            <a href="mailto:ujwalhb08@gmail.com">
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
            <div>
              <p>
                <a href="mailto:ujwalhb08@gmail.com">ujwalhb08@gmail.com</a>
              </p>
            </div>
          </div>
          <div className="Social">
            <a href="https://www.instagram.com/invites/contact/?i=3eq7j4v319ck&utm_content=ffy7g0v">
              <FaInstagram
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>

            <a href="https://github.com/UJWAL-BALDWA">
              <FaGithub
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>

            <a href="">
              <FaWhatsapp
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
                number="+91-7022874220"
              />
            </a>

            <a href="https://www.linkedin.com/in/ujwal-baldwa-02ab521a2">
              <FaLinkedin
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
          </div>
        </div>

        <div className="footer-right">
          <div class="Feedback">Feedback</div>
          <form>
            <div class="row">
              <div class="col-25">
                <label for="name">Name</label>
              </div>
              <div class="col-75">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name.."
                />
              </div>
            </div>
            <div class="row">
              <div class="col-25">
                <label for="mail">Email:</label>
              </div>
              <div class="col-75">
                <input
                  type="text"
                  id="mail"
                  name="mail"
                  placeholder="xyz@gmail.com"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-25">
                <label for="subject">Subject:</label>
              </div>
              <div class="col-75">
                <textarea
                  id="subject"
                  name="subject"
                  placeholder="Write something.."
                ></textarea>
              </div>
            </div>
            <div class="row">
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Footer;