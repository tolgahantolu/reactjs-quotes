import QuotesList from "../components/quotes/QuotesList";

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

const AllQuotes = () => {
  return <QuotesList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
