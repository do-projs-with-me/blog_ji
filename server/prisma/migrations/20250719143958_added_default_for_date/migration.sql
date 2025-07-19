/*
  Warnings:

  - You are about to drop the column `date` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `update` on the `Post` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "date",
DROP COLUMN "update",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
