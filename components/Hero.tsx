import { CiSearch } from "react-icons/ci";

const alphabetArray = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g',
    'h', 'i', 'j', 'k', 'l', 'm', 'n',
    'o', 'p', 'q', 'r', 's', 't', 'u',
    'v', 'w', 'x', 'y', 'z'
];
  
export default function Hero() {
    return (
        <section className="max-w-3xl mx-auto text-center pt-20 px-4">
            <h1 className="font-extrabold text-3xl">Cyber Glossary</h1>
            <p className="mt-5">All definitions in cybersecurity, clearly explained. Browse definitions and sharpen your understanding to advance your skills and career.</p>
            <div className="flex items-center gap-2 mt-10 border border-[#585858] rounded-md p-2">
                <CiSearch />
                <input className="w-full" type="search" name="search" id="search" placeholder="what are you looking for" />
            </div>
        </section>
    )
}