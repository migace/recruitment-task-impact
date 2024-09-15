import { Cart } from "@/domain/models/cart";
import { ProductMapper } from "./product-mapper";
import { ICart } from "@/domain/types";

export class CartMapper {
  static toEntity(apiResponse: ICart): Cart {
    const newCart = new Cart(apiResponse.id);

    apiResponse?.items?.forEach((item) => {
      newCart.addItem(item.product, item.quantity);
    });

    return newCart;
  }

  static toApi(cart: ICart): ICart {
    return {
      id: cart.id,
      items: cart?.items?.map((item) => ({
        product: ProductMapper.toApi(item.product),
        quantity: item.quantity,
      })),
      totalPrice: cart.totalPrice,
    };
  }

  static toCreatePrisma(cart: Cart) {
    return {
      data: {
        totalPrice: cart.totalPrice,
        items: {
          create:
            cart?.items?.map((item) => ({
              product: {
                create: {
                  title: item.product.title,
                  price: item.product.price,
                  description: item.product.description,
                  image: item.product.image,
                  category: item.product.category,
                },
              },
              quantity: item?.quantity ?? 0,
            })) ?? [],
        },
      },
      include: {
        items: {
          include: {
            product: true,
          },
        },
      },
    };
  }

  static toUpdatePrisma(cart: Cart) {
    const productIds = cart.items.map((item) => item.product.id);

    return {
      data: {
        totalPrice: cart.totalPrice,
        items: {
          deleteMany: {
            productId: { in: productIds },
          },
          create: cart.items.map((item) => ({
            product: {
              connectOrCreate: {
                where: { id: item.product.id },
                create: {
                  id: item.product.id,
                  title: item.product.title,
                  price: item.product.price,
                  description: item.product.description,
                  image: item.product.image,
                  category: item.product.category,
                },
              },
            },
            quantity: item.quantity ?? 0,
          })),
        },
      },
      include: {
        items: {
          include: {
            product: true,
          },
        },
      },
    };
  }

  static toRemovePrisma(productIds: number[]) {
    return {
      data: {
        items: {
          deleteMany: {
            productId: { in: productIds },
          },
        },
      },
      include: {
        items: {
          include: {
            product: true,
          },
        },
      },
    };
  }
}
