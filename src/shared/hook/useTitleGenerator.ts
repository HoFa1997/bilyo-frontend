import { useRouter } from "next/router";

export const useTitleGenerator = (): string => {
  const { pathname } = useRouter();
  // Split the path into individual segments
  const segments = pathname.split("/");

  // Convert each segment to title case
  const titleSegments = segments.map(
    (segment) => segment.charAt(0).toUpperCase() + segment.slice(1)
  );

  // Join the title segments back together with spaces
  const title = titleSegments.join(" ");

  // Return the final title string
  return `Bilyo | ${title === " " ? "Home Page" : title}`;
};
