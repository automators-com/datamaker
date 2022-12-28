<div align="center">
    <img src="https://raw.githubusercontent.com/automators-com/datamaker/dev/public/assets/og-image.png" alt="datamaker" align="center"></img>
</div>
<br/>

Welcome to datamaker - a Next.js application from [Automators](https://automators.com) that is used to generate high quality synthetic test data.

## Getting Started

Clone the repository:

```bash
git clone https://github.com/automators-com/datamaker.git
cd datamaker
```

Install the dependencies:

```bash
pnpm install
```

Generate a prisma client:

```bash
pnpx prisma generate
```

You will need to have the following environment variables set:

```bash
# Prisma
DATABASE_URL=""

# Next Auth
NEXTAUTH_SECRET="supersecretstring"
NEXTAUTH_URL="http://localhost:3000"

# Sendgrid email service
SENDGRID_API_KEY=""
```

If you want to use your own database for development, you can use the following command to run the migrations against your instance:

```bash
pnpm run migrate:dev
```

Start the development server:

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

This app is built using the following core technologies, find out more about them below:

- [Next.js](https://nextjs.org/)
- [Next Auth](https://next-auth.js.org/)
- [Prisma](https://www.prisma.io/)
- [React Query](https://react-query.tanstack.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [PostgreSQL](https://www.postgresql.org/)

## Deployments

This app is deployed to [Vercel](https://vercel.com/). You can find the production deployment at [datamaker.app](https://datamaker.app)

## License

[MIT](LICENSE)
