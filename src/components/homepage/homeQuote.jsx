// © 2025 kerem.ai · All rights reserved.
// The file contains the quote section of the homepage.

import React from 'react';
import { motion } from 'framer-motion';
import './styles/homeQuote.css';

const HomeQuote = () => {
    const quoteVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div 
            className="quote-container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={quoteVariants}
        >
            <div className="quote-content">
                <div className="quote-text">
                    "You miss 100% of the shots you don't take"
                </div>
                <div className="quote-attribution">
                    <div className="original-author">- Wayne Gretzky</div>
                    <div className="secondary-author">- Michael Scott</div>
                    <div className="your-attribution">- Kerem</div>
                </div>
            </div>
        </motion.div>
    );
};

export default HomeQuote;
