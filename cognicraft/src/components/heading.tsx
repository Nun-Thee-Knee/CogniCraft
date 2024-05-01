'use client'
import { useEffect } from "react"
import gsap from "gsap"

const Heading = () => {
    useEffect(()=>{
        gsap.fromTo(
            '#heading',
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, onComplete: () => {
                gsap.to('#heading', { opacity: 1, duration: 1 }); // Set opacity to 1 after animation
            }}
          );
        gsap.fromTo(
            '#description',
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, onComplete: () => {
                gsap.to('#description', { opacity: 1, duration: 1 }); // Set opacity to 1 after animation
            }}
          );
    },[])
  return (
    <div>
      <h1 id="heading" className="opacity-0 mb-10 text-5xl font-bold text-white lg:text-7xl">
           Unleash your craftmenship
          </h1>
        <p id="description" className="text-white opacity-0">
            Explore the following sections from creating quizzes to joining classes. Our class creation feature encourages the
            teaching faculties to create classrooms and post the MCQ assignments. User can create MCQ based on a prompt or by uploading a pdf in the first section. 
          </p>
    </div>
  )
}

export default Heading