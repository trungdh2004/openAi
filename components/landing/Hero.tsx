"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import Typewriter from "typewriter-effect";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className="text-center">
      <div>
        <div className={cn("relative isolate px-6 pt-14", "lg:px-8")}>
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>

          <div
            className={cn("mx-auto max-w-2xl py-32", "sm:py-48", "lg:py-56")}
          >
            <div className={cn("hidden", "sm:mb-8 sm:flex sm:justify-center")}>
              <div
                className={
                  "rounded-full px-3 py-1 text-sm leading-6 text-gray-600 border"
                }
              >
                Brainfast - Unleash the power of AI
              </div>
            </div>
            <div className="text-center">
              <h1
                className={cn(
                  "text-4xl leading-8 font-bold tracking-tight text-gray-900 ",
                  "sm:text-6xl"
                )}
              >
                Untimate Ai
                <span>
                  <Typewriter
                    options={{
                      strings: ["Assistan", "Chatbot", "Generator"],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </h1>
              <p
                className={cn(
                  "mt-10 items-center justify-center gap-x-6",
                  "lg:flex"
                )}
              >
                All-in-one flatfrom to generate Ai content and start making
                money in minutes
              </p>
              <div
                className={cn(
                  "mt-10 items-center justify-center gap-x-6",
                  "lg:flex"
                )}
              >
                <Link href="/dashboard">
                  <Button
                    className={cn(
                      "gradient-btn w-full mb-8",
                      "lg:w-auto lg:mb-0"
                    )}
                  >
                    Try Brainfast Free
                  </Button>
                </Link>
                <a
                  href="#features"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Discover Brainfast AI <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
