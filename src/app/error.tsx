'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex flex-col items-center justify-center h-64 gap-4">
      <p className="text-red-500">Algo salió mal al cargar la página.</p>
      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-gray-100 rounded hover:bg-gray-200"
      >
        Reintentar
      </button>
    </div>
  )
}