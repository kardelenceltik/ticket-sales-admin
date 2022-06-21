import React from "react";
import { FiMail } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";

import { TbLetterK } from "react-icons/tb";

const Navbar2 = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg  bg-white mt-3">
        <a className="navbar-brand d-lg-none" href="#">
          Navbar
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggle"
          aria-controls="navbarToggle"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarToggle"
        >
          <h2 className="nav-link active" href="#">
            wallids<span className="sr-only">(current)</span>
          </h2>
          <div className="search-input">
            <input
              className="form-control "
              type="text"
              placeholder={<AiOutlineSearch /> + "All apps search"}
            />
          </div>

          <ul className="navbar-nav  mr-2">
            <li className="nav-item mr-4">
              <button className="btn btn-primary">Enterprise</button>
            </li>
            <li className="nav-item mr-4">
              <a className="nav-link mail-icon" href="#">
                <FiMail />
              </a>
            </li>
            <li className="nav-item mr-4">
              <div className="dropdown show">
                <span className="badge badge-primary name-icon">
                  <TbLetterK />
                </span>

                <a
                  className="btn btn-white dropdown-toggle"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Kardelen Çeltik
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar2;
