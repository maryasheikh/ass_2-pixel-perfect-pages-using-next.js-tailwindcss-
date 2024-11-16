import Image from "next/image";
import image from '../public/image.jpg';

export default function About () {
  return (
    <div>
      <section className="flex justify-evenly h-svh bg-pink-50">
        <div className='flex justify-center text-center items-center'>

          <Image src="/image.jpg" alt="profile pic " width={1600} height={1600} 
          className="object-cover rounded-full ml-10" />
        </div>

        <div className='flex justify-evenly text-center items-center '>
          <h1 className='text-blue-400 text-4xl font-serif font-bold'>ABOUT <br />

          <span className='text-pink-500 font-semibold '>ME!</span>
          <p className='text-sm text-blue-900 mt-10 w-4/5 mx-auto leading-loose break-words tracking-wide space-y-2 '>I am a dedicated student with a keen interest in both front-end and back-end development. As part of the Governor’s Generative AI Initiative and the Presidential Cloud Native Generative AI Program, I am exploring the latest advancements in technology.

          I specialize in HTML, CSS, TypeScript, JavaScript, Next.js, React, and Tailwind CSS.

          With hands-on experience in multiple projects, I am eager to apply my skills to real-world challenges and continuously enhance my expertise as a developer.

          I find joy in solving complex problems through coding and am committed to delivering exceptional quality in every project I take on.

          </p></h1>

        </div>
      </section>
    </div>
  );
}
