import * as dayjs from "dayjs";
import * as relativeTime from "dayjs/plugin/relativeTime";

/**
 * format according to update time from now
 * @param  updateAt - e.g. 2022-01-21T13:35:18Z
 * @return String Updated on "D MMM, YYYY" | diff range
 */
export const format = (updateAt) => {
  const formatUpdateAt = dayjs(updateAt).format("YYYY-MM-DD");
  const now = dayjs();
  const date = dayjs(formatUpdateAt);
  // the difference in day between now and updateAt
  const diffDay = now.diff(date, "day");

  if (diffDay < 3) {
    dayjs.extend(relativeTime);
    return dayjs(formatUpdateAt).fromNow(true);
  }

  return dayjs(updateAt).format("D MMM, YYYY");
};
