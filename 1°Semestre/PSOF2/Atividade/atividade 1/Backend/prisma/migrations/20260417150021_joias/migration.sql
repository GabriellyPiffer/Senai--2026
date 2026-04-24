-- CreateTable
CREATE TABLE `Joia` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `imagem` VARCHAR(191) NOT NULL,
    `preco` DOUBLE NOT NULL,
    `categoria` VARCHAR(191) NOT NULL,
    `pedras` VARCHAR(191) NOT NULL,
    `colecao` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
