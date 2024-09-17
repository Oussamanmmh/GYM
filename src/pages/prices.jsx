import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function Prices() {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 0.1], [0, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

   
    return (
        <div style={{ height: '200vh' }} className=" flex flex-col justify-center gap-20"> {/* Ensure the parent container is scrollable */}
            <motion.div className="p-20 relative z-40 pt-40" style={{ y, opacity }} >
                <motion.div 
                    className="text-center space-y-10"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-3xl font-bold mb-4">Gym Membership Prices</h1>
                    <ul className="list-disc list-inside text-start">
                        <li>Basic Plan: $20/month</li>
                        <li>Standard Plan: $35/month</li>
                        <li>Premium Plan: $50/month</li>
                    </ul>
                </motion.div>
                <motion.div 
                    className="flex flex-col md:flex-row justify-around mt-8 gap-10 "
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <motion.div 
                        className="border border-gray-300 rounded-lg p-6 w-full md:w-1/3 flex flex-col"
                        whileHover={{ scale: 1.05 }}
                    >
                        <h2 className="text-2xl uppercase font-oswald font-semibold mb-2">Basic Plan</h2>
                        <p className="mb-4">Price: $20/month</p>
                        <ul className="list-disc list-inside flex-grow">
                            <li>Access to gym equipment</li>
                            <li>1 personal training session</li>
                            <li>Access to locker room</li>
                            <li>Access to group classes</li>
                        </ul>
                        <button className="mt-4 bg-purple-600 text-white py-2 px-4 rounded">Get Started</button>
                    </motion.div>
                    <motion.div 
                        className="border border-gray-300 rounded-lg p-6 w-full md:w-1/3 flex flex-col"
                        whileHover={{ scale: 1.05 }}
                    >
                        <h2 className="text-2xl uppercase font-oswald font-semibold mb-2">Standard Plan</h2>
                        <p className="mb-4">Price: $35/month</p>
                        <ul className="list-disc list-inside flex-grow flex flex-col justify-end">
                            <li>Access to gym equipment</li>
                            <li>5 personal training sessions</li>
                            <li>Access to locker room</li>
                            <li>Access to group classes</li>
                        </ul>
                        <button className="mt-4 bg-purple-600 text-white py-2 px-4 rounded">Get Started</button>
                    </motion.div>
                    <motion.div 
                        className="border border-gray-300 rounded-lg p-6 w-full md:w-1/3 flex flex-col"
                        whileHover={{ scale: 1.05 }}
                    >
                        <h2 className="text-2xl uppercase font-oswald font-semibold mb-2">Premium Plan</h2>
                        <p className="mb-4">Price: $50/month</p>
                        <ul className="list-disc list-inside flex-grow">
                            <li>Access to gym equipment</li>
                            <li>Unlimited personal training sessions</li>
                            <li>Access to locker room</li>
                            <li>Access to group classes</li>
                            <li>Access to spa and sauna</li>
                        </ul>
                        <button className="mt-4 bg-purple-600 text-white py-2 px-4 rounded">Get Started</button>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
}