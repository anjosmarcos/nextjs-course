import { PrismaClient } from '@prisma/client';
import articles from '../../src/data/articles.json';
import { slugfy } from '../../src/helpers/slugfiy';

const prisma = new PrismaClient();

const isDev = process.env.NODE_ENV === 'development';

async function main() {
    console.log('Seeding database...');
    await seedArticles();


}

async function seedArticles() {
    if (!isDev) {
        throw new Error('Este script só pode ser executado em ambiente de desenvolvimento.');
    }

    // Excluir todos os registros da tabela Article
    await prisma.article.deleteMany();
    // Redefinir o contador de sequência da tabela Article
    await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name = 'Article';`;

    console.log('Tabela de artigos truncada com sucesso.');
    for (let article of articles) {
        const record = await prisma.article.create({
            data: {
                title: article.title,
                slug: slugfy(article.title),
                execert: article.excerpt,
                content: article.content,
                image: article.image,
                publishedAt: new Date(article.publish_date)
            }
        }
        );
        console.log(`Article seeded with id: ${record.id} and title: ${record.title}`);
    }
}
main().catch((error) => {
    console.error('Erro durante a execução do script:', error);
    process.exit(1);
});
