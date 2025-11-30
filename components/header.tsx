"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-primary">
              TaskFlow
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-foreground hover:text-primary transition">
              Features
            </Link>
            <Link href="#pricing" className="text-foreground hover:text-primary transition">
              Pricing
            </Link>
            <Link href="#testimonials" className="text-foreground hover:text-primary transition">
              Testimonials
            </Link>
            <button className="px-6 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition font-medium">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground hover:bg-muted rounded-lg transition"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-border py-4 space-y-4">
            <Link href="#features" className="block text-foreground hover:text-primary transition">
              Features
            </Link>
            <Link href="#pricing" className="block text-foreground hover:text-primary transition">
              Pricing
            </Link>
            <Link href="#testimonials" className="block text-foreground hover:text-primary transition">
              Testimonials
            </Link>
            <button className="w-full px-6 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition font-medium">
              Get Started
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}
