import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {

  return (
    <div class="p-5" id="contact">
        <h1 class="text-center p-3">CONTACT INFORMATION</h1>
        <div class="container">
          <div class="row align-items-center d-flex  justify-content-center" id="contact-info">
              <div class="col-5 "> 
              
                <ul class="align-middle">

                  <li class="p-2">
                  <i class="material-icons p-2">email</i>
                  <Link to="mailto:niqueseats@gmail.com" style={{ textDecoration: 'none', color: '#f4e9dcv' }}>niqueseats@gmail.com</Link> 
                  </li>

                  <li class="p-2">
                  <p>
                  <i class="material-icons p-2">call</i>
                  407-354-6456</p>
                  </li>

                  <li class="p-2">
                  <p>
                  <i class="material-icons p-2">location_on</i>
                  Orlando, Florida</p>
                  </li>
                </ul>
              </div>

              <div class="col-4">
              <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d56083.89363755942!2d-81.3841312!3d28.5324043!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1647743123566!5m2!1sen!2sus" width="300" height="300" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
              <p id="map-description">Serving the Orlando area</p>
              </div>


          </div>
        </div>




    </div>
   

  );
};

export default Contact;
