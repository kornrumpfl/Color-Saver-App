import MainCard from "./components/mainCard/MainCard";
import "./App.css";
import colorObjects from "./components/ColorCard/colorObjects";
import Cards from "./components/Cards";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { saveToLocal, loadFromLocal } from "../src/components/localStorage";
import { ErrorBoundary } from "react-error-boundary";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

function App() {
  const [cards, setCards] = useState(loadFromLocal("cards") ?? colorObjects);

  useEffect(() => {
    saveToLocal("cards", cards);
  }, [cards]);

  /* function to add a new card based on the color choosen */
  function addCard(color) {
    setCards([{ id: nanoid(), colorCode: color }, ...cards]);
  }
  /* function to update card when change code hex on input field */
  function onUpdate(cardId, colorCode) {
    console.log(cardId + colorCode);
    const updatedCards = cards.map((card) =>
      card.id === cardId
        ? {
            ...card,
            colorCode,
          }
        : card
    );
    setCards(updatedCards);
  }

  /* function to copy hex code on-clicking to clipboard */
  function onCopy(cardId) {
    navigator.clipboard.writeText(
      cards
        .filter((card) => {
          return card.id === cardId;
        })
        .map((card) => card.colorCode)
    );
  }

  /* function to "delete" a card */
  function deleteCard(cardId) {
    setCards(cards.filter(({ id }) => cardId !== id));
  }

  return (
    <div>
      <h1>Color Saver App</h1>
      <div className="App">
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <MainCard onAdd={addCard} />
          <Cards
            cards={cards}
            onDelete={deleteCard}
            onCopy={onCopy}
            onUpdate={onUpdate}
          />
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default App;
