import { lazy, Suspense, useState } from "react";
import { Helmet } from "react-helmet-async";

// Lazy load components
const LazyLoadedComponent = lazy(() =>
  import("../components/lazyLoadedComp/lazyLoadedComp.jsx")
);

export const LazyLoadedExample = () => {
  const SideImage = () => {
    return (
      <div>
        <svg
          id="sw-js-blob-svg"
          viewBox="0 0 80 80"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
              <stop
                id="stop1"
                stopColor="rgba(248, 117, 55, 1)"
                offset="0%"
              ></stop>
              <stop
                id="stop2"
                stopColor="rgba(251, 168, 31, 1)"
                offset="100%"
              ></stop>
            </linearGradient>

            <mask id="mask2" x="0" y="0" width="200px" height="80">
              <path
                fill="white"
                d="M17.1,-19.7C24.2,-18.4,33.4,-16.1,38.6,-10.2C43.8,-4.2,45,5.4,41.2,12.3C37.4,19.1,28.6,23.2,20.9,27.8C13.2,32.4,6.6,37.4,1,36C-4.6,34.6,-9.2,26.8,-13.3,21C-17.5,15.3,-21.2,11.7,-24.9,6.6C-28.6,1.5,-32.2,-5.1,-30.1,-9.2C-28,-13.4,-20.2,-15.2,-14.2,-16.9C-8.2,-18.6,-4.1,-20.3,0.5,-20.9C5,-21.5,10,-21.1,17.1,-19.7Z"
                width="100%"
                height="100%"
                transform="translate(35 35)"
                strokeWidth="0"
                style={{ transition: "all 0.3s ease 0s" }}
                stroke="url(#sw-gradient)"
              ></path>
            </mask>
          </defs>

          <image
            href="https://img.freepik.com/free-photo/business-colleagues-watching-content-laptop_74855-1142.jpg?w=740&t=st=1697600234~exp=1697600834~hmac=2ac909afd4683cc7cabe56c2e1d25e422fe2cc3a02d7023bee119c84bd56a6b1"
            height="100%"
            width="100%"
            style={{ mask: "url(#mask2)" }}
          ></image>
        </svg>
      </div>
    );
  };

  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <Helmet>
        <title>Lazy Loading Example | My Website</title>
        <meta
          name="description"
          content=" An example of lazy loading for SEO."
        />
      </Helmet>
      <div className="border border-white px-[100px] min-h-screen  w-full text-b-100 flex flex-col justify-center">
        <section className="my-1 text-4xl">
          <h1>ABOUT Kennedy...</h1>
        </section>

        <section className="grid grid-cols-5 border">
          <div className="col-span-2 flex flex-col justify-center">
            <SideImage />
            <div className="w-full flex flex-col justify-center items-center gap-4">
              <h1 className="text-lg">
                {"An Overview of the company's History"}
              </h1>

              <button
                onClick={() => {
                  setShowDetails(true);
                }}
                className="bg-indigo-600 text-white py-4 px-8 text-center"
              >
                Explore More
              </button>
            </div>
          </div>

          {/* Lazy Loaded section */}
          {showDetails && (
            <Suspense
              fallback={
                <div className="w-full flex justify-center items-center text-xl">
                  Loading...
                </div>
              }
            >
              <LazyLoadedComponent />
            </Suspense>
          )}
        </section>
      </div>
    </>
  );
};

export default LazyLoadedExample;
