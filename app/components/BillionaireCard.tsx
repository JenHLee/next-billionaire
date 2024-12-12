import Link from "next/link";
import { formatNetWorth } from "../utils/formatNetworth";

interface BillionaireProps {
  id: string;
  name: string;
  squareImage: string;
  netWorth: number;
  industries: string[]; // `industries`를 배열로 정의
}

export default function BillionaireCard({
  id,
  name,
  squareImage,
  netWorth,
  industries,
}: BillionaireProps) {
  return (
    <div className="flex flex-col transition hover:scale-110 mb-10 cursor-pointer">
        <Link href={`/person/${id}`}>
          <img src={squareImage} alt={name} width={200} />
          <span className="text-base font-bold">{name}</span>
          <br />
          <span className="text-sm">
            {formatNetWorth(netWorth)} / {industries.join(", ")}
          </span>
        </Link>
    </div>
  );
}
