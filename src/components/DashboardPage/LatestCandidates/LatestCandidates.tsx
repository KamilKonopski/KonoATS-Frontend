import ButtonLink from "../../../common/components/ButtonLink/ButtonLink";
import Card from "../../../common/components/Card/Card";
import Table from "../../../common/components/Table/Table";
import { Paths } from "../../../common/constants/paths";
import SingleCandidate from "./SingleCandidate/SingleCandidate";

const LatestCandidates = () => {
  const latestCandidates = [
    { id: 1, fullname: "Anna Kowalska", position: "Software Engineer", offert: "2025-04-22" },
    { id: 2, fullname: "Jan Nowak", position: "Projekt Manager", offert: "2025-04-22" },
    { id: 3, fullname: "Maria Wiśniewska", position: "Data Analyst", offert: "2025-04-21" },
    { id: 4, fullname: "Piotr Lewandowski", position: "Graphic Designer", offert: "2025-04-20" },
    { id: 5, fullname: "Kamil Konopski", position: "Frontend Developer", offert: "2025-04-25" },
  ];

  return (
    <Card className="p-5 min-w-[350px]">
      <h2 className="text-3xl font-bold">Najnowsi Kandydaci</h2>
      <Table>
        <div className="flex flex-wrap justify-between text-text-muted border-b-2 pb-2 border-primary">
          <p className="flex-1">Imię i nazwisko</p>
          <p className="flex-1">Stanowisko</p>
          <p className="flex-1">Oferta</p>
        </div>
        {latestCandidates.map((candidate) => (
          <SingleCandidate key={candidate.id} candidate={candidate} />
        ))}
      </Table>
      <ButtonLink to={Paths.CANDIDATES}>Pokaż wszystkich kandydatów</ButtonLink>
    </Card>
  );
};

export default LatestCandidates;
