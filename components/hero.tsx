import { SearchBar } from "./search-bar";

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
        <SearchBar />
      </div>
    </div>
  );
};

export default Hero;
