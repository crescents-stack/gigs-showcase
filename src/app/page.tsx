import Carousel from "@/components/carousel";
import { MapPin, Rocket, Send, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  const gigs = [];
  for (let i = 0; i < 16; i++) {
    gigs.push(i + 1);
  }
  const skills = [
    "SEO",
    "Google Analytics",
    "Digital Marketing",
    "Wordpress",
    "Shopify",
    "Custom Web Development",
    "UI/UX",
  ];
  return (
    <>
      <div className="section container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col gap-10">
          <div className="flex flex-wrap gap-10">
            <Image
              src="/images/yeatiq.webp"
              alt="yeatiqs-image"
              height={1000}
              width={1000}
              className="w-[150px] h-[160px] rounded-md"
            />
            <div className="flex flex-col items-start justify-start gap-2">
              <h2 className="font-bold text-2xl">
                Yeatiqur Rahman{" "}
                <span className="font-semibold text-gray-400 text-lg">
                  @yeatiqur97
                </span>
              </h2>
              <div className="flex items-center gap-[5px]">
                <Star className="stroke-[1.3px] fill-black w-4 h-4" />
                5.0 (<span className="underline">1k+</span>)&nbsp;
                <span className="font-medium">Label 2</span>
              </div>
              <div className="flex items-center justify-start gap-2">
                <MapPin className="w-4 h-4 stroke-[1.3px]" /> Bangladesh
              </div>
            </div>
          </div>
          <div className="max-w-[600px]">
            <h3 className="text-lg font-bold">About</h3>
            <p>
              Yeatiq, the driving force behind Sociomatic, serves as the CEO and
              is recognized as a top-rated seller in the digital landscape. With
              an unwavering commitment to excellence, Yeatiq brings experience
              and expertise to the forefront.
            </p>
          </div>
          <div className="max-w-[600px]">
            <h3 className="text-lg font-bold">Skills</h3>
            <ul className="flex flex-wrap gap-2">
              {skills.map((item) => {
                return (
                  <li key={item} className="px-4 py-1 rounded-full border ">
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div>
          <div className="w-[300px] p-5 rounded-md border flex flex-col gap-2">
            <h3>
              <span className="font-bold">Know more</span> about Yeatiqur Rahman
            </h3>
            <Link
              href="https://thesociomatic.com"
              passHref={true}
              target="_blank"
            >
              <button className="px-6 py-[10px] rounded-lg bg-black font-semibold text-white hover:bg-black/80 active:bg-black/60 w-full flex items-center justify-center gap-2">
                <Send className="w-4 h-4"/>Visit Fiverr Profile
              </button>
            </Link>
            <Link
              href="https://thesociomatic.com"
              passHref={true}
              target="_blank"
            >
              <button className="px-6 py-[10px] rounded-lg font-semibold border border-black hover:opacity-[90%] w-full">
                Visit Company Website
              </button>
            </Link>

            <p className="text-gray-400">Presented by thesociomatic.com</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center">All My Gigs</h2>
      </div>
      <div className="pb-32 pt-10 container mx-auto flex flex-wrap justify-center items-center gap-10">
        {gigs.map((item) => {
          return (
            <div className="w-[300px] group" key={item}>
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
    </>
  );
};

export default Home;
