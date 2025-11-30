import Link from "next/link"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="text-2xl font-bold text-primary mb-4 block">
              TaskFlow
            </Link>
            <p className="text-muted-foreground text-sm">
              Empowering teams to work smarter with AI-powered automation and seamless collaboration.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Security
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Integrations
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-primary transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Cookies
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Compliance
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© 2025 TaskFlow. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="text-muted-foreground hover:text-primary transition">
              <Twitter size={20} />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition">
              <Github size={20} />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition">
              <Linkedin size={20} />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition">
              <Mail size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
