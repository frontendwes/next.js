import { GetServerSideProps } from "next";
import moment from "moment";
import { Fragment } from "react";

export default function Home({ repositories, date }) {
  return (
    <Fragment>
      <h1>{date}</h1>
      <ul>
        {repositories.map((repo) => (
          <li key={repo}>{repo}</li>
        ))}
      </ul>
    </Fragment>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await fetch(
      "https://api.github.com/users/frontendwes/repos"
    );
    const allRepositories = await response.json();
    const repositoriesName = allRepositories.map(({ name }) => name);

    return {
      props: {
        repositories: repositoriesName,
        date: moment().format("HH:mm:ss"),
      },
    };
  } catch (error) {
    console.log(error);
  }
};
