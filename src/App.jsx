import "./index.css";
import Canvas from "./Canvas";
import data from "./data";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// ... rest of the code ...

function App() {
  const [showCanvas, setShowCanvas] = useState(false);
  const headingref = useRef(null);
  const growingspan = useRef(null);

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const locomotiveScroll = new LocomotiveScroll();
  }, []);

  useEffect(() => {
   const handleHeadingClick = (e) => {
      setShowCanvas((prevShowCanvas) => {
        if(!prevShowCanvas){
          gsap.set(growingspan.current,{
            top: e.clientY,
            left: e.clientX,
          });
  
          gsap.to("body",{
            color:"#000",
            backgroundColor:"#fd2c2a",
            duration:1.2,
            ease:"power2.inOut",
          });
  
          gsap.to(growingspan.current,{
            scale:1000,
            duration:1.2,
            ease:"power2.inOut",
            onComplete:()=>{
              gsap.to(growingspan.current,{
                scale:0,
                clearProps:"all",
              });
            },
          });
        } else{
          gsap.to("body",{
            color:"#fff",
            backgroundColor:"#000", 
            duration:1.2,
            ease:"power2.inOut",
          }); 
        }
        return !prevShowCanvas;
      });
    };
    const headingElement = headingref.current;
      headingElement.addEventListener("click", handleHeadingClick);

      return () => {
        headingElement.removeEventListener("click", handleHeadingClick);
      };
  }, []);

  return (
    <>
      <span
        ref={growingspan}
        className="growing block rounded-full fixed left-[-20px] top-[-20px] h-5 w-5"
      ></span>
      <div className="w-full relative min-h-screen">
        {showCanvas &&
          data[0].map((canvasdets, index) => (
            <Canvas key={index} details={canvasdets} />
          ))}

        <div className="h-screen w-full relative z-[1]">
          <nav className="w-full text-sm flex justify-between items-center px-10 py-8 z-50">
            <div className="brand">
              <h1 className="text-lg font-regular">Thirtysixstudious</h1>
            </div>
            <div className="links flex gap-10">
              {["Home", "About", "Projects", "Contact"].map((link, index) => (
                <a
                  key={index}
                  href={`#${link.toLowerCase()}`}
                  className="text-md hover:text-gray-400 transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </nav>

          <div className="text-container w-full px-[25%]">
            <div className="text w-[60%]">
              <h3 className="text-2xl leading-[1.5] ">
                At Thirtysixstudio, we build immersive digital experiences for
                brands with a purpose.
              </h3>
              <p className="text-sm w-[80%] mt-10 font-normal">
                We are a team of designers, developers, and strategists who are
                passionate about creating digital experiences that are both
                beautiful and functional.
              </p>
              <p className="text-sm mt-10">scroll</p>
            </div>
          </div>
          <div className="w-full absolute bottom-0 left-0">
            <h1
              ref={headingref}
              className="text-[14rem] font-normal tracking-tight leading-none pl-5"
            >
              Thirtysixstudios
            </h1>
          </div>
        </div>
      </div>

      <div className="w-full h-screen mt-32 px-10 relative ">
      {showCanvas &&
          data[1].map((canvasdets, index) => (
            <Canvas key={index} details={canvasdets} />
          ))}
        <h1 className="text-8xl tracking-tighter">about the brand</h1>
        <p className="text-3xl leading-[1.5] w-[80%] mt-10 font-light">
          we are a team of designers, developers, and strategists who are
          passionate about creating digital experiences that are both beautiful
          and functional, we are a team of designers, developers, and
          strategists who are passionate about creating digital experiences that
          are both beautiful and functional.
        </p>
        <img
          className="w-[80%] mt-30"
          src="https://directus.funkhaus.io/assets/b3b5697d-95a0-4af5-ba59-b1d423411b1c?withoutEnlargement=true&fit=outside&width=1400&height=1400"
          alt=""
        />
      </div>
      {/* <div className="w-full relative min-h-screen text-white">
    
        {
          data[1].map((canvasdets, index)=>(
            <Canvas key={index} details={canvasdets} />
          ))
        }
      </div>
  <div className="w-full relative min-h-screen text-white">
    
        {
          data[2].map((canvasdets, index)=>(
            <Canvas key={index} details={canvasdets} />
          ))
        }
      </div>
  <div className="w-full relative min-h-screen text-white">
    
        {
          data[3].map((canvasdets, index)=>(
            <Canvas key={index} details={canvasdets} />
          ))
        }
      </div> */}
    </>
  );
}

export default App;
