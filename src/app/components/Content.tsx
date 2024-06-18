import SearchCard from "./SearchCard";

function Content() {
    return( 
      <div className="container mx-auto mt-24 py-4">
      <div className="flex items-center justify-center">
        <div className="h-60 w-full rounded-xl bg-rose-300"></div>
      </div>

      <div className="my-9">
        <p className="text-4xl font-bold text-laranja">Promoções</p>
        <div className="mt-2 h-1 w-full rounded-full bg-laranja"></div>
        <div className="mt-9 flex flex-col flex-wrap items-center justify-evenly lg:flex-row ">
          <SearchCard
            title={"Boqueirao"}
            city={"Parelhas"}
            state={"RN"}
            image={
              "http://geoparqueserido.com.br/wp-content/uploads/2021/05/DJI_0057-1024x576.jpg"
            }
            price={200}
            customerScore={8}
            numberOfReviews={10}
            discount={5}
            total={390}
          />
          <SearchCard
            title={"Boqueirao"}
            city={"Parelhas"}
            state={"RN"}
            image={
              "http://geoparqueserido.com.br/wp-content/uploads/2021/05/DJI_0057-1024x576.jpg"
            }
            price={200}
            customerScore={8}
            numberOfReviews={10}
            discount={5}
            total={390}
          />
          <SearchCard
            title={"Boqueirao"}
            city={"Parelhas"}
            state={"RN"}
            image={
              "http://geoparqueserido.com.br/wp-content/uploads/2021/05/DJI_0057-1024x576.jpg"
            }
            price={200}
            customerScore={8}
            numberOfReviews={10}
            discount={5}
            total={390}
          />
        </div>
      </div>

      <div className="h-40 w-full rounded-xl bg-green-300"></div>

      <div className="my-9">
        <p className="text-4xl font-bold text-laranja">Destaques</p>
        <div className="mt-2 h-1 w-full rounded-full bg-verde"></div>
        <div className="mt-9 flex items-center justify-between">
          <div className="h-[540px] w-2/3 bg-red-300"></div>
          <div className="h-[540px] w-1/5 bg-blue-300"></div>
        </div>
      </div>
    </div>
    );
}

export default Content;