"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function Carousel({ children }) {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    rows: 2,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <Arrow right={true} />,
    prevArrow: <Arrow right={false} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
          infinite: false,
          dots: true,
          arrows: false,
        },
      },
    ],
    appendDots: (dots) => (
      <div>
        <ul
          style={{ margin: "0" }}
          className="flex justify-center pt-[100px] sm:pt-3"
        >
          {/* never thought this thing would work lol */}
          {dots.map((dot, index) => {
            // console.log(dot.props.children.props.onClick, index)
            let active = dot.props.className === "slick-active";
            return (
              <li
                key={index}
                onClick={dot.props.children.props.onClick}
                className={`aspect-square !h-auto !w-3 rounded-full ${active ? "bg-accent" : "bg-accent/20"}`}
              />
            );
          })}
        </ul>
      </div>
    ),
  };

  return (
    <div className="relative col-span-full row-span-6 row-start-3 gap-2 p-5 sm:row-start-2 md:row-span-5">
      <Slider {...settings} className="">
        {children}
      </Slider>
    </div>
  );

  function Arrow(props) {
    const { onClick, right } = props;
    //console.log(props.className.includes("slick-disabled"), "prev");
    let disabled = props.className.includes("slick-disabled");
    return (
      <button
        onClick={onClick}
        className={`${disabled ? "hidden" : "flex"} ${right ? "-right-[0px] translate-x-10" : "-translate-x-10"} absolute top-[50%] flex aspect-square w-[40px] -translate-y-10 cursor-pointer items-center rounded-full text-[30px] text-text active:bg-primary/10`}
      >
        {right ? (
          <ChevronRightIcon fontSize="inherit" className="m-auto" />
        ) : (
          <ChevronLeftIcon fontSize="inherit" className="m-auto" />
        )}
      </button>
    );
  }
}
