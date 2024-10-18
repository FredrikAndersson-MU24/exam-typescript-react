interface ListProps {
  li: any;
}

const List = (props: ListProps) => {
  return (
    <>
      <ul>{props.li}</ul>
    </>
  );
};

export default List;
