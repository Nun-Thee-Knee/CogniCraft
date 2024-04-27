import React from "react";
import Container from "~/components/container";
import NavBar from "~/components/NavBar";
import { Button } from "~/components/ui/button";

const page = () => {
  return (
    <>
      <NavBar />
      <div className="flex h-auto flex-col items-center justify-center gap-12 bg-black p-5 text-white lg:p-10">
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
          <Container />
          <Container />
          <Container />
        </div>
        <div className="flex gap-x-5">
        <Button variant="secondary">Get Started</Button>
        <Button variant="secondary">Get Started</Button>
        </div>
      </div>
    </>
  );
};

export default page;
