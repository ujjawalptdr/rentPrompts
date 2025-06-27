
import { motion } from "framer-motion"
import { AlertTriangle, TrendingUp, Award, TrendingDown } from "lucide-react"
import rentprompts from "../assets/colored-rentprompts.png"

import { DollarSign, Clock, Target, Users } from "lucide-react"

const stats = [
    { number: "10K+", label: "Active Creators", color: "text-cyan-400" },
    { number: "$2M+", label: "Creator Earnings", color: "text-purple-400" },
    { number: "50K+", label: "AI Assets Sold", color: "text-pink-400" },
]
// i add it here as its geetign time to load when comes from another file
const problems = [
    {
        icon: AlertTriangle,
        title: "Wasting Money on Bad Prompts",
        description:
            "Buying expensive prompts that don't work, burning through API credits with poor results, and getting frustrated with inconsistent outputs.",
        color: "text-red-400",
        bgColor: "bg-red-500/10",
        borderColor: "border-red-500/20",
    },
    {
        icon: Clock,
        title: "Hours of Trial & Error",
        description:
            "Spending countless hours trying to craft the perfect prompt, only to get mediocre results that don't meet your creative vision.",
        color: "text-orange-400",
        bgColor: "bg-orange-500/10",
        borderColor: "border-orange-500/20",
    },
    {
        icon: DollarSign,
        title: "Missing Revenue Opportunities",
        description:
            "Watching others succeed in the AI marketplace while you struggle to create prompts that people actually want to buy.",
        color: "text-yellow-400",
        bgColor: "bg-yellow-500/10",
        borderColor: "border-yellow-500/20",
    },
]

const solutions = [
    {
        icon: Target,
        title: "Master Professional Prompting",
        description:
            "Learn proven frameworks used by top creators to generate stunning AI content that sells for premium prices on RentPrompts marketplace.",
        color: "text-cyan-400",
        bgColor: "bg-cyan-500/10",
        borderColor: "border-cyan-500/20",
    },
    {
        icon: TrendingUp,
        title: "Build a Profitable AI Business",
        description:
            "Create and monetize high-quality prompts, apps, and AI assets that generate consistent income in the booming AI economy.",
        color: "text-purple-400",
        bgColor: "bg-purple-500/10",
        borderColor: "border-purple-500/20",
    },
    {
        icon: Users,
        title: "Join Elite Creator Community",
        description:
            "Connect with successful AI entrepreneurs, get featured on RentPrompts, and become part of the next generation of AI innovators.",
        color: "text-pink-400",
        bgColor: "bg-pink-500/10",
        borderColor: "border-pink-500/20",
    },
]


export default function ProblemTransformation() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.5,
            },
        },
    }
    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.9 },
        },
    }


    return (
        <section id="about" className="relative py-20 bg-gray-900">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800/50 to-gray-900"></div>
            <div className="absolute inset-0 opacity-5">
                <div className="h-full w-full bg-[linear-gradient(rgba(6,182,212,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.3)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
            </div>

            <motion.div
                className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                {/* Section Header */}
                <motion.div className="text-center mb-16" variants={itemVariants}>
                    <div className="inline-flex items-center space-x-2 bg-gray-800/60 border border-cyan-500/40 rounded-full px-4 py-2 mb-6">
                        <AlertTriangle className="h-4 w-4 text-cyan-400" />
                        <span className="text-sm text-cyan-300">The AI Prompting Problem</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                        <span className="block">Stop Struggling with AI</span>
                        <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">
                            Start Profiting from It
                        </span>
                    </h2>

                    <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto">
                        Transform from frustrated AI user to successful creator. Join thousands earning on RentPrompts marketplace
                        with professional-grade prompts and AI applications.
                    </p>
                </motion.div>

                {/* Before & After Comparison */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* BEFORE - Problems */}
                    <motion.div variants={containerVariants}>
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center space-x-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-2 mb-4">
                                <AlertTriangle className="h-4 w-4 text-red-400" />
                                <span className="text-sm text-red-300 font-medium">BEFORE</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Struggling with AI</h3>
                            <p className="text-sm sm:text-base text-gray-400">The frustrating reality most people face</p>
                        </div>

                        <div className="space-y-6"
                        >
                            {problems.map((problem, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className={`p-6 rounded-xl border ${problem.borderColor} ${problem.bgColor} backdrop-blur-sm`}
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="flex items-start space-x-4 p-2">
                                        <div className={`p-3 rounded-lg ${problem.bgColor} border ${problem.borderColor}`}>
                                            <problem.icon className={`h-6 w-6 ${problem.color}`} />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-lg font-semibold text-white mb-2">{problem.title}</h4>
                                            <p className="text-sm sm:text-base text-gray-300">{problem.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Transformation Arrow */}
                    <motion.div className="hidden lg:flex justify-center items-center" variants={itemVariants}>
                        <div className="relative">
                            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center">
                                <TrendingDown className="h-12 w-12 text-white" />
                            </div>
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 blur-lg opacity-30"></div>
                        </div>
                    </motion.div>

                    {/* Transformation Arrow */}
                    <motion.div
                        className="hidden lg:flex justify-center items-center"
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}>

                        <div className="relative">
                            <div className="w-24 h-24 rounded-full bg-gradient-to-r bg-gray-100 flex items-center justify-center">
                                <img src={rentprompts} className="h-24 w-24 text-white " />
                            </div>
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 blur-lg opacity-30"></div>
                        </div>
                    </motion.div>

                    {/* AFTER - Solutions */}
                    <motion.div variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}>
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-4">
                                <TrendingUp className="h-4 w-4 text-cyan-400" />
                                <span className="text-sm text-cyan-300 font-medium">AFTER</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Mastering AI</h3>
                            <p className="text-sm sm:text-base text-gray-400">Your transformation with RentPrompts Academy</p>
                        </div>

                        <div className="space-y-6">
                            {solutions.map((solution, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className={`p-6 rounded-xl border ${solution.borderColor} ${solution.bgColor} backdrop-blur-sm`}
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="flex items-start space-x-4 p-2">
                                        <div className={`p-3 rounded-lg ${solution.bgColor} border ${solution.borderColor}`}>
                                            <solution.icon className={`h-6 w-6 ${solution.color}`} />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-lg font-semibold text-white mb-2">{solution.title}</h4>
                                            <p className="text-sm sm:text-base text-gray-300">{solution.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                    </motion.div>


                </div>


                {/* Stats */}
                <motion.div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}>
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="text-center  p-3 sm:p-6 rounded-xl bg-gray-800/30 border border-gray-700/50 backdrop-blur-sm"
                        >
                            <div className={` text-2xl sm:text-3xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
                            <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>

                {/* CTA */}
                <motion.div className="text-center mt-12" variants={itemVariants}>
                    <motion.button
                        className="px-4 py-3 sm:px-6 sm:py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-semibold rounded-lg hover:from-purple-500 hover:to-cyan-500 transition duration-300 flex items-center justify-center space-x-2 mx-auto"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span>Join RentPrompts Academy</span>
                        <Award className="h-5 w-5" />
                    </motion.button>
                    <p className="text-gray-400 text-xs mt-4">Start your AI creator journey today</p>
                </motion.div>
            </motion.div >
        </section >
    )
}
