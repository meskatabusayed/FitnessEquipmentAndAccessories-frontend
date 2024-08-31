// const Gallery = () => {
//     return (
//       <div className="py-8">
//       <h2 className="text-5xl text-center font-bold mb-10 russo-one-regular text-gray-700 mt-16">
//           Happy Clients
//         </h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:mt-16 w-11/12 mx-auto">
//           <div className="grid gap-4">
//             <div>
//               <img
//                 className="h-auto max-w-full rounded-lg"
//                 src="./src/assets/Gym Equipment.jpg"
//                 alt=""
//               />
//             </div>
//             <div>
//               <img
//                 className="h-auto max-w-full rounded-lg"
//                  src="./src/assets/high quality.avif"
//                 alt=""
//               />
//             </div>
//             <div>
//               <img
//                 className="h-auto max-w-full rounded-lg"
//                 src="./src/assets/high quality.avif"
//                 alt=""
//               />
//             </div>
//           </div>
//           <div className="grid gap-4">
//             <div>
//               <img
//                 className="h-auto max-w-full rounded-lg"
//                 src="./src/assets/high quality.avif"
//                 alt=""
//               />
//             </div>
//             <div>
//               <img
//                 className="h-auto max-w-full rounded-lg"
//                src="./src/assets/high quality.avif"
//                 alt=""
//               />
//             </div>
//             <div>
//               <img
//                 className="h-auto max-w-full rounded-lg"
//                src="./src/assets/high quality.avif"
//                 alt=""
//               />
//             </div>
//           </div>
//           <div className="grid gap-4">
//             <div>
//               <img
//                 className="h-auto max-w-full rounded-lg"
//                 src="./src/assets/high quality.avif"
//                 alt=""
//               />
//             </div>
//             <div>
//               <img
//                 className="h-auto max-w-full rounded-lg"
//               src="./src/assets/high quality.avif"
//                 alt=""
//               />
//             </div>
//             <div>
//               <img
//                 className="h-auto max-w-full rounded-lg"
//                 src="./src/assets/high quality.avif"
//                 alt=""
//               />
//             </div>
//           </div>
//           <div className="grid gap-4">
//             <div>
//               <img
//                 className="h-auto max-w-full rounded-lg"
//                 src="./src/assets/high quality.avif"
//                 alt=""
//               />
//             </div>
//             <div>
//               <img
//                 className="h-auto max-w-full rounded-lg"
//                 src="./src/assets/high quality.avif"
//                 alt=""
//               />
//             </div>
//             <div>
//               <img
//                 className="h-auto max-w-full rounded-lg"
//                src="./src/assets/high quality.avif"
//                 alt=""
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   export default Gallery;





const itemData = [
  {
    img: "./src/assets/Happy-Clients1.jpg",
    
    rows: 2,
    cols: 2,
  },
  {
    img: "./src/assets/Happy-Clients2.jpg",
    
  },
  {
    img: "./src/assets/Happy-Clients3.jpg",
    
  },
  {
    img: "./src/assets/Happy-Clients4.avif",
    
    cols: 2,
  },
  {
    img: "./src/assets/Happy-Clients5.jpg",
    
    cols: 2,
  },
  {
    img: "./src/assets/Happy-Clients6.jpg",
    
    rows: 2,
    cols: 2,
  },
  {
    img: "./src/assets/Happy-Clients7.avif",
    
  },
  {
    img: "./src/assets/Happy-Clients8.jpg",
    
  },
  {
    img: "./src/assets/Happy-Clients9.jpg",
    
    rows: 2,
    cols: 2,
  },
  {
    img: "./src/assets/Happy-Clients10.jpg",
    
  },
  {
    img: "./src/assets/Happy-Clients11.jpg",
    
  },
  {
    img: "./src/assets/Happy-Clients3.jpg",
    
    cols: 2,
  },
];

const Gallery = () => {
  return (
    <div className="py-8">
      <h2 className="text-5xl text-center font-bold mb-10 russo-one-regular text-gray-700 mt-16">
          Happy Clients
        </h2>
    <div className="grid grid-cols-4 gap-2 p-4 max-w-lg mx-auto">
      {itemData.map((item) => (
        <div
          key={item.img}
          className={`relative overflow-hidden ${
            item.cols ? `col-span-${item.cols}` : ""
          } ${item.rows ? `row-span-${item.rows}` : ""}`}
        >
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2">
            {item.title}
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Gallery;
