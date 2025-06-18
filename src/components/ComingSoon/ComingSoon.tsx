export default function ComingSoon({ title = 'Coming Soon' }) {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl sm:text-5xl font-bold text-color-typography-header mb-4">{title}</h1>
      <p className="text-lg sm:text-xl text-color-typography-body max-w-prose">
        This page isn’t quite ready yet — check back soon for updates!
      </p>
    </section>
  )
}
