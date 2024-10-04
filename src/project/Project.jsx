import React from "react";
import "./Project.css";
import Slider from "react-slick";

// const Project = [
//   {
//     src: "png",
//     title: "Courses Portfolio",
//     info: "This is a template online store website that I built when I was learning Frontend development.",
//     link: "",
//     Stack: [
//       "Next.js",
//       "tailwind.css",
//       "shadcnUi",
//       "Mongodb",
//       "React.js",
//       "Material UI",
//       "hygraph",
//     ],
//   },
//   {
//     src: "png",
//     title: "onlayn ish website",
//     info: "This is a template online store website that I built when I was learning Frontend development",
//     link: "",
//     Stack: [
//       "Next.js",
//       "react-hook-form",
//       "React.js",
//       "tailwind.css",
//       "Mongodb",
//     ],
//   },
//   {
//     src: "png",
//     title: "Full stack portfolio",
//     info: "This is a template online store website that I built when I was learning Frontend development",
//     link: "",
//     Stack: [
//       "Next.js",
//       "tailwind css",
//       "shadcn UI",
//       "React.js",
//       "Mongo DB",
//       "hygraph",
//     ],
//   },
//   {
//     src: "png",
//     title: "online shop",
//     info: "The online store is mainly dedicated to the sale of headphones",
//     link: "",
//     Stack: [
//       "tailwind css",
//       "MONGODB",
//       "Next.js",
//       "React.js",
//       "Stripe",
//       "Redux",
//     ],
//   },
//   {
//     src: "png",
//     title: "Ustachi.uz",
//     info: "Our Ustachi.uz website is a very well-made project",
//     link: "",
//     Stack: [
//       "Next.js",
//       "graphql",
//       "tailwind.css",
//       "ui.shadcn",
//       "Mongodb",
//       "Clerk",
//       "React",
//       "i18",
//       "react-hook-form",
//     ],
//   },
//   {
//     src: "png",
//     title: "Manzura course website",
//     info: "Master the skills to drive your Career",
//     link: "",
//     Stack: [
//       "Next.js",
//       "tailwind.css",
//       "shadcnUi",
//       "Mongodb",
//       "mysql",
//       "React.js",
//       "NextAuth.js",
//       "react-hook-form",
//       "Prisma",
//       "i18n",
//     ],
//   },
// ];

function SimpleSlider() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="Project_global">
      <div className="slider-container">
        <Slider {...settings}>
          <div className="slids">
            <h3>1</h3>
          </div>
          <div className="slids">
            <h3>2</h3>
          </div>
          <div className="slids">
            <h3>3</h3>
          </div>
          <div className="slids">
            <h3>4</h3>
          </div>
          <div className="slids">
            <h3>5</h3>
          </div>
          <div className="slids">
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default SimpleSlider;
