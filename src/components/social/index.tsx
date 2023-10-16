

import {  } from '@heroicons/react/24/outline'

const SocialMediaLinks = () => {
  

  const socialMediaLinks = [
    {
      name: "Facebook",
      icon: <Heroicons.outline.FacebookIcon />,
      url: "https://www.facebook.com/example",
    },
    {
      name: "YouTube",
      icon: <Heroicons.outline.YouTubeIcon />,
      url: "https://www.youtube.com/example",
    },
    {
      name: "LinkedIn",
      icon: <Heroicons.outline.LinkedInIcon />,
      url: "https://www.linkedin.com/example",
    },
    {
      name: "Dribbble",
      icon: <Heroicons.outline.DribbbleIcon />,
      url: "https://www.dribbble.com/example",
    },
    {
      name: "Instagram",
      icon: <Heroicons.outline.InstagramIcon />,
      url: "https://www.instagram.com/example",
    },
  ];

  return (
    <div className="flex items-center justify-center">
      {socialMediaLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noreferrer noopener"
          className="mx-2 text-gray-700 hover:text-gray-900 transition duration-150 ease-in-out"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialMediaLinks;
