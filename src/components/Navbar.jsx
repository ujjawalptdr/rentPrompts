import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import rentprompts from "../assets/colored-rentprompts.png"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-scroll"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // Animation variants
    const navItemVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.3 },
        },
    }

    const mobileMenuVariants = {
        hidden: {
            opacity: 0,
            height: 0,
            transition: { duration: 0.3 },
        },
        visible: {
            opacity: 1,
            height: "auto",
            transition: { duration: 0.3, staggerChildren: 0.1 },
        },
    }

    const mobileItemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.3 },
        },
    }

    return (
        <motion.nav
            className={`fixed top-1 left-1/2 transform -translate-x-1/2 z-50 rounded-lg max-w-7xl w-[95%]  
    ${scrolled ? "backdrop-blur-3xl opacity-95 border-b border-cyan-500/20 bg-gray-900/60" : "bg-transparent"}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: "easeIn" }}
        >
            <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <motion.div
                        className="flex items-center space-x-2 group cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                        <div className="relative">
                            <img
                                src={rentprompts || "/placeholder.svg"}
                                alt="RentPrompts Logo"
                                className="h-10 w-10 transition-all duration-300 group-hover:drop-shadow-lg"
                            />
                            <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-lg group-hover:bg-cyan-300/30 transition-all duration-300"></div>
                        </div>
                        <span className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                            <a href="./">RentPrompts</a>
                        </span>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:block">
                        <div className="ml-10 flex items-baseline  space-x-2 xl:space-x-8">
                            {["Home", "Courses", "About", "Testimonials", "FAQs"].map((item, index) => (
                                <motion.a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}

                                    className="relative text-gray-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors duration-300 group"
                                    variants={navItemVariants}
                                    initial="hidden"
                                    animate="visible"
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -2 }}
                                >
                                    {item}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="hidden lg:block">
                        <Link
                            className="relative px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500 font-medium rounded-lg hover:rounded-full overflow-hidden group  duration-300 cursor-pointer"
                            to="courses" smooth={true} duration={200} >
                            <span className="relative z-10">Get Started</span>
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className=" lg:hidden">
                        <motion.button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <AnimatePresence mode="wait">
                                {isOpen ? (
                                    <motion.div
                                        key="close"
                                        initial={{ rotate: 0 }}
                                        animate={{ rotate: 180 }}
                                        exit={{ rotate: 0 }}
                                        transition={{ duration: 0.3 }}

                                    >
                                        <X className="h-6 w-6" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="menu"
                                        initial={{ rotate: 180 }}
                                        animate={{ rotate: 0 }}
                                        exit={{ rotate: 180 }}
                                        transition={{ duration: 0.3 }}

                                    >
                                        <Menu className="h-6 w-6" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="lg:hidden bg-gray-800 backdrop-blur-md border-b border-cyan-800 overflow-hidden"
                        variants={mobileMenuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {["Home", "Courses", "About", "Testimonials", "FAQs"].map((item) => (
                                <Link
                                    to={item.toLowerCase()}
                                    smooth={true}
                                    duration={300}
                                    key={item}
                                    onClick={() => setIsOpen(false)}>
                                    <motion.div
                                        className="block px-3 py-2 text-gray-300 hover:text-cyan-400  transition-colors duration-300 rounded-md hover:bg-gray-600"
                                        variants={mobileItemVariants}
                                        whileHover={{ x: 10 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {item}
                                    </motion.div>

                                </Link>
                            ))}
                            <Link to="courses" smooth={true} duration={200}>
                                <motion.button
                                    className="w-full mt-4 px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium rounded-lg"
                                    variants={mobileItemVariants}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => setIsOpen(false)}
                                ><span>Get Started</span>

                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav >
    )
}
