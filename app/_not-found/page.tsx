export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-16">
      <div className="max-w-xl rounded-3xl border border-slate-200 bg-slate-50 p-10 text-center shadow-sm">
        <p className="text-sm uppercase tracking-[0.4em] text-sky-600">Page not found</p>
        <h1 className="mt-6 text-3xl font-bold text-slate-900">This page could not be found.</h1>
        <p className="mt-4 text-slate-600">Return to the homepage to continue exploring the portfolio.</p>
        <a href="/" className="mt-8 inline-flex rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-700">
          Back to Home
        </a>
      </div>
    </div>
  )
}
