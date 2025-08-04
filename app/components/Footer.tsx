"use client"

import { Gamepad2, Twitter, Instagram, Linkedin, Github } from "lucide-react"

const socialLinks = [
  { icon: Twitter, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Github, href: "#" },
]

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-6 md:mb-0">
            <div className="w-10 h-10 bg-gradient-to-r from-magenta-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Gamepad2 className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              COADAL
            </span>
          </div>
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.href} className="text-gray-400 hover:text-magenta-400 transition-colors">
                <link.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Coadal. All rights reserved. Unleashing Gaming Potential.</p>
        </div>
      </div>
    </footer>
  )
}
