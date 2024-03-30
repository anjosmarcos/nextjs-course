import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const MAX_RECONRDS = 50
const MIN_OFFSET = 0

const Article = {
    get: async ({ where = {}, orderBy = {}, limit = 10, offset = 0 }) => {
        const take = Math.min(limit, MAX_RECONRDS)
        const skip = Math.max(offset, MIN_OFFSET)

        const records = await prisma.article.findMany({
            where: where,
            orderBy: orderBy,
            take: take,
            skip: skip,
        })
        console.log(records)
        return records



    },
    count: async ({ where = {} }) => {
        const count = await prisma.article.count({
            where: where,
        })
        return count
    }

}

export default Article