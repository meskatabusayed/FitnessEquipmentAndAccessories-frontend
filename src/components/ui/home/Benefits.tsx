import benefitImage1 from "../../../assets/high-quality.avif"
import benefitImage2 from "../../../assets/Affordable-Prices.avif"
import benefitImage3 from "../../../assets/Fast-Shipping.jpg"
import benefitImage4 from "../../../assets/Customer-Support.avif"
const benefitsData = [
    {
      title: "High Quality",
      description: "Our products are made with the highest quality materials.",
      image:
      benefitImage1,
    },
    {
      title: "Affordable Prices",
      description: "We offer competitive prices on all our products.",
      image:
      benefitImage2,
    },
    {
      title: "Fast Shipping",
      description: "Enjoy fast and reliable shipping on all orders.",
      image:
      benefitImage3,
    },
    {
      title: "Customer Support",
      description: "Our team is here to help you 24/7 with any inquiries.",
      image:
      benefitImage4,
    },
  ];
  
  const Benefits = () => {
    return (
      <>
        <div className="my-8">
        <h2 className="text-5xl text-center font-bold mb-6 russo-one-regular text-gray-700 mt-16">
          Benefits of our product
        </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-16">
            {benefitsData.map((benefit, index) => (
              <div key={index} className="text-center bg-white border p-4 rounded-lg lg:w-[500px] lg:mx-auto">
                <img
                  src={benefit.image}
                  alt={benefit.title}
                  className="w-full h-72 object-cover mb-4 rounded"
                />
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  };
  
  export default Benefits;