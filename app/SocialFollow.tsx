import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin
  } from "@fortawesome/free-brands-svg-icons";
  import Link from "next/link";;

export function SocialFollowWhite() {
  return (
    <div className="text-white items-center content-center grid grid-cols-5">           
      <button className="hover:scale-105">
        <Link
          href="https://youtu.be/mV5DSttNOPE"
          className="youtube social"
          passHref
          target="_blank"
          rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </Link>
      </button>
      <button className="hover:scale-105">
        <Link
          href="https://www.facebook.com/independentlabels/"
          className="facebook social"
          passHref
          target="_blank"
          rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </Link>
        </button>
      <button className="hover:scale-105">
        <Link
          href="https://twitter.com/a2im"
          className="twitter social"
          passHref
          target="_blank"
          rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </Link>
        </button>
      <button className="hover:scale-105">
        <Link
          href="https://www.instagram.com/a2im/"
          className="instagram social"
          passHref
          target="_blank"
          rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </Link>
        </button>
      <button className="hover:scale-105">
        <Link
          href="https://www.linkedin.com/company/a2im-american-association-of-independent-music"
          className="linkedin social"
          passHref
          target="_blank"
          rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </Link>
        </button>
  </div>
  );
}

export function SocialFollowBlack() {
  return (
    <div className="text-black items-center content-center grid grid-cols-5">           
      <button className="hover:scale-105">
        <Link
          href="https://youtu.be/mV5DSttNOPE"
          className="youtube social"
          passHref
          target="_blank"
          rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} size="2x" />
          </Link>
          </button>
      <button className="hover:scale-105">
        <Link
          href="https://www.facebook.com/independentlabels/"
          className="facebook social"
          passHref
          target="_blank"
          rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </Link>
        </button>
      <button className="hover:scale-105">
        <Link
          href="https://twitter.com/a2im"
          className="twitter social"
          passHref
          target="_blank"
          rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </Link>
        </button>
      <button className="hover:scale-105">
        <Link
          href="https://www.instagram.com/a2im/"
          className="instagram social"
          passHref
          target="_blank"
          rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </Link>
        </button>
      <button className="hover:scale-105">
        <Link
          href="https://www.linkedin.com/company/a2im-american-association-of-independent-music"
          className="linkedin social"
          passHref
          target="_blank"
          rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </Link>
        </button>
  </div>
  );
}