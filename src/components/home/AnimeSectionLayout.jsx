function AnimeSectionLayout({ data }) {
  return (
    <div className="mx-auto max-w-[1000px] px-4 py-8 sm:px-10 sm:py-10 md:py-20">
      <div className="flex items-center justify-center gap-2 md:gap-4">
        <img
          src={data.logo}
          className="relative -top-6 hidden h-6 rotate-[-45deg] md:block md:h-10"
          alt=""
        />
        <h1 className="font-tertiary mb-8 text-center text-4xl font-bold tracking-widest sm:text-5xl md:text-6xl lg:text-8xl">
          {data.title}
        </h1>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:gap-8">
        <div className="flex-1 md:flex-2 lg:flex-1">
          <img
            src={data.img}
            className="h-[300px] w-full rounded-4xl object-cover object-center shadow-md md:h-auto"
            alt=""
          />
        </div>
        <div className="flex flex-1 flex-col gap-4 md:flex-3">
          <p className="italic md:text-lg lg:text-xl">{data.description}</p>
          <button className="bg-secondary hover:bg-secondary/80 mt-2 px-10 py-2 text-white transition-all duration-300 ease-in-out md:self-start">
            See more
          </button>
        </div>
      </div>
    </div>
  );
}

export default AnimeSectionLayout;
