/*
  Warnings:

  - You are about to drop the column `total` on the `Cart` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Cart" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "totalPrice" REAL NOT NULL DEFAULT 0
);
INSERT INTO "new_Cart" ("id") SELECT "id" FROM "Cart";
DROP TABLE "Cart";
ALTER TABLE "new_Cart" RENAME TO "Cart";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
