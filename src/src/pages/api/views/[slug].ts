import type { APIRoute } from "astro";
import { env } from "cloudflare:workers";

// El sitio puede ser estático; este endpoint debe ser dinámico.
export const prerender = false;

export const POST: APIRoute = async ({ params }) => {
  const slug = params.slug;
  if (!slug) {
    return new Response("Missing slug", { status: 400 });
  }

  const db = env.DB;

  // UPSERT atómico: inserta con 1, o suma 1 si ya existe.
  await db
    .prepare(
      "INSERT INTO views (slug, count) VALUES (?, 1) " +
        "ON CONFLICT(slug) DO UPDATE SET count = count + 1"
    )
    .bind(slug)
    .run();

  const row = await db
    .prepare("SELECT count FROM views WHERE slug = ?")
    .bind(slug)
    .first<{ count: number }>();

  return Response.json({ count: row?.count ?? 0 });
};

// Opcional: leer sin incrementar (p. ej. para una página de estadísticas).
export const GET: APIRoute = async ({ params }) => {
  const slug = params.slug;
  if (!slug) return new Response("Missing slug", { status: 400 });

  const row = await env.DB
    .prepare("SELECT count FROM views WHERE slug = ?")
    .bind(slug)
    .first<{ count: number }>();

  return Response.json({ count: row?.count ?? 0 });
};