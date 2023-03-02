'use client';
import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon
 } from "@fortawesome/free-solid-svg-icons";

export default function ThemeToggle() {
    const [isEnabled, setIsEnabled] = useState(false);

    useEffect(() => {
        // Pass in the isEnabled state
      updateTheme(isEnabled);
    }, [isEnabled]);
  
    const toggleState = () => {
      setIsEnabled((prevState) => !prevState);
    };
    
    const updateTheme = (isDarkEnabled) => {

        // Get all available styles
        const styles = getComputedStyle(document.body);
      
          // Get the variable values
        const black = styles.getPropertyValue("--black");
        const white = styles.getPropertyValue("--white");
        const red = styles.getPropertyValue("--red");
        const grey = styles.getPropertyValue("--grey");
      
      const docEl = document.documentElement;
      if (isDarkEnabled) {
        docEl.style.setProperty("--background", black);
        docEl.style.setProperty("--foreground", white);
        docEl.style.setProperty("--articlebackground", grey);
        docEl.style.setProperty("--articleforeground", white);
        document.querySelector("html").classList.add("dark");
        document.querySelector("section")?.classList.add("dark");
        document.querySelector(".navigation")?.classList.add("dark");
      } else {
        docEl.style.setProperty("--background", white);
        docEl.style.setProperty("--foreground", black);
        docEl.style.setProperty("--articlebackground", white);
        docEl.style.setProperty("--articleforeground", grey);
        document.querySelector("html").classList.remove("dark");
        document.querySelector("section")?.classList.remove("dark");
        document.querySelector(".navigation")?.classList.remove("dark");
      }};
    return (
      <label className="toggle-wrapper my-auto" htmlFor="toggle">
        <div className={`toggle ${isEnabled ? "enabled" : "disabled"}`}>
          <span className="hidden">
          {isEnabled ? "Enable Light Mode" : "Enable Dark Mode"}
          </span>
          <div className="icons">
            <FontAwesomeIcon icon={faMoon} className="text-neutral-50"/>
            <FontAwesomeIcon icon={faSun} className="text-neutral-900"/>
      </div>
          <input
            id="toggle"
            name="toggle"
            type="checkbox"
            checked={isEnabled}
            onClick={toggleState}
            readOnly
          />
        </div>
      </label>
    );
  }