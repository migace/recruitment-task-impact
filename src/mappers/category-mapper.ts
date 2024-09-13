import { Category } from "@/domain/models/category";

export class CategoryMapper {
  static toEntity(apiResponse: string): Category {
    return new Category(apiResponse);
  }
}
