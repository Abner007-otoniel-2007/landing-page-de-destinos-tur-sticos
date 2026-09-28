import { supabase } from '@/lib/supabase'
import { Destino } from '@/lib/types'
import Link from 'next/link'
import Image from 'next/image'

export default async function departamentoPage({
  params,
}: {
  params: Promise<{ departamento: string }>
}) {
  const { departamento } = await params
  const nombreDepartamento = decodeURIComponent(departamento)

  const { data: destinos, error } = await supabase
    .from('destinos')
    .select('*')
    .eq('departamento', nombreDepartamento)

  if (error) {
    return <p className="text-center text-red-500 mt-10">Error al cargar destinos.</p>
  }

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <Link href="/" className="text-sm text-gray-500 hover:underline">
        ← Volver
      </Link>

      <h1 className="text-3xl font-bold mt-4 mb-8 capitalize">departamento: {nombreDepartamento}</h1>

      {destinos?.length === 0 ? (
        <p className="text-gray-500">No hay destinos en este departamento todavía.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinos?.map((destino: Destino) => (
            <Link
              key={destino.id}
              href={`/destinos/${destino.slug}`}
              className="rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            >
              <div className="relative h-48 w-full">
                <Image src={destino.imagen_url} alt={destino.nombre} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h2 className="font-semibold text-lg">{destino.nombre}</h2>
                <p className="text-sm text-gray-500">{destino.pais}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  )
}