import { GetStaticPaths, GetStaticProps } from "next";
import moment from "moment";

export default function BlogPost({ date }) {
  return <h1>{date}</h1>;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      date: moment().format("HH:mm:ss"),
    },
    revalidate: 5,
  };
};
