'use client'
import { useEffect } from "react";
import gsap from "gsap"
import Image from "next/image";
import { Button } from "~/components/ui/button";
import Link from "next/link";

const LandingPage = () => {
    useEffect(()=>{
        gsap.fromTo(
          '#main',
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, onComplete: () => {
              gsap.to('#main', { opacity: 1, duration: 1 }); // Set opacity to 1 after animation
          }}
        );
        gsap.fromTo(
          '#description',
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, onComplete: () => {
              gsap.to('#description', { opacity: 1, duration: 1 }); // Set opacity to 1 after animation
          }}
        );
        gsap.fromTo(
          '#image',
          { opacity: 0, y: 0 },
          { opacity: 1, y: 0, duration: 2, onComplete: () => {
              gsap.to('#image', { opacity: 1, duration: 2 }); // Set opacity to 1 after animation
          }}
        );
        gsap.fromTo(
          '#startButton',
          { opacity: 0, y: 0 },
          { opacity: 1, y: 0, duration: 2, onComplete: () => {
              gsap.to('#startButton', { opacity: 1, duration: 2 }); // Set opacity to 1 after animation
          }}
        );
      },[])
      return (
        <div className="bg-black flex lg:flex-row flex-col items-center justify-center h-auto lg:h-[100vh] ">
          <div className="flex flex-col items-center lg:items-start justify-start gap-10 p-20  text-white">
            <div>
              <h1 id="main" className="opacity-0 lg:text-7xl text-5xl font-bold">
                Cogni<span className="text-zinc-800">Craft</span>
              </h1>
            </div>
            <p id="description" className="opacity-0">
            Unleash your inner quiz master with CogniCraft – where every click is a quest and every answer unlocks a new adventure. Dive into a universe of endless possibilities, where curiosity meets creation, and every question sparks excitement.
            </p>
            <Link href="/api/auth/signin">
            <Button id="startButton" className="opacity-0" variant="secondary">Get Started</Button>
            </Link>
          </div>
          <div id="image" className="opacity-0">
          <Image width={1000} height={1000} alt="gif" src="https://64.media.tumblr.com/e641d2cb453fea42f74afcedd9b83b77/tumblr_p2pwjlWYrw1w3y4ilo1_r1_500.gif"/>
          </div>
        </div>
      );
}

export default LandingPage