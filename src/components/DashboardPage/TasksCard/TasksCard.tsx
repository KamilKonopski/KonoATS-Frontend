import ButtonLink from "../../../common/components/ButtonLink/ButtonLink";
import Card from "../../../common/components/Card/Card";
import Table from "../../../common/components/Table/Table";
import { Paths } from "../../../common/constants/paths";
import type { Task } from "../types/task";
import SingleTask from "./SingleTask/SingleTask";

const tasks: Task[] = [
  { id: 1, title: "Umów rozmowę z Janem Kowalskim", done: false },
  { id: 2, title: "Sprawdź CV Anny Nowak", done: true },
  { id: 3, title: "Przygotuj raport dla działu HR", done: false },
];

const TasksCard = () => {
  return (
    <Card className="p-5 min-w-[350px]">
      <h2 className="text-3xl font-bold text-text">Moje zadania</h2>
      <Table>
        {tasks.map((task) => (
          <SingleTask key={task.id} task={task} />
        ))}
      </Table>
      <ButtonLink to={Paths.MY_TASKS}>Pokaż wszystkie zadania</ButtonLink>
    </Card>
  );
};

export default TasksCard;
