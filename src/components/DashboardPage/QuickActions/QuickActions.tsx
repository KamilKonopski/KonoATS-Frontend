import Card from "../../../common/components/Card/Card";
import ActionButton from "./ActionButton/ActionButton";

const QuickActions = () => {
  return (
    <Card className="p-5 min-w-[350px]">
      <h2 className="text-3xl font-bold mb-3">Szybkie akcje</h2>
      <div className="grid grid-cols-2 gap-3">
        <ActionButton
          label="Dodaj ofertę"
          onClick={() => console.log("Otwórz modal Dodaj ofertę")}
        />
        <ActionButton
          label="Dodaj kandydata"
          onClick={() => console.log("Otwórz modal Dodaj kandydata")}
        />
        <ActionButton
          label="Szybka wiadomość"
          variant="secondary"
          onClick={() => console.log("Otwórz modal wiadomości")}
        />
        <ActionButton
          label="Znajdź kandydata"
          variant="secondary"
          onClick={() => console.log("Otwórz modal wyszukiwarki")}
        />
      </div>
    </Card>
  );
};

export default QuickActions;
