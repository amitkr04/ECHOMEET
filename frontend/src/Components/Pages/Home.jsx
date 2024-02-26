import React from "react";
import BackGround from "../../assets/Images/BackGround.jpg";
import { Link } from "react-router-dom";
import css from "../../Styles/Home.module.css";
import Layout from "../Layouts/Layout";

const Home = () => {
  return (
    <Layout>
      <div className={css.bodyContainer}>
        <div>
          <img
            src={BackGround}
            className={css.background}
            alt="Your App Logo"
          />
        </div>

        <div className={css.content}>
          <h3 className="fw-bolder">Unbounded Connections: Elevate your</h3>
          <h3>Meetings with free, Future-Forward</h3>
          <h3 className="fw-bolder">Video Conferencing!!</h3>

          <p className="text-break">
            "Welcome to EchoMeet, Revolutionize your meetings with our
            cutting-edge.
            <br /> future-forward video conferencing platform. Experience
            seamless collabaration, crystal-clear audio.
            <br /> and HD video, all at Zero-cost...!! Elevate your virtual
            communiocation and connect
            <br /> without boundaries today!"
          </p>
        </div>
        <div className={css.button}>
          <Link to="/join-now" className={css.btn}>
            Join Now...
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
