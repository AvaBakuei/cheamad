import { Link } from "react-router-dom";
import { CardType } from "../../types/cardType";

export const Card: React.FC<CardType> = ({ data }) => {
    return (
        <Link to={"/"} className="flex flex-col cursor-pointer">
            <div className="card-img flex"><img className="brightness-75" src={`/images/${data.img}.png`} alt={data.title} /></div>
            <div className="flex flex-col items-start mt-2 text-primary capitalize">
                <span className="text-left font-semibold text-base">{data.title}</span>
                <div className="flex flex-col items-start text-sm font-semibold">
                    <span>{data.date}</span>
                    <span className="text-secondary font-bold">{data.price} €</span>
                    <span className="text-primary-opacity-75 text-xs font-semibold">{data.location}</span>
                    <span className="text-xs text-fourthly">{data.category}</span>
                </div>
            </div>
        </Link>
    )
}