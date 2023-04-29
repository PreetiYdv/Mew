import React, { useState } from "react";
import { TiThMenuOutline } from "react-icons/ti";
import { GrClose } from "react-icons/gr";

function MewNav() {
  const [toggle, setToggle] = useState(false);

  const shownavBar = () => {
    setToggle(!toggle);
    document.body.classList.toggle("overflow-hidden");
  };
  return (
    <>
      <nav>
        <div className="container myContainer d-flex justify-content-between align-items-center pt-3">
          <a
            href="#"
            className="text-decoration-none ff_Slackey fc_black fs_xxlg"
          >
            Mew
          </a>
          <ul
            className={
              toggle
                ? "showNav px-0 myNav"
                : "d-flex gap-5 mb-0 px-0 align-items-center myNav"
            }
          >
            <li>
              <a
                onClick={shownavBar}
                href="#LetsFly"
                className="ff_PoppinsRegular fs_md fc_coolGrey text-decoration-none"
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={shownavBar}
                href=""
                className="ff_PoppinsRegular fs_md fc_coolGrey text-decoration-none"
              >
                About
              </a>
            </li>
            <li>
              <a
                onClick={shownavBar}
                href=""
                className="ff_PoppinsRegular fs_md fc_coolGrey text-decoration-none"
              >
                Services
              </a>
            </li>
            <li>
              <a
                onClick={shownavBar}
                href=""
                className="ff_PoppinsRegular fs_md fc_coolGrey text-decoration-none"
              >
                Facilities
              </a>
            </li>
            <li>
              <button
                className={
                  toggle
                    ? "d-block sign_btn ff_PoppinsRegular fs_md fc_main"
                    : "d-lg-none sign_btn ff_PoppinsRegular fs_md fc_main"
                }
              >
                Sign up
              </button>
            </li>
          </ul>
          <button
            className={
              toggle
                ? "d-none sign_btn ff_PoppinsRegular fs_md fc_main"
                : "d-lg-block d-none sign_btn ff_PoppinsRegular fs_md fc_main"
            }
          >
            Sign up
          </button>

          <span onClick={shownavBar} className="nav_btn d-lg-none z-index-50">
            {toggle ? (
              <GrClose />
            ) : (
              <TiThMenuOutline />
            )}
          </span>
        </div>
      </nav>
    </>
  );
}

export default MewNav;
