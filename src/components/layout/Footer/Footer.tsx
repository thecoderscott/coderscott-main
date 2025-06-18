const Footer = () => {
  return (
    <p className="text-xs md:text-lg font-sans text-typography-header text-center py-6 border-t-2 border-brand-secondary w-full">
      &copy; {new Date().getFullYear()} coderscott - Built with Next.js & Coffee 🍵.
    </p>
  )
}

export default Footer
