interface TableProps {
  children: React.ReactNode;
}

const Table = ({ children }: TableProps) => {
  return <article className="flex flex-col my-5">{children}</article>;
};

export default Table;
