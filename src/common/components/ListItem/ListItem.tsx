interface ListItemProps {
  children: React.ReactNode;
}

const ListItem = ({ children }: ListItemProps) => {
  return <ul className="flex flex-col my-5">{children}</ul>;
};

export default ListItem;
