interface ListHeaderProps {
  columns: string[];
}

const ListHeader = ({ columns }: ListHeaderProps) => {
  return (
    <li className="flex pb-2 pl-4 pr-8 text-text-muted border-b-2 border-primary">
      {columns.map((col, index) => (
        <p key={index} className="flex-1 text-center">
          {col}
        </p>
      ))}
    </li>
  );
};

export default ListHeader;
