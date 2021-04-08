import { stringInclues } from "../util/common";

const FILTER_ALL = "all";
const FILTER_ACTIVE = "active";
const FILTER_COMPLETED = "completed";

export function applyFilter(list, filter) {
  switch (filter) {
    case FILTER_COMPLETED:
      return list.filter((item) => item.completed === true);
    case FILTER_ACTIVE:
      return list.filter((item) => item.active !== true);
    default:
      return list;
  }
}

export function search(list, query) {
  let lowerCaseTrimmedQuery = query.trim().toLowerCase();

  return list.filter(({ text }) =>
    stringInclues(text.toLowerCase(), lowerCaseTrimmedQuery)
  );
}

export function getOptions() {
  return {
    [FILTER_ALL]: "All",
    [FILTER_ACTIVE]: "Active",
    [FILTER_COMPLETED]: "Completed",
  };
}
