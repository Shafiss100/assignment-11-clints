import React from 'react';
import "./Footer.css";
import { AtSymbolIcon , PhoneIcon , GlobeAltIcon } from "@heroicons/react/solid";

const Footer = () => {
    return (
      <div className="footer-body">
        <div className=" text w-100">
          <div className="text-light">
            <h6 className="">
              <AtSymbolIcon className="icon" />
              bigbazar@gmail.com
            </h6>
            <h6>
              <PhoneIcon className="icon" />
              +0142323532232
            </h6>
            <h6>
              <GlobeAltIcon className="icon" />
              bigbazar.bd.com
            </h6>
            <h6>© 2022  All image reserved.
            </h6>
          </div>
        </div>
      </div>
    );
};

export default Footer;