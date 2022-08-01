import classes from "./QuoteHighlighted.module.css";

const QuoteHighlighted = (props) => {
  return (
    <figure className={classes.quote}>
      <p>{props.text}</p>
      <figcaption>{props.author}</figcaption>
    </figure>
  );
};

export default QuoteHighlighted;
