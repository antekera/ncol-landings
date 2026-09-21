# ncol-landings

Repositorio de landings independientes de Noticiascol.

## Aplicaciones

- `apps/anunciantes`: minisite comercial para `anunciantes.noticiascol.com`.

Cada aplicación puede desplegarse como un proyecto independiente de Vercel usando su carpeta como Root Directory.

## Desarrollo

Requisitos:

- Node.js 24
- npm

```bash
npm install
npm run dev:anunciantes
```

## Calidad

```bash
npm run lint
npm run typecheck
npm run build
```
