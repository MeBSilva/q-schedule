import React, { createContext, useContext, useState } from "react";

import {
  ScheduleListContextData,
  ScheduleListState,
  ScheduleListItem,
} from "./types";

const ScheduleContext = createContext<ScheduleListContextData>(
  {} as ScheduleListContextData
);

const ScheduleListProvider = ({
  children,
}: React.PropsWithChildren): React.ReactElement => {
  const state = React.useRef<ScheduleListState>([]);
  const [scheduleList, setScheduleList] = useState<ScheduleListState>([]);

  React.useEffect(() => {
    state.current = scheduleList;
  }, [scheduleList]);

  const wait = React.useCallback(
    (delay: number) =>
      new Promise((resolve) => {
        setTimeout(resolve, delay);
      }),
    []
  );

  const load = React.useCallback(async () => {
    // Simulate async operation
    await wait(1000);

    return state.current;
  }, [wait]);

  const add = React.useCallback(
    async (schedule: ScheduleListItem): Promise<ScheduleListItem> => {
      // Simulate async operation
      await wait(1000);
      setScheduleList((previous) => [...previous, schedule]);
      return schedule;
    },
    [wait]
  );

  const orderScheduleList = React.useCallback(
    (orderBy: keyof ScheduleListItem, way: "asc" | "desc") => {
      switch (orderBy) {
        case "endTime":
          setScheduleList((previous) =>
            way === "asc"
              ? previous.sort(
                  (a, b) => a.endTime.getTime() - b.endTime.getTime()
                )
              : previous.sort(
                  (a, b) => b.endTime.getTime() - a.endTime.getTime()
                )
          );
          break;
        case "startTime":
          setScheduleList((previous) =>
            previous.sort(
              way === "asc"
                ? (a, b) => a.startTime.getTime() - b.startTime.getTime()
                : (a, b) => b.startTime.getTime() - a.startTime.getTime()
            )
          );
          break;
        case "title":
          setScheduleList((previous) =>
            previous.sort(
              way === "asc"
                ? (a, b) => a.title.localeCompare(b.title)
                : (a, b) => b.title.localeCompare(a.title)
            )
          );
          break;

        default:
          break;
      }
    },
    []
  );

  return (
    <ScheduleContext.Provider
      value={{
        add,
        load,
        scheduleList,
        orderScheduleList,
      }}
    >
      {children}
    </ScheduleContext.Provider>
  );
};

const useScheduleList = (): ScheduleListContextData => {
  const context = useContext(ScheduleContext);

  if (!context || Object.keys(context).length < 1) {
    throw new Error(
      "useScheduleList must be used within a ScheduleListProvider"
    );
  }

  return context;
};

export { ScheduleListProvider, useScheduleList };
