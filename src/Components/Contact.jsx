import React, {useState, useRef} from 'react'
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
import axios from 'axios';



function Contact() {
  const formRef = useRef(null)
  const scriptURL = 'https://script.google.com/macros/s/AKfycbxB8F35w9chvAOYg0c7WTIAGGm0DIkZhI3Cj416wet-FbQ7LoyZi6q_JUWEHCf_PjO5/exec'

  const navigate = useNavigate()
  
const Envoyer= async (e)=>{
  e.preventDefault()
    fetch(scriptURL, {
      method: 'POST', 
      body: new FormData(formRef.current),

  })
  await Swal.fire('Votre message a été envoyé avec succèes')
  navigate("/Home");

}
function Submit(e) {
  const formEle = document.querySelector("form");
  const formDatab = new FormData(formEle);
  fetch(
    "https://script.google.com/macros/s/AKdycbxUX4dy2QEQ7r9TwrSo9vAHydDXv4VwtEDUpdCifXaEecIH2bWHQSnFWtd9NdNIUVGDdQ/exec",
    {
      method: "POST",
      body: formDatab
    }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}




    return(
        <>
    
    <section id="contact" className="contact">
      <div className="container">

        <div className="section-title">
          <h2>Contact</h2>
        </div>

        <div className="row" >

          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>Ain sbaa, casablanca morocco</p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>mohammed.gouali@gmail.com</p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+212 611800740</p>
              </div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26586.49589335787!2d-7.549152630112506!3d33.59720868998877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cc9b5ed39c01%3A0x4db6f1381ccf8d63!2zQcOvbiBTZWJhw6IsIENhc2FibGFuY2E!5e0!3m2!1sen!2sma!4v1692441258110!5m2!1sen!2sma"  style={{border:0, width: "100%", height: "290px"}}  allowFullScreen></iframe>
            </div>

          </div>

          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form ref={formRef} onSubmit={Envoyer}  className="php-email-form">
              <div className="row">
                <div className="form-group col-md-6">
                  <label >Nom</label>
                  <input type="text" name="Nom"  id="Nom" className="form-control"  required/>
                </div>
                <div className="form-group col-md-6">
                  <label > Email</label>
                  <input type="email" className="form-control" name="adresse" id="adresse" required/>
                </div>
              </div>
              <div className="form-group">
                <label >Téléphone</label>
                <input type="text" className="form-control" name="telephone" id="telephone" required/>
              </div>
              <div className="form-group">
                <label >Message</label>
                <textarea className="form-control" id="message" name="message" rows="10" required></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit" name="submit" >Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>
      
        </>
    )
}


export default Contact
