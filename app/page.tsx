"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowBigRight } from "lucide-react";
import Link from "next/link";
import 'animate.css';

import React from "react";

const Home = () => {
  return (
    <section className="h-screen w-screen flex items-center justify-center px-4">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:max-w-screen-xl gap-8">
        <div className="text-center lg:text-left space-y-8 flex-1">
          <Badge variant="outline" className="cursor-crosshair animate__animated animate__zoomIn text-sm py-2">
            <span className="mr-2 text-primary">
              <Badge>New</Badge>
            </span>
            <span>Design is out now!</span>
          </Badge>

          <div className="flex flex-col items-center lg:items-start text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold animate__animated animate__fadeInUp">
            <h1>
              Experience the
              <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                Bobby&apos;s
              </span>
              landing page
            </h1>
          </div>


          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground animate__animated animate__fadeInUp">
            {`Please click the provided buttons to see the particular UI Pages.`}
          </p>

          <div className="flex flex-wrap flex-col md:flex-row items-center justify-center lg:justify-start gap-4 animate__animated animate__fadeInLeft">
            <Link href={"/dashboard"}>
              <Button className="w-full px-9 sm:w-fit font-bold group/arrow flex items-center">
                Get Dashboard
                <ArrowBigRight className="ml-2 group-hover/arrow:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <Button
              asChild
              variant="secondary"
              className="w-fit px-10 sm:w-auto font-bold"
            >
              <Link href="/signin">Go to Sign-In Page</Link>
            </Button>

            <Button
              asChild
              variant="secondary"
              className="w-fit px-14 sm:w-auto font-bold"
            >
              <Link href="https://github.com/bhagesh01/Codeant-Ai-Bhagesh/tree/main" target="_blank">See on Github</Link>
            </Button>
          </div>
        </div>

        {/* <div className="relative group mt-10 lg:mt-0 flex-1 max-w-[90%] sm:max-w-[70%] lg:max-w-none">
          <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-full h-24 sm:h-32 lg:h-80 bg-primary/50 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
        </div> */}
      </div>
    </section>
  );
};

export default Home;
