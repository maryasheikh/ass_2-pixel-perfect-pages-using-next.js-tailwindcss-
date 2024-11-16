import Link from "next/link";


export default function Navbar() {
    return(
         <div className ="flex justify-evenly text-center  text-white bg-black font-serif font-semibold text-2xl">
    
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/skills">Skills</Link> 
      <Link href="/contact">Contact</Link>
      </div>
    
    );
}