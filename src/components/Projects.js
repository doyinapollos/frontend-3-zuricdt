import React from "react";
import placeImage from "../assets/images/place-image.png";

function Projects() {
  return (
    <section>
      <div className="w-[100%] h-auto flex flex-col justify-start items-center ">
        <div className="w-[80%] h-[100px] text-white font-bold text-[24px] flex justify-center items-center ">
          <p cla> Checkout My Recent Projects </p>{" "}
        </div>{" "}
        <div className="w-[80%] h-auto flex justify-around items-center flex-wrap ">
          <a href="" rel="noreferrer" target="_blank">
            <button>
              <div className="w-[300px] h-[300px] rounded-[5px] bg-[#222831] text-white flex flex-col justify-around items-center ">
                <img
                  className="w-full h-full rounded-[10px] "
                  src={placeImage}
                  alt=""
                />
              </div>{" "}
            </button>{" "}
          </a>{" "}
          <a href="" rel="noreferrer" target="_blank">
            <button>
              <div className="w-[300px] h-[300px] rounded-[5px] bg-[#222831] text-white flex flex-col justify-around items-center ">
                <img
                  className="w-full h-full rounded-[10px] "
                  src={placeImage}
                  alt=""
                />
              </div>{" "}
            </button>{" "}
          </a>{" "}
          <a href="" rel="noreferrer" target="_blank">
            <button>
              <div className="w-[300px] h-[300px] rounded-[5px] bg-[#222831] text-white flex flex-col justify-around items-center ">
                <img
                  className="w-full h-full rounded-[10px] "
                  src={placeImage}
                  alt=""
                />
              </div>{" "}
            </button>{" "}
          </a>{" "}
          <a href="" rel="noreferrer" target="_blank">
            <button>
              <div className="w-[300px] h-[300px] rounded-[5px] bg-[#222831] text-white flex flex-col justify-around items-center ">
                <img
                  className="w-full h-full rounded-[10px] "
                  src={placeImage}
                  alt=""
                />
              </div>{" "}
            </button>{" "}
          </a>{" "}
          <a href="" rel="noreferrer" target="_blank">
            <button>
              <div className="w-[300px] h-[300px] rounded-[5px] bg-[#222831] text-white flex flex-col justify-around items-center ">
                <img
                  className="w-full h-full rounded-[10px] "
                  src={placeImage}
                  alt=""
                />
              </div>{" "}
            </button>{" "}
          </a>{" "}
          <a href="" rel="noreferrer" target="_blank">
            <button>
              <div className="w-[300px] h-[300px] rounded-[5px] bg-[#222831] text-white flex flex-col justify-around items-center ">
                <img
                  className="w-full h-full rounded-[10px] "
                  src={placeImage}
                  alt=""
                />
              </div>{" "}
            </button>{" "}
          </a>{" "}
        </div>{" "}
        <div className="w-[90%] h-[100px] flex justify-center items-center  ">
          <button className="w-[186px] h-[38px] bg-[#393E46] rounded-[5px] text-white flex justify-center items-center text-[10px] font-[600]">
            View All Works{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}

export default Projects;
