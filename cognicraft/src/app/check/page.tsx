import React from "react";
import Container, {containerData} from "~/components/container";
import NavBar from "~/components/NavBar";
import { Button } from "~/components/ui/button";
import {getServerAuthSession} from "../../server/auth"
import { AreaChart, Brain, BookUser } from "lucide-react";
import Link from "next/link";


const containerContent:containerData[] = [
  {
    heading: "Quiz Generation",
    description: "Transform content, engage users effortlessly with interactive quizzes via uploading",
    icon: <Brain/>
  },
  {
    heading: "Class Creation",
    description: "Manage classes, students effortlessly, fostering collaboration, enhancing learning",
    icon: <BookUser/>
  },
  {
    heading: "Progress Tracking",
    description: "Join classes, track quiz attempts, analyze performance, enhancing learning outcomes",
    icon: <AreaChart/>
  }
]

const page = async() => {
  const user = await getServerAuthSession();
  return (
    <>
      <NavBar userName={user?.user.name} email={user?.user.email} image={user?.user.image}/>
      <div className="flex h-auto lg:h-[90vh] flex-col items-center justify-center gap-12 bg-black p-5 text-white lg:p-10">
      <center>
        <h1 className="text-5xl font-bold text-white lg:text-7xl mb-10">
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
          {containerContent.map((content)=>{
            return <Link href="/generate-quiz">
            <Container heading={content.heading} description={content.description} icon={content.icon}/>
            </Link>
          })}
        </div>
      </div>
    </>
  );
};

export default page;
