import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticleHeaderBg() {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      className="particles-2-css"
      options={{
        background: {
          position: "50% 50%",
          repeat: "no-repeat",
          size: "cover",
          color: "#000"
        },
        fullScreen: {
          enable: false
        },
        interactivity: {

          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 10,
              divs: {
                distance: 200,
                duration: 0.4,
                mix: false,
                selectors: [],
              },
            },
            grab: {
              distance: 400,
            },
            repulse: {
              divs: {
                distance: 200,
                duration: 0.4,
                factor: 100,
                speed: 1,
                maxSpeed: 50,
                easing: "ease-out-quad",
                selectors: [],
              },
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: {
              value: "#000",
            },
            distance: 150,
            opacity: 0.4,
          },
          move: {
            attract: {
              rotate: {
                x: 600,
                y: 1200,
              },
            },
            enable: true,
            outModes: {
              bottom: "out",
              left: "out",
              right: "out",
              top: "out",
            },
          },
          number: {
            density: {
              enable: true,
            },
            value: 24,
          },
          opacity: {
            random: {
              enable: true,
            },
            value: {
              min: 0.1,
              max: 1,
            },
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.2,
            },
          },
          rotate: {
            random: {
              enable: true,
            },
            animation: {
              enable: true,
              speed: 5,
            },
            direction: "random",
          },
          shape: {
            options: {
              character: {
                fill: false,
                font: "Verdana",
                style: "",
                value: "*",
                weight: "400",
              },
              char: {
                fill: false,
                font: "Verdana",
                style: "",
                value: "*",
                weight: "400",
              },
              polygon: {
                sides: 5,
              },
              star: {
                sides: 5,
              },
              image: [
                { src: "https://cdn.worldvectorlogo.com/logos/arduino-1.svg", width: 20, height: 20 },
                { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg", width: 20, height: 20 },
                { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg", width: 20, height: 20 },
                { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg", width: 20, height: 20 },
                { src: "https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg", width: 20, height: 20 },
                { src: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg", width: 20, height: 20 },
                { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg", width: 20, height: 20 },
                { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg", width: 20, height: 20 },
                { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg", width: 20, height: 20 },
                { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg", width: 20, height: 20 },
                { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg", width: 20, height: 20 },
                { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg", width: 20, height: 20 },
                { src: "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/pandas/pandas-original.svg", width: 20, height: 20 },
                { src: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg", width: 20, height: 20 },
                { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg", width: 20, height: 20 },
                { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg", width: 20, height: 20 },
                { src: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg", width: 20, height: 20 },
                { src: "https://seaborn.pydata.org/_images/logo-mark-lightbg.svg", width: 20, height: 20 },
                { src: "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg", width: 20, height: 20 },
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", width: 20, height: 20 }
              ],

              images: [
                { src: "https://cdn.worldvectorlogo.com/logos/arduino-1.svg", width: 20, height: 20 },
                { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg", width: 20, height: 20 },
                { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg", width: 20, height: 20 },
                { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg", width: 20, height: 20 },
                { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg", width: 20, height: 20 },
                { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg", width: 20, height: 20 },
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", width: 20, height: 20 },
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", width: 20, height: 20 },
                { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg", width: 20, height: 20 },
                { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg", width: 20, height: 20 },
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", width: 20, height: 20 },
                { src: "https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg", width: 20, height: 20 },
                { src: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg", width: 20, height: 20 },
                { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg", width: 20, height: 20 },
                { src: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg", width: 20, height: 20 },
                { src: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg", width: 20, height: 20 },
                { src: "https://seaborn.pydata.org/_images/logo-mark-lightbg.svg", width: 20, height: 20 },
                { src: "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg", width: 20, height: 20 },
                { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg", width: 20, height: 20 },
                { src: "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/pandas/pandas-original.svg", width: 20, height: 20 },
              ],

            },
            type: "image",
          },
          size: {
            value: 50,
            animation: {
              speed: 40,
              minimumValue: 0.1,
            },
          },
          stroke: {
            width: "100px",
            color: {
              value: "#000000",
              animation: {
                h: {
                  count: 0,
                  enable: false,
                  offset: 0,
                  speed: 1,
                  decay: 0,
                  sync: true,
                },
                s: {
                  count: 0,
                  enable: false,
                  offset: 0,
                  speed: 1,
                  decay: 0,
                  sync: true,
                },
                l: {
                  count: 0,
                  enable: false,
                  offset: 0,
                  speed: 1,
                  decay: 0,
                  sync: true,
                },
              },
            },
          },
        },
      }}
    ></Particles>
  );
}
