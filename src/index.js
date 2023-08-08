import Alpine from "alpinejs";

window.Alpine = Alpine;

Alpine.data("showMore", () => ({
  open: false,
}));

Alpine.data("tags", () => ({
  get tagsList() {
    const tags = [
      "Docker",
      "PHP",
      "Laravel",
      "NodeJS",
      "AdonisJS",
      "Express",
      "React",
      "React Native",
      "NestJS",
      "NextJS",
      "Vue",
      "NuxtJS",
      "Angular",
      "Typescrypt",
      "Bootstrap",
      "TailwindCSS",
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Wordpress",
      "Git",
      "GitHub",
      "Scrum",
      "GraphQL",
      "Azure",
      "AWS",
      "Digital Ocean",
    ];
    const itemsPerLine = 15;
    const response = [];
    for (let i = 0; i < itemsPerLine; i++) {
      response.push(tags[(tags.length * Math.random()) | 0]);
    }
    return response;
  },
}));

Alpine.start();
