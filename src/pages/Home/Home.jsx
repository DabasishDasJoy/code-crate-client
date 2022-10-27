import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div>
      {/* banner */}
      <div
        className={`bg-[url('https://i.ibb.co/thfx3rV/hero-bg-8-1.jpg')] h-[80vh] relative`}
      >
        <img
          src="https://i.ibb.co/HzcNyND/hero-overlay-8.png"
          alt=""
          className="h-full w-full"
        />
        <div className="absolute top-0 w-[50%] text-white flex flex-col justify-center gap-5 h-full p-10">
          <h1 className="text-[60px] font-semibold">
            Code Crate: A Crate Full of Knowledge
          </h1>
          <Link to={"/register"}>
            <button className="px-4 py-2 font-medium tracking-wide text-white  transition-colors duration-300 transform bg-[#0D5EF4] rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
              Register now
            </button>
          </Link>
        </div>
      </div>

      {/* feature card */}
      <div className="flex md:flex-row flex-col justify-evenly my-10 gap-10 px-10">
        <div
          className={`max-w-2xl px-8 py-4 rounded-lg shadow-2xl  bg-[url('https://i.ibb.co/hZ8wMTD/cta-bg-3.jpg')] bg-cover h-[300px] flex flex-col justify-around items-start gap-5`}
        >
          <h1 className="text-[#000A38] text-2xl font-bold ">
            Get The Best Courses And Enhance Your Knowledge
          </h1>
          <Link
            to={"/register"}
            className="flex items-center gap-1 px-4 py-2 font-medium tracking-wide text-white  transition-colors duration-300 transform bg-[#0D5EF4] rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
          >
            Join Us
            <FaArrowRight />
          </Link>
        </div>

        <div
          className={`max-w-2xl px-8 py-4 bg-white rounded-lg shadow-2xl   bg-[url('https://i.ibb.co/dfdyLRX/cta-bg-2.jpg')] bg-cover h-[300px] flex flex-col justify-around  items-start gap-5`}
        >
          <h1 className="text-[#000A38] text-2xl font-bold">
            Get The Best Courses And Enhance Your Knowledge
          </h1>
          <Link
            to={"/register"}
            className="flex items-center gap-1 px-4 py-2 font-medium tracking-wide text-white  transition-colors duration-300 transform bg-[#0D5EF4] rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
          >
            Join Us
            <FaArrowRight />
          </Link>
        </div>
      </div>

      <div
        id="map"
        className="flex flex-col h-[80vh] rounded-lg shadow-lg my-10 border gap-5 p-5"
      >
        <h1 className="text-center text-3xl  font-semibold uppercase">
          Find Us On
        </h1>
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Home;
