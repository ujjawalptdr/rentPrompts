import { motion } from "framer-motion"
import { Clock, Users, Star, ArrowRight, BookOpen, Zap, Target, Code, Brain, Rocket } from "lucide-react"

export default function Courses() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
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

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5 },
        },
    }

    const programs = [
        {
            id: 1,
            title: "AI Prompt Fundamentals",
            duration: "4 weeks",
            level: "Beginner",
            students: "2.5K+",
            rating: 4.9,
            description:
                "Master the basics of AI prompting with hands-on exercises. Learn to craft effective prompts for ChatGPT, Claude, and other AI models.",
            features: ["Basic Prompt Structure", "Common Techniques", "Practical Exercises", "Community Support"],
            price: "₹99",
            icon: BookOpen,
            gradient: "from-blue-500 to-cyan-500",
            bgGradient: "from-blue-500 to-cyan-500",
            borderColor: "border-blue-700",
        },
        {
            id: 2,
            title: "Advanced Prompt Engineering",
            duration: "6 weeks",
            level: "Intermediate",
            students: "1.8K+",
            rating: 4.8,
            description:
                "Dive deep into advanced techniques like chain-of-thought, few-shot learning, and prompt optimization for professional applications.",
            features: ["Chain-of-Thought", "Few-Shot Learning", "Prompt Optimization", "Real Projects"],
            price: "₹199",
            icon: Zap,
            gradient: "from-purple-500 to-pink-500",
            bgGradient: "from-purple-500 to-pink-500",
            borderColor: "border-purple-700",
        },
        {
            id: 3,
            title: "AI Business Applications",
            duration: "8 weeks",
            level: "Advanced",
            students: "1.2K+",
            rating: 4.9,
            description:
                "Learn to implement AI solutions in business contexts. Create automated workflows and monetize your AI skills.",
            features: ["Business Use Cases", "Workflow Automation", "ROI Optimization", "Client Projects"],
            price: "₹299",
            icon: Target,
            gradient: "from-emerald-500 to-teal-500",
            bgGradient: "from-emerald-500 to-teal-500",
            borderColor: "border-emerald-700",
        },
        {
            id: 4,
            title: "AI App Development",
            duration: "10 weeks",
            level: "Advanced",
            students: "950+",
            rating: 4.7,
            description:
                "Build and deploy AI-powered applications. Learn to integrate APIs, create user interfaces, and launch on RentPrompts marketplace.",
            features: ["API Integration", "UI Development", "Marketplace Launch", "Revenue Strategies"],
            price: "₹399",
            icon: Code,
            gradient: "from-orange-500 to-red-500",
            bgGradient: "from-orange-500 to-red-500",
            borderColor: "border-orange-700",
        },
        {
            id: 5,
            title: "AI Content Creation Mastery",
            duration: "5 weeks",
            level: "Intermediate",
            students: "2.1K+",
            rating: 4.8,
            description:
                "Specialize in creating high-quality content using AI. Perfect for marketers, writers, and content creators.",
            features: ["Content Strategy", "Multi-format Creation", "Brand Voice", "Content Calendar"],
            price: "₹149",
            icon: Brain,
            gradient: "from-indigo-500 to-purple-500",
            bgGradient: "from-indigo-500 to-purple-500",
            borderColor: "border-indigo-700",
        },
        {
            id: 6,
            title: "AI Entrepreneur Bootcamp",
            duration: "12 weeks",
            level: "Expert",
            students: "680+",
            rating: 4.9,
            description:
                "Complete program to build and scale an AI-powered business. From idea to profitable venture with mentorship included.",
            features: ["Business Planning", "Market Research", "Scaling Strategies", "1-on-1 Mentorship"],
            price: "₹599",
            icon: Rocket,
            gradient: "from-yellow-500 to-orange-500",
            bgGradient: "from-yellow-500 to-orange-500",
            borderColor: "border-yellow-700",
        },
    ]

    const getLevelColor = (level) => {
        switch (level) {
            case "Beginner":
                return "text-green-900 bg-green-300 border-green-300 "
            case "Intermediate":
                return "text-yellow-900 bg-yellow-300 border-yellow-300"
            case "Advanced":
                return "text-orange-900 bg-orange-300 border-orange-300"
            case "Expert":
                return "text-white bg-indigo-500 border-indigo-500"
            default:
                return "text-gray-900 bg-gray-300 border-gray-300"
        }
    }

    return (
        <section id="courses" className="relative py-12 sm:py-16 md:py-20 bg-gray-900">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-slate-800/50 to-gray-900"></div>

            {/* bg grid lines */}
            <div className="absolute inset-0 opacity-5">
                {/* <div className="h-full w-full bg-[linear-gradient(rgba(6,182,212,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.3)_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:40px_40px] lg:bg-[size:50px_50px]"></div> */}
                <div className="h-full w-full bg-[linear-gradient(#06b6d44d_1px,transparent_1px),linear-gradient(90deg,#06b6d44d_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:40px_40px] lg:bg-[size:50px_50px]"></div>

            </div>

            <motion.div
                className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                {/* Section Header */}
                <motion.div className="text-center mb-12 sm:mb-16" variants={itemVariants}>
                    <div className="inline-flex items-center space-x-2 bg-gray-800/60 border border-cyan-500/40 rounded-full px-4 py-2 mb-6">
                        <BookOpen className="h-4 w-4 text-cyan-400" />
                        <span className="text-sm text-cyan-300">Our Programs</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                        <span className="block">Choose Your</span>
                        <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">
                            Learning Path
                        </span>
                    </h2>

                    <p className="text-sm sm:text-base md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        From beginner to expert, we have the perfect program to accelerate your AI journey and unlock new
                        opportunities.
                    </p>
                </motion.div>

                {/* Programs Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {programs.map((program) => (
                        <motion.div
                            key={program.id}
                            className={`relative p-6 rounded-2xl border ${program.borderColor} ${program.bgGradient} backdrop-blur-sm group hover:border-opacity-50 transition-all duration-300 `}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            whileHover={{ scale: 1.02, y: -5 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            {/* Program Icon & Level */}
                            <div className="flex items-start justify-between mb-5">
                                <div className={`p-3 rounded-xl bg-gradient-to-r ${program.gradient} shadow-lg`}>
                                    <program.icon className="h-6 w-6 text-white" />
                                </div>
                                <div className={`px-3 py-1 rounded-full border text-xs font-medium ${getLevelColor(program.level)}`}>
                                    {program.level}
                                </div>
                            </div>

                            {/* Program Title */}
                            <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 leading-tight">
                                {program.title}
                            </h3>

                            {/* Program Stats */}
                            <div className="flex items-center space-x-4 mb-4 text-xs text-gray-400">
                                <div className="flex items-center space-x-1">
                                    <Clock className="h-3 w-3" />
                                    <span>{program.duration}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <Users className="h-3 w-3" />
                                    <span>{program.students}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <Star className="h-3 w-3 text-yellow-400 fill-current" />
                                    <span>{program.rating}</span>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-sm text-gray-300 mb-5 leading-relaxed">{program.description}</p>

                            {/* Features */}
                            <div className="mb-6">
                                <h4 className="text-sm font-semibold text-white mb-3">What you'll learn:</h4>
                                <ul className="space-y-2">
                                    {program.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center space-x-2 text-xs text-gray-300">
                                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Price & Enroll button */}
                            <div className="flex items-center justify-between">
                                <div className="text-2xl font-bold text-white">
                                    {program.price}
                                    <span className="text-sm text-gray-400 font-normal">/course</span>
                                </div>
                                <motion.button
                                    className={`px-4 py-2 bg-gradient-to-r ${program.gradient} text-white font-semibold rounded-lg hover:shadow-lg  flex items-center space-x-2 text-sm cursor-pointer`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <span>Enroll Now</span>
                                    <ArrowRight className="h-4 w-4" />
                                </motion.button>
                            </div>

                            {/* Hover Glow Effect */}
                            <div
                                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${program.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                            //pointer-event-none  it too usefull as it allow the mouse hover click to pass through to behinf the card it wil not restrict it 
                            ></div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div className="text-center mt-12" variants={itemVariants}>
                    <p className="text-sm text-gray-400 mb-4">
                        Can't decide? Get personalized recommendations based on your goals.
                    </p>
                    <motion.button
                        className="px-6 py-3 border border-cyan-500/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 hover:border-cyan-500 transition-all duration-300 flex items-center justify-center space-x-2 mx-auto text-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span>Get Program Recommendations</span>
                        <ArrowRight className="h-4 w-4" />
                    </motion.button>
                </motion.div>
            </motion.div>
        </section>
    )
}
