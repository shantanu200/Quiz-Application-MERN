import React from "react";
import "../../Style.css";

const Contact = () => {
  return (
    <div className="contact-container">
    <div className="c-container">
      <div className="form-content">
        <div className="left-side">
          <div className="details">
            <i class="fa-solid fa-address-book"></i>
            <div className="topic">Address</div>
            <div className="text-one">Vishwakarma Institute</div>
            <div className="text-two">Bibewadi,Pune</div>
          </div>
          <div className="details">
            <i class="fa-solid fa-phone"></i>
            <div className="topic">Contact</div>
            <div className="text-one">+91-7709493932</div>
          </div>
          <div className="details">
            <i class="fa-solid fa-at"></i>
            <div className="topic">Email</div>
            <div className="text-one">quizzer@edu.com</div>
          </div>
        </div>
        <div className="right-side">
            <div className="topic-text">
                Send Us a Message
            </div>
            <p>If you have any work from me or any types of quries related to my tutorial, you can send me message from here. It's my pleasure to help you.</p>
            <form>
                <div className="input-box">
                    <input type="text" placeholder="Enter Your name" />
                </div>
                <div className="input-box">
                    <input type="text" placeholder="Enter Your email" />
                </div>
                <div className="input-box message-box">
                    <textarea type="text" placeholder="Enter Your Name" />
                </div>
                <div className="button">
                    <input type="button" value="Post Query"/>
                </div>
            </form>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default Contact;
