import { easeIn, easeInOut, easeOut, motion, spring } from "framer-motion"

export default function StarsBg({ count }) {
  // Generate random stars
  const generateStars = (count) => {
    const stars = []
    for (let i = 0; i < count; i++) {
      stars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1, // Size between 1-4px
        opacity: Math.random() * 0.8 + 0.2, // Opacity between 0.2-1
      })
    }
    return stars
  }

  const stars = generateStars(count) // 200 stars

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 100 }}
      transition={{ duration: 2, delay: 0.3 }}
      className="absolute inset-0 overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute bg-gray-200 rounded-full "
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
          }}
        />
      ))}
    </motion.div>
  )
}
