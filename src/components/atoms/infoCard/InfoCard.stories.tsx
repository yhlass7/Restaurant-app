import { FC } from "react";
import InfoCard from "./InfoCard";

export const Default = {
  args: {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM14.2 14.2L9 11V5H10.5V10.2L15 12.9L14.2 14.2Z"
          fill="#FFF8EE"
        />
      </svg>
    ),
    title: "7.30 AM - 9.30 PM",
  },
};

const infoCardConfig = {
  title: "Atoms/InfoCard",
  component: InfoCard,
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
  decorators: [
    (Story: FC) => (
      <div style={{ backgroundColor: " #c33" }}>
        <Story />
      </div>
    ),
  ],
};

export default infoCardConfig;
