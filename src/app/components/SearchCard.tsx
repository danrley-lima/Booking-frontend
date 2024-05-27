import Image from "next/image";
import { numberToCurrency } from "../utils/numberToCurrency";

interface SearchCardProps {
  title: string;
  city: string;
  state: string;
  image: string;
  price: number;
  customerScore: number;
  numberOfReviews: number;
  discount: number;
  total: number;
}

function SearchCard(props: SearchCardProps) {
  return (
    <div className="w-screen-4/5 rounded-lg px-3 py-2 text-preto md:max-w-md">
      <div className="flex justify-center overflow-hidden rounded-lg">
        <Image
          src={props.image}
          // layout="responsive"
          // objectFit="cover"
          width={500}
          height={200}
          alt={""}
        />
      </div>
      <div className="mt-1">
        <div className="flex items-center gap-1 text-xs">
          <p className="rounded-md bg-verde px-2 py-1 font-bold text-white">
            {props.customerScore.toFixed(1)}
          </p>
          <p className="font-medium">Muito bom</p>
          <p>({props.numberOfReviews.toLocaleString("pt-BR")} avaliações)</p>
        </div>
        <div>
          <p className="text-xl font-medium">{props.title}</p>
          <p className="text-xs leading-3">
            {props.city}, {props.state}
          </p>
        </div>
        <p className="mt-3 inline-block rounded-md bg-verde px-2 py-1 text-center text-xs font-bold text-cinza">
          {props.discount}% OFF
        </p>
        <div className="flex items-center space-x-1">
          <p className="text-xl font-bold">
            {numberToCurrency(props.price * (1 - props.discount / 100))}
          </p>
          <p className="font-medium line-through ">
            {numberToCurrency(props.price)}
          </p>
        </div>
        <div className="text-xs">
          <p>por diária</p>
          <p>Total: {numberToCurrency(props.total)}</p>
          <p>Inclui impostos e taxas</p>
        </div>
      </div>
    </div>
  );
}

export default SearchCard;
