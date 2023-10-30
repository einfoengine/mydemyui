

import { FacebookIcon, YouTubeIcon, LinkedInIcon, DribbbleIcon, InstagramIcon } from '@heroicons/react/24/outline';

const SocialMediaLinks = () => {
  

  const socialMediaLinks = [
    {
      name: "Facebook",
      icon: <FacebookIcon />,
      url: "https://www.facebook.com/example",
    },
    {
      name: "YouTube",
      icon: <YouTubeIcon />,
      url: "https://www.youtube.com/example",
    },
    {
      name: "LinkedIn",
      icon: <LinkedInIcon />,
      url: "https://www.linkedin.com/example",
    },
    {
      name: "Dribbble",
      icon: <DribbbleIcon />,
      url: "https://www.dribbble.com/example",
    },
    {
      name: "Instagram",
      icon: <InstagramIcon />,
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
