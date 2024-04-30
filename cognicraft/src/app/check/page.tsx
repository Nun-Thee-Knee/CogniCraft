'use client'
import { useEffect, useRef } from "react";
import React from "react";
import Container, { containerData } from "~/components/container";
import NavBar from "~/components/NavBar";
import { getServerAuthSession } from "../../server/auth";
import { AreaChart, Brain, BookUser } from "lucide-react";
import Link from "next/link";
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

const page = async () => {
  const user = await getServerAuthSession();

  return (
    <>
      <NavBar
        userName={user?.user.name}
        email={user?.user.email}
        image={user?.user.image}
      />
      <div className="flex h-auto flex-col items-center justify-center gap-12 bg-black p-5 text-white lg:h-[90vh] lg:p-10">
        <center>
          <h1 ref={textElementRef} id="animated-text" className="mb-10 text-5xl font-bold text-white lg:text-7xl">
            We got you covered
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni labore
            incidunt ipsa temporibus molestias minima quaerat? Quia sapiente quod
            voluptas, corporis autem ea eum. Praesentium id delectus dicta in rem!
          </p>
        </center>
        <div
          id="container"
          className="flex flex-col items-center justify-center gap-10 lg:w-[800px] lg:flex-row"
        >
          {containerContent.map((content) => (
            <Link href="/generate-quiz">
              <Container heading={content.heading} description={content.description} icon={content.icon} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

const textElementRef = useRef(null);

useEffect(() => {
  const textElement = textElementRef.current;

  // Define the GSAP timeline
  const timeline = gsap.timeline({ repeat: -1, yoyo: true });

  // Animate opacity change for smooth transition
  timeline.to(textElement, { duration: 0.5, opacity: 0, ease: "power3.inOut" });

  // Replace text content (optional, can be done outside the timeline)
  textElement.textContent = "This is the new text!"; // Your desired new text

  // Animate opacity back up to reveal the new text
  timeline.to(textElement, { duration: 0.5, opacity: 1, ease: "power3.inOut" });

  // Play the animation
  timeline.play();

}, []); // Empty dependency array, animation runs once on mount

export default page;
