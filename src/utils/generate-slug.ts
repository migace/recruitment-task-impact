export const generateSlug = (title: string, limit: number = 50): string =>
  title
    .toLowerCase() // Convert to lowercase
    .replace(/[^\w\s-]/g, "") // Remove non-word characters except spaces and hyphens
    .trim() // Trim spaces
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .slice(0, limit); // Limit to 50 characters
