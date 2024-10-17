import { CardListType } from "../../types/cardType";
import { Card } from "./Card";

export const CardList: React.FC<CardListType> = ({ data, title }) => {
    return (
        <div className="flex flex-col items-start m-6">
            <div className="font-semibold text-2xl text-primary">{title}</div>
            <div className="grid grid-cols-4 gap-6 mt-4">
                {data.map((card) => (
                    <Card key={card.id} data={card} />
                ))}
            </div>
        </div>
    );
};
