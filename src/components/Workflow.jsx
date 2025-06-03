import { CheckCircle  } from "lucide-react"
import codeImg from "../assets/images/customer1.jpeg"
import { checklistItems } from "../constants/Constants"
import { useRef, useEffect, useState } from "react"

export const Workflow = () => {
    const [startAnimation, setStartAnimation] = useState(false)
    const imgRef = useRef(null)
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setStartAnimation(true)
                }
            })
        })
        observer.observe(imgRef.current)
    }, [])


  return (
    <div className="mt-20">
        <h2 className="text-3xl sm:text-5xl text-center lg:text-6xl mt-6 mb-6 tracking-wide ">Accelerate your{" "}
            <span className="gradient-text animate-colorwave"> coding workflow.</span>
        </h2>
        <div className="flex flex-wrap justify-center">
            <div ref={imgRef}  className="fading-img p-2 w-full lg:w-1/2 z-20">
                <img src={codeImg} className="rounded-2xl border border-blue-300 shadow-blue-800" alt="code-img" />
            </div>
            <div className="pt-12 w-full lg:w-1/2">
                {checklistItems.map((item, index) => (
                    <div key={index} className={`flex mb-12 items-center opacity-0 ${startAnimation ? 'animate-move' : ''}`}>
                       <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                        <CheckCircle />
                        </div>
                        <div>
                            <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                            <p className="text-md text-neutral-">{item.description}</p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    </div>
  )
}

export default Workflow

