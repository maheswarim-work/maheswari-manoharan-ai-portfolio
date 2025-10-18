export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-100 to-slate-50 text-gray-800 py-8 border-t border-slate-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center space-y-2">
          <p className="text-sm text-center text-gray-700">
            © {new Date().getFullYear()} Maheswari Manoharan. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Built with Next.js, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}