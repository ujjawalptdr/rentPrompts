import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { useState } from "react"
import testAvatar1 from "../assets/testAvatar1.jpeg";
import testAvatar2 from "../assets/testAvatar2.jpeg";
import testAvatar3 from "../assets/testAvatar3.jpeg";

export default function Testimonials() {
    // const [isHovered, setIsHovered] = useState(false);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    }

    const testimonials = [
        {
            id: 1,
            name: "Sarah Chen",
            role: "AI Content Creator",
            image: testAvatar2,
            description:
                "RentPrompts Academy transformed my career. I went from zero AI knowledge to earning $5K+ monthly creating AI applications.",
            rating: 5,
        },
        {
            id: 2,
            name: "Marcus Rodriguez",
            role: "Marketing Manager",
            image: testAvatar1,
            description:
                "The courses are incredible! I automated 80% of our content creation and improved campaign performance by 300%.",
            rating: 5,
        },
        {
            id: 3,
            name: "Emily Watson",
            role: "Freelance Consultant",
            image: testAvatar3,
            description:
                "From beginner to consulting Fortune 500 companies on AI. The business applications course was a game-changer.",
            rating: 5,
        },
        {
            id: 4,
            name: "David Kim",
            role: "Software Developer",
            image: testAvatar1,
            description:
                "Built and launched 3 successful AI apps on RentPrompts. Made back my investment 10x over with a thriving side business!",
            rating: 5,
        },

    ]

    // Duplicate testimonials for seamless loop
    const duplicatedTestimonials = [...testimonials, ...testimonials]

    return (
        <section id='testimonials' className="relative py-16 bg-gray-900 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-slate-800/50 to-gray-900"></div>

            <motion.div
                className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                {/* Header */}
                <motion.div className="text-center mb-12" variants={itemVariants}>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        <span className="bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">
                            Student Success Stories
                        </span>
                    </h2>
                    <p className="text-lg text-gray-300">See what our graduates are achieving</p>
                </motion.div>

                {/* Auto-Scrolling Testimonials */}
                <div className="relative "
                // onMouseEnter={() => { setIsHovered(true) }}
                // onMouseLeave={() => setIsHovered(false)}
                >
                    <motion.div
                        className="flex space-x-6"

                        animate={{
                            x: [0, -((320 + 24) * testimonials.length)], // 320px card width + 24px gap
                        }}
                        transition={{
                            x: {
                                repeat: Number.POSITIVE_INFINITY,
                                repeatType: "loop",
                                duration: 50, // Reduced duration for smoother experience
                                ease: "linear",
                            },
                        }}
                    >
                        {duplicatedTestimonials.map((testimonial, index) => (
                            <motion.div
                                key={`${testimonial.id}-${index}`}
                                className="relative p-6 rounded-xl bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 w-80 flex-shrink-0"
                                whileHover={{ scale: 1.02, y: -5 }}
                            >
                                {/* Quote Icon */}
                                <Quote className="h-6 w-6 text-cyan-400 mb-4 opacity-60" />

                                {/* Rating */}
                                <div className="flex items-center space-x-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                                    ))}
                                </div>

                                {/* Description */}
                                <p className="text-gray-300 mb-6 leading-relaxed">{testimonial.description}</p>

                                {/* Profile */}
                                <div className="flex items-center space-x-3">
                                    <img
                                        src={testimonial.image || "/placeholder.svg"}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full object-cover border-2 border-gray-600"
                                    />
                                    <div>
                                        <h4 className="font-semibold text-white">{testimonial.name}</h4>
                                        <p className="text-sm text-gray-400">{testimonial.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}
