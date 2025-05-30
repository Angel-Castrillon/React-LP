import { testimonials } from "../constants/Constants"

const Testimonial = () => {
  return (
    <div className="mt-20 tracking-wide"> 
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
            What are people saying?
        </h2>
        <div className="flex flex-wrap justify-center">
            {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
                    <div className="p-10 border border-neutral-700 rounded-xl">
                        <p className="mb-8 ">{testimonial.text}</p>
                        <div>
                            <img src={testimonial.icon} alt={testimonial.name} className="w-12 h-12 mr-6 rounded-full border border-neutral-300" />
                            <div>
                                <h6 className="text-neutral-400 tracking-tight">{testimonial.name}</h6>
                            <span className="text-sm font-normal italic text-neutral-600">{testimonial.company}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Testimonial

