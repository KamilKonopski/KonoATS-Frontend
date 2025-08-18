import type { IPipelineStatus } from "../../types/pipelineStatus";

interface SingleStatusProps {
  status: IPipelineStatus;
}

const SingleStatus = ({ status }: SingleStatusProps) => {
  return (
    <div className="flex flex-1 gap-2.5 w-full justify-between items-center p-1.5">
      <p className="flex-3/12 text-xs">{status.statusName}</p>
      <div className="w-full h-5 rounded-[3px] bg-primary-hover/10">
        <div
          className={`h-full rounded-[3px] ${status.statusColor}`}
          style={{ width: `${status.statusPercent}%` }}
        ></div>
      </div>
      <p className="flex-1">{status.candidates}</p>
    </div>
  );
};

export default SingleStatus;
