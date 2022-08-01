import { useParams } from "react-router-dom";
import QuoteHighlighted from "../components/quotes/QuoteHighlighted";
import QuoteNotFound from "../components/quotes/QuoteNotFound";

const DUMMY_QUOTES = [
  {
    id: "1",
    author: "Tolgahan",
    text: "Gerçekten harika bir eğitim olmuş.",
  },
  {
    id: "2",
    author: "Liyahan",
    text: "Mükemmel bir çalışma, tebrikler!",
  },
  {
    id: "3",
    author: "John Doe",
    text: "Learn React with me!",
  },
];

const QuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  const { quoteId } = params;
  console.log(quoteId);

  if (!quote) {
    return <QuoteNotFound />;
  }

  return <QuoteHighlighted author={quote.author} text={quote.text} />;
};

export default QuoteDetail;
