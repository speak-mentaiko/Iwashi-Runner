import allLocales from "@fullcalendar/core/locales-all";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Box } from "@chakra-ui/react";

export const Home = () => {
  return (
    <>
      <p>Home</p>
      <Box p={30}>
        <FullCalendar
          locales={allLocales}
          locale="ja"
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
        />
      </Box>
    </>
  );
};
