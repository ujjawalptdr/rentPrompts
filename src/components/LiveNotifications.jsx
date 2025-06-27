import { motion, AnimatePresence } from "framer-motion"
import { Users, Clock, Trophy } from "lucide-react"
import { useState, useEffect } from "react"

export default function LiveNotifications() {
    const [currentNotification, setCurrentNotification] = useState(null)

    const notifications = [
        {
            id: 1,
            icon: Users,
            message: "Sarah just enrolled in AI Fundamentals",
            color: "text-green-400",
        },
        {
            id: 2,
            icon: Clock,
            message: "Free webinar starting in 2 hours",
            color: "text-orange-400",
        },
        {
            id: 3,
            icon: Trophy,
            message: "Marcus earned $2,500 this month",
            color: "text-yellow-400",
        },
        {
            id: 4,
            icon: Users,
            message: "150+ students enrolled today",
            color: "text-cyan-400",
        },
        {
            id: 5,
            icon: Trophy,
            message: "Emily launched her AI business",
            color: "text-purple-400",
        },
    ]

    useEffect(() => {
        const showNotification = () => {
            const randomNotification = notifications[Math.floor(Math.random() * notifications.length)]
            setCurrentNotification(randomNotification)

            setTimeout(() => {
                setCurrentNotification(null)
            }, 5000)
        }

        const interval = setInterval(showNotification, 8000) // after 8 sec the another call is made.
        // setTimeout(showNotification, 5000) // First notification will dissapear in next 3 seconds.

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <AnimatePresence>
                {currentNotification && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        className="relative bg-gray-800/90 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4 max-w-xs shadow-lg"
                    >
                        <div className="flex items-center space-x-3">
                            <currentNotification.icon className={`h-5 w-5 ${currentNotification.color}`} />
                            <p className="text-sm text-white">{currentNotification.message}</p>
                        </div>

                        <motion.div
                            initial={{ width: '100%' }}
                            animate={{ width: '0%' }}
                            transition={{ duration: 5 }}
                            className="absolute h-px bg-cyan-500 bottom-0 left-0 rounded-2xl w-full"></motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
