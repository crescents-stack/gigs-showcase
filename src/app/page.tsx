import Carousel from "@/components/carousel";
import { Star } from "lucide-react";

const Home = () => {
  const gigs = [];
  for (let i = 0; i < 16; i++) {
    gigs.push(i + 1);
  }
  return (
    <div>
      <div className="section container mx-auto flex flex-wrap justify-center items-center gap-10">
        {gigs.map((item) => {
          return (
            <div className="w-[320px] group" key={item}>
              <Carousel />
              <div className="flex flex-col items-start justify-start gap-4 pt-4">
                <h4 className="font-medium hover:underline cursor-pointer">
                  I will make wordpress SEO fixes for google rankings
                </h4>
                <div className="flex items-center gap-[5px]">
                  <Star className="stroke-[1.3px] fill-black w-4 h-4" />
                  5.0 <span className="text-gray-400">(1k+)</span>
                </div>
                <p>From US$15</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
