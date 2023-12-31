import React from 'react';
import Header from "../components/Header/Header";
import Cover from "../components/Mainpage/Cover";
import Introduce from "../components/Mainpage/Introduce";
import Footer from "../components/Footer";

const Mainpage = () => {
  const ref = React.useRef<number>(0);
  function gotoScroll() {
    if(ref !== null) {
      const offsetTop = ref.current;
      console.log(offsetTop);
      window.scrollTo({ behavior: "smooth", top: offsetTop - 100});
    }
  }
  return (
    <>
      <Header isNotHome={false}/>
      <Cover sc={gotoScroll}/>
      <Introduce scRef={ref}/>
      <Footer/>
    </>
  );
};

export default Mainpage;