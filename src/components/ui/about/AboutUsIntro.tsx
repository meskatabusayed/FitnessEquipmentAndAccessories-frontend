const AboutUsIntro = () => {
    return (
      <div className=" flex justify-center px-3 ">
        <div className="w-[420px] mt-28 px-3">
          <div className="">
            <div className="avatar flex justify-center">
              <div className="w-[144px] rounded-full">
                <img src="./src/assets/why.avif" />
              </div>
            </div>
            <h1 className="text-2xl font-semibold text-center mt-2">Why PH Fitness?</h1>
            <p className="text-center text-slate-400 text-sm mt-2">
              Offers top-quality products designed to enhance your athletic
              performance. We prioritize innovation and functionality in every
              item we offer. You receive reliable and durable gear
            </p>
          </div>
        </div>
        {/* <div className=" z-10 mt-[-170px]">
          <img
            className="rounded-lg "
            src="https://space.xtemos.com/demo/athletex/wp-content/uploads/sites/33/2024/04/athletex-sport-au-top-img-opt.jpg"
            alt=""
          />
        </div> */}
      </div>
    );
  };
  
  export default AboutUsIntro;