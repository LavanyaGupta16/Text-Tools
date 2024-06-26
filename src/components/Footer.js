import React from "react";
import {BsGithub} from "react-icons/bs";
import {BsLinkedin} from "react-icons/bs";
export default function Footer(props) {
  return (
    <>
      <footer className="text-center">
        <div className="container pt-4">
          <section>
            <a
              className={`btn btn-link btn-floating btn-lg text-${
                props.mode === "light" ? "dark" : "light"
              } m-1`}
              href="https://www.linkedin.com/in/lavanya-gupta-692b70222/"
              target="_blank"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <BsLinkedin />
            </a>
            <a
              className={`btn btn-link btn-floating btn-lg text-${
                props.mode === "light" ? "dark" : "light"
              } m-1`}
              href="https://github.com/LavanyaGupta16"
              role="button"
              target="_blank"
              data-mdb-ripple-color="dark"
            >
              <BsGithub />
            </a>
          </section> 
        </div>
        <div
          className={`text-center text-${
            props.mode === "light" ? "dark" : "light"
          } p-3`}
        >
          Made by
          <a href="mailto:lavira7987@gmail.com" className="mx-1">
            Lavanya Gupta 
          </a>
          using ReactJS and Bootstrap
        </div>
      </footer>
    </>
  );
}
