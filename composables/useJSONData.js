import mainData from "../data/config.json";
import faqData from "../data/faq.json";
import scheduleData from "../data/schedule.json";
import sessionsData from "../data/sessions.json";
import speakersData from "../data/speakers.json";
import sponsorsData from "../data/sponsors.json";
import teamData from "../data/team.json";

export const useJSONData = () => {
  return {
    mainData,
    faqData,
    scheduleData,
    sessionsData,
    speakersData,
    sponsorsData,
    teamData
  };
};