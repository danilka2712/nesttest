/*
  Warnings:

  - You are about to alter the column `price` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "phone" TEXT NOT NULL,
    "marka" TEXT,
    "model" TEXT,
    "addressTo" TEXT,
    "addressWhere" TEXT,
    "price" INTEGER DEFAULT 0,
    "content" TEXT DEFAULT 'Поиск заказчика',
    "authorId" INTEGER,
    CONSTRAINT "Product_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Product" ("addressTo", "addressWhere", "authorId", "content", "createdAt", "id", "marka", "model", "phone", "price") SELECT "addressTo", "addressWhere", "authorId", "content", "createdAt", "id", "marka", "model", "phone", "price" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
CREATE UNIQUE INDEX "Product_id_key" ON "Product"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
