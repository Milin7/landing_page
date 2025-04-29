import { Outlet } from "react-router";
// import CustomCursor from "../components/CustomCursor";
import { useEffect } from "react";

export default function Layout() {
  useEffect(() => {
    // Agregar la clase para activar el cursor personalizado
    document.body.classList.add("custom-cursor-active");

    // Limpiar al desmontar
    return () => {
      document.body.classList.remove("custom-cursor-active");
    };
  }, []);

  return (
    <>
      {/* <CustomCursor /> */}
      <div className="grid relative grid-cols-3">
        <div className="mt-10 ml-10  col-span-1">
          <div className=" fixed  text-landing-white col-span-1 grid grid-cols-1 grid-rows-10 h-96">
            <h1 className=" font-bold text-3xl tracking-wider">
              Isaac Martínez
            </h1>
            <h2 className=" uppercase tracking-normal text-lg pt-1">
              Front End Developer
            </h2>
            <div className="  row-span-8 text-landing-neon mt-20">
              <div className=" grid grid-cols-6 mb-2">
                <div className=" col-span-3 border-t-2 border-landing-neon mt-2.5 w-20 ml-16"></div>
                <span className=" col-span-3 uppercase ">about</span>
              </div>
              <div className=" grid grid-cols-6 mb-2">
                <div className=" col-span-3 border-t-2 border-landing-neon mt-2.5 w-20 ml-16"></div>
                <span className=" col-span-3 uppercase">Experience</span>
              </div>
              <div className=" grid grid-cols-6 mb-2">
                <div className=" col-span-3 border-t-2 border-landing-neon mt-2.5 w-20 ml-16"></div>
                <span className=" col-span-3 uppercase">Projects</span>
              </div>
            </div>
            <div className=" row-span-2">
              <h1>icons</h1>
            </div>
          </div>
        </div>
        <div className=" col-span-2">
          <Outlet />
        </div>
      </div>
    </>
  );
}
