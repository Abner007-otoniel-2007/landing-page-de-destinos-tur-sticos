# Rutas & Destinos

Landing page de turismo que muestra destinos de El Salvador, organizados por departamento. Construida con Next.js 16 y Supabase.

URL sitio en producción: https://landing-page-de-destinos-tur-sticos.vercel.app/

## Descripción

Aplicación web que consulta una base de datos en Supabase desde y muestra:

- Página principal con el listado de destinos y filtros por departamento.
- `/departamento/[departamento]`: destinos de un departamento.
- `/destinos/[slug]`: detalle de cada destino.

## Instalación local

1. Clona el repositorio:

git clone https://github.com/TU-USUARIO/landing-viajes.git
cd landing-viajes

2. Instala las dependencias:

pnpm install


3. Crea un archivo `.env.local` en la raíz con las variables de entorno:

NEXT_PUBLIC_SUPABASE_URL=https://luwzoztplhlvzbfvkscd.supabase.co 
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx1d3pvenRwbGhsdnpiZnZrc2NkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTAzNjM1NjIsImV4cCI6MjEwNTkzOTU2Mn0.5seVrgYGhVrk9eRzgDlfgTD51VOS4cU88_iwwEiUsZY

4. Inicia el servidor de desarrollo:

pnpm dev


5. Abre http://localhost:3000

