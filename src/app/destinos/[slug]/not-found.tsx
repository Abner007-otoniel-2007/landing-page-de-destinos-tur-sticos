import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-20 text-center">
      <h1 className="text-2xl font-bold">Destino no encontrado</h1>
      <Link href="/" className="text-blue-500 hover:underline mt-4 inline-block">
        Volver al inicio
      </Link>
    </main>
  )
}