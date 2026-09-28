import { supabase } from '@/lib/supabase'
import { Destino } from '@/lib/types'
import Link from 'next/link'
import Image from 'next/image'

export default async function HomePage() {
  const { data: destinos, error } = await supabase
    .from('destinos')
    .select('*')
    .order('created_at', { ascending: false })

    console.log(error)

  if (error) {
    return <p className="text-center text-red-500 mt-10">Error al cargar destinos.</p>
  }

  const departamento = Array.from(new Set(destinos?.map((d: Destino) => d.departamento)))

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">Rutas & Destinos</h1>
        <p className="text-gray-500">Descubre lugares increíbles en El Salvador</p>
      </header>

      <nav className="flex flex-wrap justify-center gap-3 mb-10">
        {departamento.map((cat) => (
          <Link
            key={cat}
            href={`/departamento/${cat}`}
            className="px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 capitalize text-sm"
          >
            {cat}
          </Link>
        ))}
      </nav>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {destinos?.map((destino: Destino) => (
          <Link
            key={destino.id}
            href={`/destinos/${destino.slug}`}
            className="rounded-xl overflow-hidden shadow hover:shadow-lg transition"
          >
            <div className="relative h-48 w-full">
              <Image
                src={destino.imagen_url}
                alt={destino.nombre}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="font-semibold text-lg">{destino.nombre}</h2>
              <p className="text-sm text-gray-500">{destino.pais}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}