import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from 'react-icons/fa';
import React from 'react';

interface SocialProps {
  containerStyles: string;
  iconStyles: string;
}

const socials = [
  { icon: <FaGithub />, path: "" },
  { icon: <FaLinkedin />, path: "" },
  { icon: <FaYoutube />, path: "" },
  { icon: <FaTwitter />, path: "" },
];

const Social: React.FC<SocialProps> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => (
        <Link href={social.path} key={index} className={iconStyles}>
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
