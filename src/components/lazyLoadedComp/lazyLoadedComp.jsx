const LazyLoadedComp = () => {
  return (
    <div className="col-span-3 flex flex-col justify-center">
      <div>
        <h1>
          Born in 2000, AB type living in USA. We provide on-screen design for
          websites and apps, as well as front-end implementation. We will
          continue to pursue a wide range of expressions and better code by
          pursuing our “likes”.
        </h1>
      </div>

      <section>
        <div className="flex">
          <div className="flex flex-col">
            <span className="flex items-center">
              <h1 className="text-4xl">3+</h1>
              <p>
                Years <br /> experience...
              </p>
            </span>
            <p>
              Hello there! My name is Lilon Macwan. I am a web designer &
              developer, and Im very passionate and dedicated to my work.
            </p>
          </div>
          <div className="flex flex-col">
            <span>
              <h1>15+</h1>
              <p>
                Clients <br /> experience...
              </p>
            </span>
            <p>
              Hello there! My name is Lilon Macwan. I am a web designer &
              developer, and Im very passionate and dedicated to my work.
            </p>
          </div>
        </div>
        <div className="w-full">
          <p>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
            sed sit ultrices et sed metus sollicitudin.”
          </p>
        </div>
      </section>
    </div>
  );
};

export default LazyLoadedComp;
