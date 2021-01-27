/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-no-target-blank */
import styled from 'styled-components';
import React from 'react';

// src/components/Footer/index.js
const FooterWrapper = styled.footer`
  background-color: rgb(22 51 34 / 55%);
  padding: 10px;
  display: relative;
  position: absolute;
  bottom:0;
  width:100%;
  @media screen and (max-width: 500px) {
    bottom:0;
    position: relative;
    background-color: ${({ theme }) => theme.colors.mainBg};
  }
  img {
    width: 70px;
    margin-right: 15px;
    margin-left: 10px;
    cursor: pointer;
  }
  a {
    color: white;
    font-family: "Nunito Sans", sans-serif;
    text-decoration: none;
    transition: 0.3s;
  }
  .footer-social {
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 500px) {
      img {
       width: 75px;
      }
  }
  }

  .fa {
    font-size: 36px;
    margin-right: 15px;
    margin-left: 10px;
    color: #d0d0d0;
    border-radius: 51%;
    padding: 10px;
    height: 60px;
    width: 60px;
    text-align: center;
    line-height: 43px;
    text-decoration: none;
    transition: color 0.2s;
  }

  .social-icons {
    cursor: default;
  }

  .fa-instagram:hover,
  .fa-instagram:focus {
    color: purple;
    cursor: pointer;
  }

  .fa-linkedin:hover,
  .fa-linkedin:focus {
    color: #0a66c2;
    cursor: pointer;
  }

  .fa-github:hover,
  .fa-github:focus {
    color: black;
    cursor: pointer;
  }
`;

export default function Footer(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FooterWrapper {...props}>
      <div className="footer-social">
        <a
          href="https://www.alura.com.br/"
          target="_blank"
          className="social-icons"
        >
          <img
            src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg"
            alt="Logo Alura"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/ricardoltt/"
          target="_blank"
          className="social-icons"
        >
          <i className="fa fa-linkedin" />
        </a>
        <a
          href="https://www.instagram.com/contemple.se/"
          target="_blank"
          className="social-icons"
        >
          <i className="fa fa-instagram" />
        </a>
        <a
          href="https://github.com/ricardoltt/"
          target="_blank"
          className="social-icons"
        >
          <i className="fa fa-github" />
        </a>
      </div>
    </FooterWrapper>
  );
}
