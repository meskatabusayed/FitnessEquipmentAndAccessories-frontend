import { useNavigate } from "react-router-dom";
import ErrorPage from "../components/ui/global/ErrorPage";
import ProgressBar from "../components/ui/global/ProgressBar";
import Category from "../components/ui/Products/Catergory";
import ClearFilterButton from "../components/ui/Products/ClearFilterButton";
import SearchBar from "../components/ui/Products/SearchBar";
import Sorting from "../components/ui/Products/Sorting";
import { clearCategory } from "../redux/features/category/categorySlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import { TProduct } from "../types";
import { useGetProductsQuery } from "../redux/features/product/productApi";
import { useEffect, useState } from "react";

const ProductsPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // Grab category and filter values from local state
  const selectedCategory = useAppSelector(
    (state: RootState) => state.category.category
  );
  const { searchTerm, sort, categories } = useAppSelector(
    (state: RootState) => state.filters
  );

  // State for delayed search term
  const [searchTermDelayed, setSearchTermDelayed] = useState(searchTerm);

  // Set delay for search term
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setSearchTermDelayed(searchTerm);
    }, 3000);

    // Clean up the timeout if the user types again within the delay period
    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  // Fetching data using delayed search term
  const {
    data: products,
    error,
    isLoading,
  } = useGetProductsQuery({
    category: selectedCategory,
    searchTerm: searchTermDelayed, // Use the delayed search term here
    sort,
    categories,
  });

  // View details button functionality
  const handleViewDetails = (id: string) => {
    navigate(`/products/details/${id}`);
  };

  // Reset filters
  const handleFilterReset = () => {
    dispatch(clearCategory());
  };

  // If state is loading, return loading page
  if (isLoading) {
    return (
      <div className="h-full flex justify-center items-center">
        <ProgressBar />
      </div>
    );
  }

  // If state is error, return error page
  if (error) {
    return (
      <div className="h-full flex justify-center items-center">
        <ErrorPage />
      </div>
    );
  }

  return (
    <>
      <div className="bg-slate-600 text-white w-full h-[280px] flex items-center px-5 mb-10">
        <div>
          <h1 className="text-5xl font-bold">P R O D U C T S</h1>
          <p className="font-semibold mt-3">Home / Products</p>
        </div>
      </div>
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8 lg:w-11/12 mx-auto">
          <SearchBar />
          <Category />
          <Sorting />
          <ClearFilterButton />
        </div>
        <h2 className="text-5xl text-center font-bold mb-10 russo-one-regular text-gray-700 mt-16">
          PH Fitness Products
        </h2>
        {selectedCategory && (
          <div className="mb-4 lg:pl-16">
            <span className="lg:text-lg text-gray-500 mr-2">
              Category: {selectedCategory}
            </span>
            <button
              className="inline-block px-8 py-3 bg-gray-600 hover:bg-gray-800 text-white text-lg font-semibold rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105"
              onClick={handleFilterReset}
            >
              Clear Filter
            </button>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-11/12 mx-auto">
          {products?.data?.map((product: TProduct) => (
            <div key={product._id} className="border p-4 bg-white">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover mb-4"
              />
              <h2 className="font-semibold text-gray-800 text-2xl mb-2">
                {product.name}
              </h2>
              <p className="text-gray-600 text-lg md:text-xl lg:text-xl mb-6">
                Price: ${product.price}
              </p>
              <button
                onClick={() => handleViewDetails(product?._id as string)}
                className="inline-block px-5 py-2 bg-gray-600 hover:bg-gray-800 text-white text-lg font-semibold rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
