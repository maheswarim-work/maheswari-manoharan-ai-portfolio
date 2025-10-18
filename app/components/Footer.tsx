export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-teal-100 to-teal-50 text-gray-800 py-8 border-t border-teal-200">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Maheswari Manoharan. All rights reserved.
        </p>
        <p className="text-xs text-gray-600 mt-2">
          Built with Next.js, TypeScript, and Tailwind CSS
        </p>
      </div>
    </footer>
  )
}