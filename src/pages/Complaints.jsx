import React, { Fragment } from "react";
import "../static/complaints.css";
import Navbar from "../components/Navbar";

export default function Complaints() {
  return (
    <Fragment>
        <Navbar />
      <div className="complaints">
        <h2>Grievance</h2>
        <div className="complaints_data">
          <div className="complaints_count">
            <ul>
              <li>
                <p>4</p>
                <h3>Total Complaints</h3>
              </li>
              <li>
                <p>3</p>
                <h3>Solved Complaints</h3>
              </li>
              <li>
                <p>2</p>
                <h3>Pending Complaints</h3>
              </li>
            </ul>
          </div>
          <div className="search">
            <div className="bar">
              <input type="search" name="searchbar" id="searchbar" placeholder="Search COmplaint"/>
            </div>
            <div className="filterbtn">
              <button type="submit">Filter</button>
            </div>
          </div>
        </div>
        <div className="complaints_content">
          <div className="box1">
            <div className="content1">
              <p>
                <strong>Complaint No:</strong>20036168
              </p>
              <p>
                <strong>Name :</strong>Kamalesh
              </p>
              <p>
                <strong>Description :</strong>Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Amet esse fugiat voluptas, ullam
                reprehenderit nemo quo expedita cumque animi facere.
              </p>
            </div>
            <div className="content2">
              <p>
                <strong>Complaint Date :</strong>28-11-2024
              </p>
              <p>
                <strong>Status :</strong>Untracked
              </p>
              <button type="submit">View more</button>
            </div>
          </div>

          <div className="box1">
            <div className="content1">
              <p>
                <strong>Complaint No :</strong>20036168
              </p>
              <p>
                <strong>Name:</strong>Kamalesh
              </p>
              <p>
                <strong>Description  :</strong>Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Amet esse fugiat voluptas, ullam
                reprehenderit nemo quo expedita cumque animi facere.
              </p>
            </div>
            <div className="content2">
              <p>
                <strong>Complaint Date :</strong>28-11-2024
              </p>
              <p>
                <strong>Status :</strong>Untracked
              </p>
              <button type="submit">View more</button>
            </div>
          </div>

          <div className="box1">
            <div className="content1">
              <p>
                <strong>Complaint No:</strong>20036168
              </p>
              <p>
                <strong>Name :</strong>Kamalesh
              </p>
              <p>
                <strong>Description :</strong>Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Amet esse fugiat voluptas, ullam
                reprehenderit nemo quo expedita cumque animi facere.
              </p>
            </div>
            <div className="content2">
              <p>
                <strong>Complaint Date :</strong>28-11-2024
              </p>
              <p>
                <strong>Status :</strong>Untracked
              </p>
              <button type="submit">View more</button>
            </div>
          </div>

          <div className="box1">
            <div className="content1">
              <p>
                <strong>Complaint No:</strong>20036168
              </p>
              <p>
                <strong>Name :</strong>Kamalesh
              </p>
              <p>
                <strong>Description :</strong>Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Amet esse fugiat voluptas, ullam
                reprehenderit nemo quo expedita cumque animi facere.
              </p>
            </div>
            <div className="content2">
              <p>
                <strong>Complaint Date :</strong>28-11-2024
              </p>
              <p>
                <strong>Status :</strong>Untracked
              </p>
              <button type="submit">View more</button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

