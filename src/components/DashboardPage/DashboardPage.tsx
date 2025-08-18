import ActivityCards from "./ActivityCards/ActivityCards";
import EditedOfferts from "./EditedOfferts/EditedOfferts";
import LatestCandidates from "./LatestCandidates/LatestCandidates";
import PipelineCard from "./PipelineCard/PipelineCard";
import QuickActions from "./QuickActions/QuickActions";
import TasksCard from "./TasksCard/TasksCard";

const DashboardPage = () => {
  return (
    <section className="w-full px-5 sm:px-[20px] md:px-[40px] xl:px-[60px]">
      <ActivityCards />
      <div className="my-10 px-25 grid grid-cols-1 xl:grid-cols-2 justify-items-center gap-5">
        <div className="space-y-6 w-full">
          <LatestCandidates />
          <TasksCard />
        </div>
        <div className="space-y-6 w-full">
          <EditedOfferts />
          <PipelineCard />
          <QuickActions />
        </div>
      </div>
    </section>
  );
};

export default DashboardPage;
