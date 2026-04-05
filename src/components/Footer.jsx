import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (

        <footer className="bg-[#000000] text-white py-4 text-center">
            <p>© 2026 Finance Tracker | All rights reserved | Made with ❤️</p>
            <p className="mt-2">
                <Link className="text-white hover:text-gray-300 mr-4">
                    Privacy Policy
                </Link>
                <Link className="text-white hover:text-gray-300">
                    Contact Us
                </Link>
            </p>
        </footer>
    )
}

export default Footer