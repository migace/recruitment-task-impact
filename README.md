## Getting Started

First, install dependencies:

```bash
npm i
```

Second, config database:

```bash
npx prisma db push
npx prisma migrate resolve --applied 20240913235243_init
npx prisma migrate deploy
```

Third, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Problems

- change qty of product is chaning order of products
- notifications are covering up cart icon

### Improvements

- unit tests for use-cases and other crucial functions / classes
- e2e tests which could prove that system is working
- UX
