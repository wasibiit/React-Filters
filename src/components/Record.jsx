import React from "react";
import "../App.css";
import Card from "react-bootstrap/Card";

function Record(props) {
  // console.log(props);
  return (
    <Card id="team" class="pb-5">
      <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
        <div class="mainflip">
          <div class="frontside">
            <div class="card">
              <div class="card-body text-center">
                <h4 class="card-title">{props.record.userName}</h4>
                <h6>{props.record.email}</h6>
                <h6>
                  {props.record.country} | {props.record.ethnicity}
                </h6>
                <h6>
                  {props.record.gender} | {props.record.age}
                </h6>
                <p class="card-text">
                  This is basic card with image on top, title, description and
                  button.
                </p>
                <a href="#" class="btn btn-primary btn-sm">
                  <i class="fa fa-plus" />
                </a>
              </div>
            </div>
          </div>
          <div class="backside">
            <div class="card">
              <div class="card-body text-center mt-4">
                <h6 class="backdis">Name: {props.record.userName}</h6>
                <h6 class="backdis">Email: {props.record.email}</h6>
                <h6 class="backdis">Contact: {props.record.phone}</h6>
                <h6 class="backdis">Address: {props.record.address}</h6>
                <h6 class="backdis">Age: {props.record.age}</h6>
                <h6 class="backdis">Country: {props.record.country}</h6>
                <h6 class="backdis">Ethnicity: {props.record.ethnicity}</h6>
                <h6 class="backdis">Gender: {props.record.gender}</h6>
                <ul class="list-inline">
                  <li class="list-inline-item">
                    <a
                      class="social-icon text-xs-center"
                      target="_blank"
                      href="#"
                    >
                      <i class="fa fa-facebook" />
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a
                      class="social-icon text-xs-center"
                      target="_blank"
                      href="#"
                    >
                      <i class="fa fa-twitter" />
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a
                      class="social-icon text-xs-center"
                      target="_blank"
                      href="#"
                    >
                      <i class="fa fa-skype" />
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a
                      class="social-icon text-xs-center"
                      target="_blank"
                      href="#"
                    >
                      <i class="fa fa-google" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default Record;
