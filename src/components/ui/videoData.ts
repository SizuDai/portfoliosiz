// videoData.ts

export interface Project {
    id: number;
    title: string;
    videoId: string;
    type: "shorts" | "normal";
  }
  
  export type Category = "shorts-reels" | "animations" | "artworks" | "digital-ads";
  
  export interface CategoryProjects {
    category: Category;
    projects: Project[];
  }
  
  export const videoData: CategoryProjects[] = [
    {
      category: "shorts-reels",
      projects: [
        {
          id: 1,
          title: "Animated Short (16:9)",
          videoId: "X9CThBxdcS0", // 16:9 video
          type: "normal",
        },
        {
          id: 2,
          title: "Animated Short (9:16)",
          videoId: "NtqJ2_3Rpa8", // Reel/shorts (vertical)
          type: "shorts",
        },
      ],
    },
    {
      category: "animations",
      projects: [
        // Add animation projects here...
      ],
    },
    {
      category: "artworks",
      projects: [
        {
          id: 3,
          title: "Animated Short (9:16)",
          videoId: "qlOq-0qzOJw",
          type: "shorts",
        },
        // Add more artwork projects if needed...
      ],
    },
    {
      category: "digital-ads",
      projects: [
        // Add digital ads projects here...
      ],
    },
  ];
  
  // Create a categories array from the videoData
  export const categories: Category[] = videoData.map((group) => group.category);
  