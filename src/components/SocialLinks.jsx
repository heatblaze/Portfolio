// src/components/SocialLinks.jsx
import React from "react";
import { socialLinks } from "../constants";

const SocialLinks = ({ className = "" }) => (
  <div className={`flex gap-4 mt-6 ${className}`}>
    {socialLinks.map(link => (
      <a
        key={link.name}
        href={link.link}
        target={link.link.startsWith("http") ? "_blank" : "_self"}
        rel="noopener noreferrer"
        title={link.name}
        className="transition-transform hover:scale-110"
      >
        <img
          src={link.iconUrl}
          alt={link.name}
          className="w-8 h-8 object-contain"
        />
      </a>
    ))}
  </div>
);

export default SocialLinks;
