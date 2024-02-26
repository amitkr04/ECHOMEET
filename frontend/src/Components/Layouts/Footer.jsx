import React from "react";
import css from "../../Styles/Footer.module.css";

const Footer = () => {
  return (
    <div>
      <footer className={css.footercontainer}>
        <p className={`${css.left} copyright`}>
          &copy; 2024 Your Video Conferencing App
        </p>
        <p className={`${css.center} privacy`}>
          <a href="/terms">Terms of Service</a> |{" "}
          <a href="/privacy">Privacy Policy</a>
        </p>
        <p className={`${css.right} contact`}>Contact: amit32454@gmail.com</p>
      </footer>
    </div>
  );
};

export default Footer;
