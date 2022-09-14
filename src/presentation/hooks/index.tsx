import React from "react";

import { ModalProvider } from "./modal";
import { ScheduleListProvider } from "./scheduleList";

function AppProvider({ children }: React.PropsWithChildren) {
  return (
    <ScheduleListProvider>
      <ModalProvider>{children}</ModalProvider>
    </ScheduleListProvider>
  );
}

export { AppProvider };
