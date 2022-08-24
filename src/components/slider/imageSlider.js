import { useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";

// import "slick-carousel/slick/slick-theme.css";

const slideStyles = {
  width: "100%",
  height: "100vh",
  borderRadius: "0px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  boxShadow: "inset 0 0 0 1000px rgba(0,0,0,0.7)",
  // dataBsRide: "carousel",
  // dataBsInterval: "3000"
};

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const sliderStyles = {
  position: "relative",
  height: "100%",
};

const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
};

const dotStyle = {
  margin: "-45px 3px 0 3px",
  cursor: "pointer",
  fontSize: "10px",
  color: "white"
};

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  return (
    <div style={sliderStyles}>
      <div>
        <div onClick={goToPrevious} style={leftArrowStyles}>
          ❰
        </div>
        <div onClick={goToNext} style={rightArrowStyles}>
          ❱
        </div>
      </div>
      <div style={slideStylesWidthBackground}></div>
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            style={dotStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

// const ImageSlider2 = ({  }) => {

//   const slides = [
//     "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
//     "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1290&q=80",
//     "https://images.unsplash.com/photo-1618365908648-e71bd5716cba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
//     "https://images.unsplash.com/photo-1463320726281-696a485928c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
//     "https://images.unsplash.com/photo-1596123068611-c89d922a0f0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fGJvb2tzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
//   ];




//     const settings = {
//       dots: true,
//       infinite: true,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       autoplay: true,
//       speed: 5000,
//       autoplaySpeed: 2000,
//       cssEase: "linear",
//       // adaptiveHeight: true
//     };

//     const imageDiv = {
//       // width: "100%",
//       // height: "100%",
//       // borderRadius: "0px",
//       // backgroundSize: "cover",
//       // backgroundPosition: "center",
//       // backgroundColor: "red",
//       // boxShadow: "inset 0 0 0 1000px rgba(0,0,0,0.7)",

//       backgroundImage:  "url('https://media.geeksforgeeks.org/wp-content/uploads/rk.png')",
//         height:'100vh',
//         marginTop:'-70px',
//         fontSize:'50px',
//         backgroundSize: 'cover',
//         backgroundRepeat: 'no-repeat'
//     }

   
//     return (
    

//       <div>
//         <Slider {...settings}>
//         {
          
//           <div style={imageDiv}></div>
//         }
//         </Slider>
//       </div>
//     );
  
// }
export default ImageSlider;