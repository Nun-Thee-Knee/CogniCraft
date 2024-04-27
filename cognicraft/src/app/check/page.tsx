import React from "react";
import Container from "~/components/container";
import NavBar from "~/components/NavBar";

const page = () => {
  return (
    <>
      <NavBar />
      <div className="flex h-auto flex-col items-center justify-center gap-14 bg-black p-5 text-white lg:p-20">
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
      </div>
    </>
  );
};

export default page;
