interface TableProps {
  children: React.ReactNode;
}

const Table = ({ children }: TableProps) => {
  return (
    <article className="flex flex-col gap-3 my-5 border-b-2 pb-2 border-primary">
      {children}
    </article>
  );
};

export default Table;
