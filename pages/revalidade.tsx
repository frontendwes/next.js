import { GetStaticProps } from "next";
import moment from "moment";

export default function Home({ date }) {
  return <h1>{date}</h1>;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      date: moment().format("HH:mm:ss"),
    },
    revalidate: 5, //refaz a request a cada 5 segundos.
  };
};
