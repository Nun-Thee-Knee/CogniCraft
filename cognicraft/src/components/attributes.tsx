'use client'
import { AreaChart, Brain, BookUser } from "lucide-react";
import Container, { containerData } from './container';
import Link from "next/link";
import { useEffect } from "react";
import gsap from "gsap";

const containerContent: containerData[] = [
    {
      heading: "Quiz Generation",
      description:
        "Transform content, engage users effortlessly with interactive quizzes via uploading",
      icon: <Brain />,
    },
    {
      heading: "Class Creation",
      description:
        "Manage classes, students effortlessly, fostering collaboration, enhancing learning",
      icon: <BookUser />,
    },
    {
      heading: "Progress Tracking",
      description:
        "Join classes, track quiz attempts, analyze performance, enhancing learning outcomes",
      icon: <AreaChart />,
    },
  ];
  
const Attributes = () => {
    useEffect(()=>{
        gsap.fromTo(
            '#attribute1',
            { opacity: 0, x: -50, y: 50 },
            { opacity: 1, x: 0, y: 0, duration: 1, onComplete: () => {
                gsap.to('#attribute1', { opacity: 1, duration: 1 }); // Set opacity to 1 after animation
            }}
          );
        gsap.fromTo(
            '#attribute2',
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, onComplete: () => {
                gsap.to('#attribute2', { opacity: 1, duration: 1 }); // Set opacity to 1 after animation
            }}
          );
        gsap.fromTo(
            '#attribute3',
            { opacity: 0, x: 50, y: 50 },
            { opacity: 1,x: 0, y: 0, duration: 1, onComplete: () => {
                gsap.to('#attribute3', { opacity: 1, duration: 1 }); // Set opacity to 1 after animation
            }}
          );
    },[])
  return (
    <div
          id="container"
          className="flex flex-col items-center justify-center gap-5 lg:w-[800px] lg:flex-row"
        >
          <Link id="attribute1" className="opacity-0" href="/generate-quiz">
                <Container
                  heading={containerContent[0]?.heading as string}
                  description={containerContent[0]?.description as string}
                  icon={containerContent[0]?.icon}
                />
              </Link>
              <Link id="attribute2" className="opacity-0" href="/classrooms">
                <Container
                  heading={containerContent[1]?.heading as string}
                  description={containerContent[1]?.description as string}
                  icon={containerContent[1]?.icon}
                />
              </Link>
              <Link id="attribute3" className="opacity-0" href="/generate-quiz">
                <Container
                  heading={containerContent[2]?.heading as string}
                  description={containerContent[2]?.description as string}
                  icon={containerContent[2]?.icon}
                />
              </Link>
        </div>
  )
}

export default Attributes