import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import "./landingPage.css";

const LandingPage = () => {
  return (
    <div className="main">
      <div className="opening">
        <div className="astro-img">
          <div className="content-astro">
            <h1 className="opening-title">FIND TEAM-MATE</h1>
            <p className="opening-subtitle">
              Welcome to interact.
              <br />
              Find people, participate and win !
            </p>
            <button className="opening-button">
              <Link to="/search">FIND NOW</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="middle">
        <h1 className="ending-title">FINDING PROCESS</h1>
        <div className="middle-content">
          <div className="middle-grid-card">
            <div className="middle-grid-card-title">Step 1</div>
            <div className="ending-grid-card-subtitle">
              Create Your Profile. <br />
              Let other see if you are a best fit for them
            </div>
          </div>
          <div className="middle-grid-card">
            <div className="middle-grid-card-title">Step 2</div>
            <div className="ending-grid-card-subtitle">
              Checkout the profiles <br />
              See the endless stream you eligible team-mates
            </div>
          </div>
          <div className="middle-grid-card">
            <div className="middle-grid-card-title">Step 3</div>
            <div className="ending-grid-card-subtitle">
              Filter-out
              <br />
              Filter out the team-member based on your preferences
            </div>
          </div>
          <div className="middle-grid-card">
            <div className="middle-grid-card-title">Step 4</div>
            <div className="ending-grid-card-subtitle">
              Know your mate
              <br />
              Have a technical talk to check if your vibes match
            </div>
          </div>
          <div className="middle-grid-card">
            <div className="middle-grid-card-title">Step 5</div>
            <div className="ending-grid-card-subtitle">
              Participate in Hackathon. <br />
              Fight to win with your mate
            </div>
          </div>
          <div className="middle-grid-card">
            <div className="middle-grid-card-title">Step 6</div>
            <div className="ending-grid-card-subtitle">
              HURRAY !!. <br />
              You have a team
            </div>
          </div>
        </div>
      </div>
      <div className="ending">
        <h1 className="ending-title">IDEATE-DESIGN-DEVELOP</h1>
        <div className="ending-grid">
          <div className="ending-img"></div>
          <div className="ending-grid-card-1">
            <div className="ending-grid-card-img">1</div>
            <div className="ending-grid-card-title">
              Professional development
            </div>
            <div className="ending-grid-card-subtitle">
              Unlock maximum individual and team potential across the Puzzle
              Break Keystones.
            </div>
          </div>
          <div className="ending-grid-card-2">
            <div className="ending-grid-card-img">2</div>
            <div className="ending-grid-card-title">Buy Back And Burn 25%</div>
            <div className="ending-grid-card-subtitle">
              We Constantly Buy POL Tokens From The Market And Destroy Them By
              Sending Them To Zero Address
            </div>
          </div>
          <div className="ending-grid-card-3">
            <div className="ending-grid-card-img">3</div>
            <div className="ending-grid-card-title">Something for everyone</div>
            <div className="ending-grid-card-subtitle">
              Every participant will contribute in ways that maximize their
              morale, engagement, and buy-in.
            </div>
          </div>
          <div className="ending-grid-card-4">
            <div className="ending-grid-card-img">4</div>
            <div className="ending-grid-card-title">Advanced Users 30%</div>
            <div className="ending-grid-card-subtitle">
              We Buy POL From The Market And Distribute These Tokens Among
              Advanced Platform Users Who Put Their Pols In The Staking Smart
              Contract
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
