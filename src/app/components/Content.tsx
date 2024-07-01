import Image from "next/image";
import SearchCard from "./SearchCard";

function Content() {
  return (
    <div className="container mx-auto mt-24 py-4">
      <div className="flex items-center justify-center">
        <div className="h-60 w-full  overflow-hidden rounded-xl bg-rose-300">
          <Image
            src="https://cdn.pixabay.com/photo/2017/12/16/22/23/regensburg-3023439_1280.jpg"
            width={1366}
            height={768}
            objectFit="cover"
            alt=""
          />
        </div>
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

      <div className="h-40 w-full overflow-hidden rounded-xl bg-green-300">
        <Image
          src={
            "https://content.r9cdn.net/rimg/dimg/e9/f0/a59da083-city-80763-173e5a7df06.jpg?width=1366&height=768&xhint=2774&yhint=2525&crop=true"
          }
          width={1366}
          height={768}
          objectFit="cover"
          objectPosition="100% 50%"
          alt=""
        />
      </div>

      <div className="my-9">
        <p className="text-4xl font-bold text-laranja">Destaques</p>
        <div className="mt-2 h-1 w-full rounded-full bg-verde"></div>
        <div className="mt-9 flex items-center justify-between">
          <div className="h-[540px] w-2/3 overflow-hidden rounded-xl bg-red-300">
            <Image
              src={
                "https://cf.bstatic.com/xdata/images/xphoto/1450x1488/135531914.webp?k=5b870811b7ab13f7bb4c662060d59353c606d0029fe406d28028feac9acdb9f9&o="
              }
              objectFit="cover"
              width={900}
              height={10}
              alt={""}
            />
          </div>
          <div className="h-[540px] w-1/5 overflow-hidden rounded-xl bg-blue-300">
            <div className="relative h-full w-full">
              <Image
                src={
                  "https://cdn.pixabay.com/photo/2023/04/16/09/49/waterfall-7929685_960_720.jpg"
                }
                layout="fill"
                objectFit="fill"
                className="rounded-xl"
                alt={""}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
