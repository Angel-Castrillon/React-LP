import headerLogo from "../assets/images/header-logo.svg"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { navItems } from "../constants/Constants.jsx"

const Navbar = () => {

    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)

    const toggleMobileDrawer = () => {
        setMobileDrawerOpen(!mobileDrawerOpen)
    }
    
    return(
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center shrink-0">
                        <img className="h-10 w-10 mr-2" src={headerLogo} alt="header-logo" />
                        <span className="text-xl tracking-tight">Technicaly</span>
                    </div>
                    <ul className="hidden lg:flex ml-14 space-x-12">
                        {navItems.map((item, index) => (
                            <li className="text-black" key={index}>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>

                    <div className="hidden lg:flex justify-center space-x-12 items-center">
                        <a href="#" className="py-2 px-3 border rounded-md">Sign in</a>
                        <a href="#" className="gradient-background animate-colorwave text-neutral-100 py-2 px-3 rounded-md">New account</a>
                    </div>
                </div>
                <div className="lg:hidden md:flex flex-col justify-end">
                    <button onClick={toggleMobileDrawer}>
                        {mobileDrawerOpen ? <X /> : <Menu />}
                    </button>
                </div>          
            </div>

            {mobileDrawerOpen && (
                <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                    <ul>
                        {navItems.map((item, index) => (
                            <li className="text-black" key={index}>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="flex space-x-6">
                        <a href="#" className="py-2 px-3 border rounded-md">
                            Sign in
                        </a>
                        <a href="#" className="gradient-background animate-colorwave text-neutral-100 py-2 px-3 rounded-md">
                            New account
                        </a>
                    </div>
                </div>
            )}
            
        </nav>
    
    )

}

export default Navbar
