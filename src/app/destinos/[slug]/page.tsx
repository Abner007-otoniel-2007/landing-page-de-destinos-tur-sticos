import { supabase } from '@/lib/supabase'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

export default async function DestinoPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const { data: destino, error } = await supabase
    .from('destinos')
    .select('*')
    .eq('slug', slug)
    .single()

  if (error || !destino) {
    notFound()
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/" className="text-sm text-gray-500 hover:underline">
        ← Volver
      </Link>

      <div className="relative h-72 w-full rounded-xl overflow-hidden mt-4">
        <Image src={destino.imagen_url} alt={destino.nombre} fill className="object-cover" />
      </div>

      <h1 className="text-3xl font-bold mt-6">{destino.nombre}</h1>
      <p className="text-gray-500">{destino.pais} · <span className="capitalize">{destino.departamento}</span></p>

      <p className="mt-4 text-gray-700 leading-relaxed">{destino.descripcion}</p>

    </main>
  )
}