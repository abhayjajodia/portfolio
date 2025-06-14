import React from 'react'
import { TypeAnimation } from 'react-type-animation';

export default function TextAnimation() {
  return (
    <TypeAnimation
      sequence={[
        'Web Developer', // First string to animate
        3000, // Wait 2 seconds before starting the next animation
        'UI/UX Designer', // Second string to animate
        3000, // Wait 2 seconds before starting the next animation
        'React Enthusiast', // Third string to animate
        3000, // Wait 2 seconds before starting the next animation
      ]}
      wrapper="span" // Element to wrap the animation in
      speed={10} // Speed of typing in milliseconds
      repeat={Infinity} // Repeat the animation indefinitely
      className="text-6xl font-bold" // Custom styles for the animated text
    />
  )
}
