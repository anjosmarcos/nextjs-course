
export default function Home() {
  return (
    <div className="ml-72 ">
      <div className="flex w-full h-[35vh] bg-orange-400 flex-center">
        <p>Teste</p>
      </div>

      <div className="container mx-auto my-6">
        <div className="grid grid-cols-4 gap-4 h-[35vh]">
          <div className="bg-indigo-500 flex-center">1</div>
          <div className="bg-purple-500 flex-center">2</div>
          <div className="bg-blue-400 flex-center">3</div>
          <div className="bg-green-500 flex-center">4</div>
        </div>
      </div>

      <div className="container mx-auto my-6">
        <div className="grid grid-cols-12 gap-4 ">
          <div className="col-span-8  flex flex-col gap-4">
            {/* item */}
            <div className="flex gap-4 bg-indigo-500 rounded-md">
              <div className="">
                <img className="w-auto h-[200px]" src="https://placehold.co/600x400" alt="image description" />
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-3xl gap-2 py-4">Algun titulo</h2>
                <p className="flex-grow">Alguma descricao</p>
                <button>Ler Mais</button>
              </div>
            </div>
            {/* item */}
            <div className="flex gap-4 bg-indigo-500 rounded-md">
              <div className="">
                <img className="w-auto h-[200px]" src="https://placehold.co/600x400" alt="image description" />
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-3xl gap-2 py-4">Algun titulo</h2>
                <p className="flex-grow">Alguma descricao</p>
                <button>Ler Mais</button>
              </div>
            </div>
            {/* item */}
            <div className="flex gap-4 bg-indigo-500 rounded-md">
              <div className="">
                <img className="w-auto h-[200px]" src="https://placehold.co/600x400" alt="image description" />
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-3xl gap-2 py-4">Algun titulo</h2>
                <p className="flex-grow">Alguma descricao</p>
                <button>Ler Mais</button>
              </div>
            </div>
            {/* item */}
            <div className="flex gap-4 bg-indigo-500 rounded-md">
              <div className="">
                <img className="w-auto h-[200px]" src="https://placehold.co/600x400" alt="image description" />
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-3xl gap-2 py-4">Algun titulo</h2>
                <p className="flex-grow">Alguma descricao</p>
                <button>Ler Mais</button>
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
