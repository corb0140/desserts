import React from "react";

const Footer = () => {
  return (
    <div className="mt-10 h-10 flex flex-col lg:flex-row items-center justify-center">
      <div className="flex">
        Challenge by
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          className="lg:pl-1"
        >
          Frontend Mentor.
        </a>
      </div>

      <div className="flex lg:pl-2">
        Coded by
        <a
          href="https://portfolio-ruby-nine-59.vercel.app/"
          className="text-primary pl-1"
        >
          Mark Corbin
        </a>
        .
      </div>
    </div>
  );
};

export default Footer;
