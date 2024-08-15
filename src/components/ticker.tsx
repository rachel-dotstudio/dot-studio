import Link from "next/link";

const Ticker: React.FC = () => {
  return (
    <section className="announcement">
      <p>
        <Link href="/">Book your free consultation</Link> today and take the first step towards achieving your objectives.
      </p>
    </section>
  );
};

export default Ticker;