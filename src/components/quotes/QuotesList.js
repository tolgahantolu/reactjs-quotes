import QuoteItem from "./QuoteItem";

const QuotesList = (props) => {
  return (
    <ul>
      {props.quotes.map((quote) => (
        <QuoteItem id={quote.id} author={quote.author} text={quote.text} />
      ))}
    </ul>
  );
};

export default QuotesList;
