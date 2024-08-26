import Hero from "./Hero";

export const Default = {
  args: {
    title: "About Us",
    subTitle: "Read our Story, How we started and about the Team",
  },
};

const heroConfig = {
  title: "Atoms/Hero",
  component: Hero,
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
};
export default heroConfig;
