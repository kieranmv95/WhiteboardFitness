type MetaProps = {
  author: string;
  date: string;
};

const Meta = ({ date, author }: MetaProps) => {
  return (
    <div>
      {author} - {date}
    </div>
  );
};

export default Meta;
