import gallery1 from "../../../assets/Happy-Clients1.jpg"
import gallery2 from "../../../assets/Happy-Clients2.jpg"
import gallery3 from "../../../assets/Happy-Clients3.jpg"
import gallery4 from "../../../assets/Happy-Clients4.avif"
import gallery5 from "../../../assets/Happy-Clients5.jpg"
import gallery6 from "../../../assets/Happy-Clients6.jpg"
import gallery7 from "../../../assets/Happy-Clients7.avif"
import gallery8 from "../../../assets/Happy-Clients8.jpg"
import gallery9 from "../../../assets/Happy-Clients9.jpg"
import gallery10 from "../../../assets/Happy-Clients10.jpg"
import gallery11 from "../../../assets/Happy-Clients11.jpg"


const Gallery = () => {
    return (
      <div className="py-8">
      <h2 className="text-5xl text-center font-bold mb-10 russo-one-regular text-gray-700 mt-16">
          Happy Clients
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:mt-16 w-11/12 mx-auto">
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={gallery1}
                alt=""
              />
            </div>
             <div>
              <img
                className="h-auto max-w-full rounded-lg"
                 src={gallery2}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={gallery3}
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={gallery4}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
               src={gallery5}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
               src={gallery6}
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={gallery7}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
              src={gallery8}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={gallery9}
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={gallery10}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={gallery11}
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
               src={gallery3}
                alt=""
              /> 
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Gallery;






