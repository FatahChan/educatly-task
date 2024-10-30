const Hero = () => {
  return (
    <div className="bg-[#F5F7FF] md:py-64 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-[#4B3F72] mb-2">
          Resources and insights
        </h1>
        <p className="text-lg text-[#6B6B6B] mb-6">
          The latest industry news, interviews, technologies, and resources.
        </p>
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-300 rounded-lg py-2 px-4 w-full max-w-md mx-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
