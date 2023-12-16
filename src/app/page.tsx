import Carousel from "@/components/carousel";
import { MapPin, Send, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  const gigs = [
    {
      id: 0,
      title: "I will setup google analytics, gtm, tag manager, ga4",
      link: "https://www.fiverr.com/s/284azX",
      price: 15,
      images: [
        "/images/gigs/gig1/image1.webp",
        "/images/gigs/gig1/image2.webp",
        "/images/gigs/gig1/image3.webp",
        "/images/gigs/gig1/image4.webp",
        "/images/gigs/gig1/image5.webp",
        "/images/gigs/gig1/image6.webp",
        "/images/gigs/gig1/image7.webp",
        "/images/gigs/gig1/image8.webp",
        "/images/gigs/gig1/image9.webp",
        "/images/gigs/gig1/image10.webp",
        "/images/gigs/gig1/image11.webp",
        "/images/gigs/gig1/image12.webp",
        "/images/gigs/gig1/image13.webp",
        "/images/gigs/gig1/image14.webp",
        "/images/gigs/gig1/image15.webp",
      ],
    },
    {
      id: 1,
      title: "I will setup and manage your facebook, instagram ads campaigns",
      link: "https://www.fiverr.com/s/ZeGxvm",
      price: 210,
      images: [
        "/images/gigs/gig2/image1.webp",
        "/images/gigs/gig2/image2.webp",
        "/images/gigs/gig2/image3.webp",
        "/images/gigs/gig2/image4.webp",
      ],
    },
    {
      id: 2,
      title: "I will setup facebook pixel conversion API via GTM",
      link: "https://www.fiverr.com/s/1p4Lge",
      price: 15,
      images: [
        "/images/gigs/gig3/image1.webp",
        "/images/gigs/gig3/image2.webp",
        "/images/gigs/gig3/image3.webp",
        "/images/gigs/gig3/image4.webp",
        "/images/gigs/gig3/image5.webp",
        "/images/gigs/gig3/image6.webp",
        "/images/gigs/gig3/image7.webp",
        "/images/gigs/gig3/image8.webp",
      ],
    },
    {
      id: 3,
      title:
        "I will setup or fix google analytics 4, ga4 ecommerce tracking,ga4",
      link: "https://www.fiverr.com/s/r1qRqy",
      price: 10,
      images: [
        "/images/gigs/gig1/image1.webp",
        "/images/gigs/gig4/image2.webp",
        "/images/gigs/gig4/image3.webp",
        "/images/gigs/gig4/image4.webp",
        "/images/gigs/gig4/image5.webp",
        "/images/gigs/gig4/image6.webp",
        "/images/gigs/gig4/image7.webp",
        "/images/gigs/gig4/image8.jpg",
        "/images/gigs/gig4/image9.webp",
        "/images/gigs/gig4/image10.webp",
        "/images/gigs/gig4/image11.webp",
        "/images/gigs/gig4/image12.webp",
        "/images/gigs/gig4/image13.webp",
        "/images/gigs/gig4/image14.webp",
        "/images/gigs/gig4/image15.webp",
      ],
    },
    {
      id: 4,
      title:
        "I will setup and efficiently manage your google ads adwords PPC campaigns",
      link: "https://www.fiverr.com/s/KqRpAk",
      price: 150,
      images: [
        "/images/gigs/gig5/image1.webp",
        "/images/gigs/gig5/image2.webp",
        "/images/gigs/gig5/image3.webp",
      ],
    },
  ];
  const skills = [
    "Social Media Marketing",
    "Facebook Ads",
    "On-page SEO",
    "Google Tag Manager",
    "Google Analytics",
    "Digital Marketing",
    "SEO",
    "Social Media Management",
    "Wordpress",
    "Shopify",
    "Custom Web Development",
    "Google Ads",
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
                Yeatiqur Rahman&nbsp;
                <span className="font-semibold text-gray-400 text-lg">
                  @yeatiqur97
                </span>
              </h2>
              <div className="flex items-center gap-[5px]">
                <Star className="stroke-[1.3px] fill-black w-4 h-4" />
                5.0 (<span className="underline">474</span>)&nbsp;
                {/* <span className="font-medium">Label 2</span> */}
              </div>
              <div className="flex items-center justify-start gap-2">
                <MapPin className="w-4 h-4 stroke-[1.3px]" /> Bangladesh
              </div>
            </div>
          </div>
          <div className="max-w-[600px]">
            <h3 className="text-lg font-bold">About</h3>
            <p>
              Hello, I am a digital marketing professional with over two years
              of experience. I have worked for ad agencies as a Digital
              Marketer, responsible for setting up and executing ad campaigns. I
              earned a LinkedIn assessment badge on google analytics. I&apos;m
              in the top 30% of 492k people who took this assessment. I look
              forward to working with you.
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
          <div className="w-[300px] ml-auto p-5 rounded-md border flex flex-col gap-2">
            <h3>
              <span className="font-bold">Know more</span> about Yeatiqur Rahman
            </h3>
            <Link
              href="https://thesociomatic.com"
              passHref={true}
              target="_blank"
            >
              <button className="px-6 py-[10px] rounded-lg bg-black font-semibold text-white hover:bg-black/80 active:bg-black/60 w-full flex items-center justify-center gap-2">
                <Send className="w-4 h-4" />
                Visit Fiverr Profile
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
            <div className="w-[300px] group" key={item.id}>
              <Carousel images={item.images}/>
              <div className="flex flex-col items-start justify-start gap-4 pt-4">
                <Link href={item.link}>
                  <h4 className="font-medium hover:underline cursor-pointer">
                    {item.title}
                  </h4>
                </Link>
                <p>Starting from US$15</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
