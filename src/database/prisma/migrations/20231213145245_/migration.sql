-- CreateTable
CREATE TABLE "contents" (
    "id" STRING NOT NULL,
    "content" STRING NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "contents_id_key" ON "contents"("id");
