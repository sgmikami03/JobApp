import { css } from "../../styled-system/css";
import { currentPageState } from "nrstate/PageStateServer";
import { getPageState } from 'nrstate/PageStateServer'
import PageStateProvider from "nrstate-client/PageStateProvider";
import {
  PageStateTop,
  initialPageStateTop,
  pathTop,
} from "@/state/PageStateTop";

export default function Home() {
  const pageState = getPageState<PageStateTop>(initialPageStateTop ,pathTop);
  const { jobs } = pageState;

  return (
    <PageStateProvider
      current={currentPageState<PageStateTop>(initialPageStateTop, pathTop)}
    >
      <main>
        <div
          className={css({ fontSize: "2xl", fontWeight: "bold", color: "red" })}
        >
          {jobs.map((job) => (
            <>{job.id}</>
          ))}
        </div>
      </main>
    </PageStateProvider>
  );
}
