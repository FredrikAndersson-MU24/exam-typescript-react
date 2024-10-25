interface FooterProps {
  items: number;
}

const Title = (props: FooterProps) => {
  return (
    <strong className="footer">
      {props.items} {props.items === 1 ? "item" : "items"}
    </strong>
  );
};

export default Title;
