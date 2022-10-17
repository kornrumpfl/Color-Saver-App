import Card from "../components/card/Card";

function Cards({ cards, onDelete, onCopy, onUpdate }) {
  return (
    <div className="App__Cards">
      {cards.map((card) => {
        return (
          <div>
            <Card
              onCopy={() => onCopy(card.id)}
              onDelete={() => onDelete(card.id)}
              onUpdate={(newColor) => onUpdate(card.id, newColor)} //new value for color updater newColor!
              key={card.id}
              colorCode={card.colorCode}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
