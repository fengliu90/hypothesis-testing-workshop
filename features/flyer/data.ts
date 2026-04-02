import { workshop } from "@/data/workshop";

const keynoteSpeakers = workshop.sections.speakers.items.filter(
  (speaker) => speaker.name !== "TBA",
);

const importantDates = [
  "Submission deadline: 7 May 2026",
  "Notification date: 7 June 2026",
  "Camera-ready deadline: 28 June 2026",
  "Workshop date: July 10 or 11, 2026 (TBA)",
] as const;

export const flyerData = {
  workshop,
  keynoteSpeakers,
  organizers: workshop.sections.organizers.items,
  topics: workshop.sections.topics.groups,
  importantDates,
  websiteUrl: "https://hypothesis-testing-workshop.vercel.app",
} as const;
