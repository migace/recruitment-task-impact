import { fetchCategories } from "@/services/categories-service";
import { List } from "flowbite-react";
import Link from "next/link";
import { HiCheckCircle } from "react-icons/hi";

export default async function Home() {
  const categories = await fetchCategories();

  return (
    <div>
      <List>
        {categories.map((category) => (
          <List.Item key={category.name} icon={HiCheckCircle}>
            <Link href={`/categories/${category.name}`}>{category.name}</Link>
          </List.Item>
        ))}
      </List>
      <ul></ul>
    </div>
  );
}
