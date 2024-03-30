import { Pagination } from '@/components';
import ArticleService from '@/services/Articles';
import Image from 'next/image';

export default async function Home({ serchParams }: { serchParams?: { page?: string, limit?: string } }) {
  const currentPage = Number(serchParams?.page || 1)
  const limit = Number(serchParams?.limit || 10)

  const articles = await ArticleService.getHomeArticles(currentPage, limit)
  const latestArticles = await ArticleService.getHomeLatesArticles()

  return (
    <div className="ml-72 ">
      <div className="flex w-full h-[35vh] bg-orange-400 flex-center">
        <p>Teste</p>
      </div>

      <div className="container mx-auto my-6">
        <div className="grid grid-cols-4 gap-4 h-[35vh]">
          {latestArticles.data.map((article) => {
            return (
              <div
                key={article.title}
                className="flex-center relative overflow-hidden">
                <div className='h-full w-full'>
                  <Image
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                    src={`/assets/images/articles/${article.image}`}
                    width={600}
                    height={400}
                    alt={article.title}
                  />
                </div>
                <p className='absolute bottom-0 pt-6 pb-2 px-2 bg-gradient-to-t from-slate-900 via-slate-800 to-transparent w-full flex-center'>
                  {article.title}
                </p>
              </div>
            )
          })}
        </div>
      </div>

      <div className="container mx-auto my-6">
        <div className="grid grid-cols-12 gap-4 ">
          <div className="col-span-8  ">
            <div className='flex flex-col gap-4'>
              {articles.data.map((article) => {
                return (
                  <div key={article.title} className="flex bg-slate-800 rounded-md py-4">
                    <div className="flex items-center">
                      <div className='h-40 rounded-r-lg overflow-hidden'>
                        <Image
                          className="h-full w-full object-cover transition duration-500 hover:scale-105 rounded-r-lg"
                          src={`/assets/images/articles/${article.image}`}
                          width={600}
                          height={400}
                          alt={article.title}
                        />
                      </div>

                    </div>
                    <div className="flex w-full flex-col gap-2 pl-4">
                      <h2 className="text-3xl mb-4 text-indigo-400">{article.title}</h2>
                      {/* <p className="flex-grow">{article.publishedAt.toISOString()}</p> */}
                      <p className="flex-grow">{article.execert}</p>
                      <button className='bg-slate-700 hover:bg-slate-900 rounded-lg px-4 py-2 max-w-max'>Ler Mais</button>
                    </div>
                  </div>
                )
              })}
              <div className='my-8'>
                <Pagination
                  currentPage={articles.metadata.page}
                  totalPages={articles.metadata.totalPages}
                />
              </div>
            </div>
          </div>

          <div className="col-span-4 bg-purple-500 flex-center">
            2
          </div>
        </div>
      </div>
    </div >


  );
}
