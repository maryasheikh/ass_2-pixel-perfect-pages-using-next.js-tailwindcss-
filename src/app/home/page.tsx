import Image from "next/image";
import profilee from '../public/profile.png';


export default function Home () {
  return (
    <div>
      <section className="flex justify-evenly h-svh bg-purple-50">
        <div className='flex justify-center text-center items-center'>
          <Image src="/profilee.png" alt="Profile photo" width={1500} height={1500}
          className= " object-cover ml-10" />
        </div>

        <div className="flex justify-evenly text-center items-center ">
          <h1 className='text-blue-400 text-4xl font-serif font-bold'>Hello I Am <br />

          <span className='text-pink-500 font-semibold '>Maya Sheikh</span>
          <p className='text-sm text-blue-900 mt-10 w-4/5 mx-auto leading-loose break-words tracking-wide space-y-2 '>My name is Marya Sheikh, and I specialize as a Full Stack Developer. With a strong foundation in both front-end and back-end technologies, I strive to build seamless and efficient applications. Currently, I am expanding my expertise by delving into Cloud Native technologies and exploring the transformative potential of Generative AI. My journey involves blending these cutting-edge skills to innovate and deliver scalable, intelligent solutions.
          </p></h1>

        </div>
      </section>
    </div>
  );
}
