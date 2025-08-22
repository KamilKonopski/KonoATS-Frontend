import ButtonLink from "../../ButtonLink/ButtonLink";

interface ListContentProps {
  to?: string;
  children: React.ReactNode;
}

const ListContent = ({ to = "", children }: ListContentProps) => {
  return (
    <li className="list-none border-b-2 border-primary">
      <ButtonLink to={to} className="w-full py-4 px-4">
        {children}
      </ButtonLink>
    </li>
  );
};

export default ListContent;
