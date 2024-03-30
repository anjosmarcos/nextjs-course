import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log('Seeding database...');

    try {
        // Criar um novo artigo

        console.log('Artigo inserido com sucesso.');
    } catch (error) {
        console.error('Erro ao inserir o artigo:', error);
        throw error;
    } finally {
        await prisma.$disconnect();
    }
}

main().catch((error) => {
    console.error('Erro durante a execução do script:', error);
    process.exit(1);
});
