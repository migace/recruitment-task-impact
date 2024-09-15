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

- User account - Implement user authentication (e.g., sign-up, login, and logout) using JWT or OAuth.
- Unit Tests for use-cases and other crucial functions / classes
- E2E tests which could prove that system is working
- UX - Improve the overall user interface with modern design elements, including animations, smooth transitions, and feedback for actions (e.g., adding/removing items from the cart).
- Badge for cart - how many items are inside
- After hovering cart -> summary of cart
- Custom images for categories
- List / gid layout for products in category
- Details view for every product
- Sorting and filtering - Add sorting (e.g., by price, popularity) and filtering (e.g., by price range, ratings) on the category page.
- Pagination - Implement pagination or infinite scrolling for the product listings on category pages.
- Wishlist Functionality
- Error handling - Implement robust error handling with user-friendly error messages
- Searchbar - Add a search bar to allow users to search for products across categories.
- Accessibility - Enhance accessibility by adding ARIA attributes, keyboard navigation, and ensuring contrast ratios meet WCAG guidelines.
