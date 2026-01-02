import { icons } from "lucide-react";

export const CodeExamples = {
  "App.jsx": `
    import { useState } from "react";

    function Counter() {
    const [count, setCount] = useState(0);
    
    return ( 
    <div>
    <h1>Count: {count}</h1>
    <button onClick={() => setCount(count + 1)}>+</button>
    <button onClick={() => setCount(count - 1)}>-</button>
    </div>
    );
    }
    
    export default Counter;`,

  "Hero.jsx": `
    const Hero = () => {
    
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [activeTab, setActiveTab] = useState("App.jsx")

    useEffect(() => {
    function handleMouseMove(e) {
    setMousePosition({ x: e.clientX, y: e.clientY })
    console.log(e.clientX, e.clientY)
    }
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
    window.removeEventListener('mousemove', handleMouseMove)
    }

    }, []);

    return ( ... );
    }

    export default Hero;`,

  "Navbar.jsx": `
    import React, { useState } from 'react'
    import { X } from 'lucide-react'

    function Navbar() {

    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)

    return ( ... );
    }

    export default Navbar`,
};

export const floatingCards = {
  "App.jsx": {
    bgColor: "bg-blue-500/20",
    iconColor: "text-blue-400",
    textColor: "text-blue-200",
    contentColor: "text-blue-300",
    icon: "AI",
    title: "Smart Completions",
    content: "AI-powdered code suggestions in real-time",
  },
  "Hero.jsx": {
    bgColor: "bg-purple-500/20",
    iconColor: "text-purple-400",
    textColor: "text-purple-200",
    contentColor: "text-purple-300",
    icon: "⚡",
    title: "Auto Animation",
    content: "Dynamic typing Effects generated automatically",
  },
  "Navbar.jsx": {
    bgColor: "bg-emerald-500/20",
    iconColor: "text-emerald-400",
    textColor: "text-emerald-200",
    contentColor: "text-emerald-300",
    icon: "🔍",
    title: "Smart Search",
    content: "intelligent code navigation and search capabilities",
  },
};
