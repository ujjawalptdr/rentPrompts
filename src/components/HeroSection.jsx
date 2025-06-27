import { motion } from "framer-motion"
import { ArrowRight, Play, Sparkles } from "lucide-react"
import StarsBg from "./StarsBg"
import { Link } from "react-scroll"

export default function HeroSection() {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    }

    const statsVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1,
            },
        },
    }

    const statItemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5 },
        },
    }

    const stats = [
        { number: 9, suffix: "K+", label: "Students", color: "text-cyan-400" },
        { number: 200, suffix: "+", label: "Courses", color: "text-purple-400" },
        { number: 98, suffix: "%", label: "Success Rate", color: "text-pink-400" },
    ]

    const hoverBorderColor = (stat) =>
        stat.color.includes("cyan")
            ? "rgba(6, 182, 212, 0.5)"
            : stat.color.includes("purple")
                ? "rgba(139, 92, 246, 0.5)"
                : "rgba(236, 72, 153, 0.5)";



    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 sm:pt-10 pb-6 sm:pb-0 overflow-hidden">
            {/* ye heBackground with Multiple Layers */}
            <div className="absolute animate-gradient-delayed inset-0 bg-gradient-to-tr from-cyan-900/20 via-transparent to-purple-900/30"></div>
            <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-blue-900/10 to-cyan-900/20"></div>

            {/* Animated Gradient Orbs */}
            <div className="absolute top-1/4 left-1/3.5 w-96 h-96 bg-gradient-to-r from-cyan-500/50 to-blue-500/10 rounded-full blur-3xl  animate-pulse"></div>
            <div
                className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"
                style={{ animationDelay: "1s" }}
            ></div>
            <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/20 to-cyan-500/5 rounded-full blur-3xl animate-pulse"
                style={{ animationDelay: "2s" }}
            ></div>

            {/* Stars Background */}
            <div className="md:block hidden">
                <StarsBg count={200} />
            </div>
            <div className="block md:hidden">
                <StarsBg count={100} />
            </div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="h-full w-full bg-[linear-gradient(rgba(6,182,212,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.4)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
            </div>

            {/* just to make focus in center */}
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-slate-900/50"></div>

            {/* Content */}
            <motion.div
                className="relative z-10 max-w-4xl mx-auto px-4 text-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Badge */}
                <motion.div
                    className="mt-3 inline-flex items-center space-x-2 bg-[#1f2937B3] backdrop-blur-sm border border-[#06b6d480] animate-bounce-slow rounded-full px-4 py-2 mb-6 sm:mb-8 shadow-lg shadow-cyan-900"

                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Sparkles className="h-4 w-4 text-cyan-400" />
                    <span className="text-xs sm:text-sm text-cyan-300">Turn Ideas into Revenue by Bridging Human-AI Collaboration</span>
                </motion.div>

                <motion.h1
                    className="text-4xl sm:text-5xl  font-bold text-white mb-4 sm:mb-6 break-words"
                    variants={itemVariants}
                >
                    <motion.span
                        className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 text-transparent bg-clip-text"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        The Next GenAI Platform
                    </motion.span>
                    <motion.span
                        className="block text-white mt-2 drop-shadow-lg"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        Shape the Future Together
                    </motion.span>
                </motion.h1>

                <motion.p
                    className="text-sm sm:text-base md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-xl mx-auto px-2 drop-shadow-sm"
                    variants={itemVariants}
                >
                    A community-driven Gen AI marketplace and builder platform focused on human and AI collaboration. We aim
                    to revolutionize content creation and automation for individuals and businesses.
                </motion.p>

                {/* Enhanced CTA Buttons */}
                <motion.div
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-10 sm:mb-12 px-4"
                    variants={itemVariants}
                >
                    <motion.div
                        className="py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] text-white font-semibold rounded-lg hover:from-[#8b5cf6] hover:to-[#06b6d4] transition duration-100 flex items-center justify-center space-x-2 shadow-lg cursor-pointer"

                        whileHover={{ scale: 1.05, y: -2, boxShadow: "0 10px 40px rgba(139, 92, 246, 0.3)" }}
                        transition={{ type: "spring" }}
                    > <Link to="courses" smooth={true} duration={300}>
                            <span>Start Learning</span>
                        </Link>

                        <ArrowRight className="h-5 w-5" />
                    </motion.div>

                    <motion.button
                        className="py-3 sm:px-8 sm:py-4 border border-[#4b556380] bg-[#1f29374D] backdrop-blur-sm text-gray-300 font-semibold rounded-lg hover:border-[#06b6d4] hover:text-cyan-400 hover:bg-[#1f293780] transition-all duration-100 flex items-center justify-center space-x-2 cursor-pointer"

                        whileHover={{ scale: 1.05, y: -2, borderColor: "rgba(6, 182, 212, 0.8)" }}

                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                        <Play className="h-5 w-5" />
                        <span>Explore More</span>
                    </motion.button>
                </motion.div>

                {/* Enhanced Stats */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-md sm:max-w-lg mx-auto px-4"
                    variants={statsVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="text-center p-4 rounded-xl bg-[#1f293733] backdrop-blur-sm border border-[#3741514D]"

                            variants={statItemVariants}
                            whileHover={{
                                scale: 1.1,
                                y: -5,
                                backgroundColor: "rgba(31, 41, 55, 0.4)",
                                borderColor: hoverBorderColor(stat),
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            viewport={{ once: true }}
                        >
                            <div className={`text-xl md:text-3xl font-bold ${stat.color} drop-shadow-lg`}>
                                {stat.number}
                                {stat.suffix}
                            </div>
                            <div className="text-gray-400 text-sm">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    )
}
