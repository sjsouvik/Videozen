import { createContext, useContext, useReducer } from "react";
import uuid from "react-uuid";

import { dataReducer } from "../reducer/data-reducer";

const DataContext = createContext();

const allPlaylists = [
  {
    id: uuid(),
    name: "HTML-CSS",
    description:
      "The best course for learning the basics HTML5 and CSS3 from scratch",
    owner: "Tanay Pratap",
    image:
      "https://img-a.udemycdn.com/course/480x270/246154_d8b0_3.jpg?UVGqnoVF-PzErMnfG34c7EU-7sl0mqVFfjv7aNF_3wa2EkUtPc6uveXS0WaUZalPaWd6VX4_9mui2V2R2uXxzpoD5SQv-5xI3mhZSXWKRt56WwLewyrKty4aCQvH",
    videos: [
      {
        id: "E8cl_8ktp9M",
        title: "Learn HTML/CSS by creating your portfolio I",
        description:
          "Learn programming by doing and making things. This way you will learn things you use and there's no textbook needed to get started",
        ownerImage:
          "https://yt3.ggpht.com/ytc/AAUvwnibnmzbi8nfRHEAzdI-8lpPGsrD1F6Cg3mAImtQ=s88-c-k-c0x00ffffff-no-rj",
        image:
          "https://i.ytimg.com/vi/wLtwrYBwD7E/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAVFHDmcn0QjJ_D0MrT7vIK7oGwZA",
        partOfPlaylists: [],
      },
      {
        id: "3n1VkrzhxUE",
        title: "Learn HTML/CSS by creating your portfolio II",
        description:
          "Learn programming by doing and making things. This way you will learn things you use and there's no textbook needed to get started",
        ownerImage:
          "https://yt3.ggpht.com/ytc/AAUvwnibnmzbi8nfRHEAzdI-8lpPGsrD1F6Cg3mAImtQ=s88-c-k-c0x00ffffff-no-rj",
        image:
          "https://i.ytimg.com/vi/wLtwrYBwD7E/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAVFHDmcn0QjJ_D0MrT7vIK7oGwZA",
        partOfPlaylists: [],
      },
      {
        id: "UpEupeE7vUE",
        title: "Learn HTML/CSS by creating your portfolio III",
        description:
          "Learn programming by doing and making things. This way you will learn things you use and there's no textbook needed to get started",
        ownerImage:
          "https://yt3.ggpht.com/ytc/AAUvwnibnmzbi8nfRHEAzdI-8lpPGsrD1F6Cg3mAImtQ=s88-c-k-c0x00ffffff-no-rj",
        image:
          "https://i.ytimg.com/vi/wLtwrYBwD7E/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAVFHDmcn0QjJ_D0MrT7vIK7oGwZA",
        partOfPlaylists: [],
      },
      {
        id: "Nyj1nzXLFjM",
        title: "Learn HTML/CSS by creating your portfolio IV",
        description:
          "Learn programming by doing and making things. This way you will learn things you use and there's no textbook needed to get started",
        ownerImage:
          "https://yt3.ggpht.com/ytc/AAUvwnibnmzbi8nfRHEAzdI-8lpPGsrD1F6Cg3mAImtQ=s88-c-k-c0x00ffffff-no-rj",
        image:
          "https://i.ytimg.com/vi/wLtwrYBwD7E/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAVFHDmcn0QjJ_D0MrT7vIK7oGwZA",
        partOfPlaylists: [],
      },
    ],
  },
  {
    id: uuid(),
    name: "JavaScript",
    description:
      "Best in quality JavaScript course that covers JavaScript in depth. Understand behind the scene and inner working of JS in a fun to learn style of coding",
    owner: "Tanay Pratap",
    image:
      "https://img-a.udemycdn.com/course/480x270/405818_aa3f_3.jpg?JOIYUfD2vKs12-SHUpDYZRsRD5olHM27e1MHMxx46SIJZmAZ0V6CFy-DUBCa8TK8DtLzcG7YRanV1XJO0UEkOkWviocc61aMlBqwlHzUxhptKn4W2I3AFBxc2r69",
    videos: [
      {
        id: "C_R6dvU4820",
        title: "Coding with JS 1: Getting Started",
        description:
          "Learn programming by doing and making things. This way you will learn things you use and there's no textbook needed to get started",
        ownerImage:
          "https://yt3.ggpht.com/ytc/AAUvwnibnmzbi8nfRHEAzdI-8lpPGsrD1F6Cg3mAImtQ=s88-c-k-c0x00ffffff-no-rj",
        image:
          "https://i.ytimg.com/vi/C_R6dvU4820/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAia1YFqUliSzZ2akBwwm_WLFIgFQ",
        partOfPlaylists: [],
      },
      {
        id: "wLtwrYBwD7E",
        title: "Coding with JS 2: Event Listeners",
        description:
          "Learn programming by doing and making things. This way you will learn things you use and there's no textbook needed to get started",
        ownerImage:
          "https://yt3.ggpht.com/ytc/AAUvwnibnmzbi8nfRHEAzdI-8lpPGsrD1F6Cg3mAImtQ=s88-c-k-c0x00ffffff-no-rj",
        image:
          "https://i.ytimg.com/vi/wLtwrYBwD7E/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAVFHDmcn0QjJ_D0MrT7vIK7oGwZA",
        partOfPlaylists: [],
      },
      {
        id: "QyJW1yJvwqg",
        title: "Coding with JS 3: Reading from input in html",
        description:
          "Learn programming by doing and making things. This way you will learn things you use and there's no textbook needed to get started",
        ownerImage:
          "https://yt3.ggpht.com/ytc/AAUvwnibnmzbi8nfRHEAzdI-8lpPGsrD1F6Cg3mAImtQ=s88-c-k-c0x00ffffff-no-rj",
        image:
          "https://i.ytimg.com/vi/wLtwrYBwD7E/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAVFHDmcn0QjJ_D0MrT7vIK7oGwZA",
        partOfPlaylists: [],
      },
      {
        id: "2vtYq6wjBXo",
        title: "Coding with JS 4: Writing to DOM",
        description:
          "Learn programming by doing and making things. This way you will learn things you use and there's no textbook needed to get started",
        ownerImage:
          "https://yt3.ggpht.com/ytc/AAUvwnibnmzbi8nfRHEAzdI-8lpPGsrD1F6Cg3mAImtQ=s88-c-k-c0x00ffffff-no-rj",
        image:
          "https://i.ytimg.com/vi/wLtwrYBwD7E/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAVFHDmcn0QjJ_D0MrT7vIK7oGwZA",
        partOfPlaylists: [],
      },
      {
        id: "SLwdkFczQNA",
        title: "Coding with JS 5: Arrays & Objects",
        description:
          "Learn programming by doing and making things. This way you will learn things you use and there's no textbook needed to get started",
        ownerImage:
          "https://yt3.ggpht.com/ytc/AAUvwnibnmzbi8nfRHEAzdI-8lpPGsrD1F6Cg3mAImtQ=s88-c-k-c0x00ffffff-no-rj",
        image:
          "https://i.ytimg.com/vi/wLtwrYBwD7E/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAVFHDmcn0QjJ_D0MrT7vIK7oGwZA",
        partOfPlaylists: [],
      },
      {
        id: "vSQnpxfS9W8",
        title: "Coding with JS 6: Processing Data on User Action",
        description:
          "Learn programming by doing and making things. This way you will learn things you use and there's no textbook needed to get started",
        ownerImage:
          "https://yt3.ggpht.com/ytc/AAUvwnibnmzbi8nfRHEAzdI-8lpPGsrD1F6Cg3mAImtQ=s88-c-k-c0x00ffffff-no-rj",
        image:
          "https://i.ytimg.com/vi/wLtwrYBwD7E/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAVFHDmcn0QjJ_D0MrT7vIK7oGwZA",
        partOfPlaylists: [],
      },
      {
        id: "amTn4KB4RL8",
        title: "Coding with JS 7: Templating in JavaScript",
        description:
          "Learn programming by doing and making things. This way you will learn things you use and there's no textbook needed to get started",
        ownerImage:
          "https://yt3.ggpht.com/ytc/AAUvwnibnmzbi8nfRHEAzdI-8lpPGsrD1F6Cg3mAImtQ=s88-c-k-c0x00ffffff-no-rj",
        image:
          "https://i.ytimg.com/vi/wLtwrYBwD7E/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAVFHDmcn0QjJ_D0MrT7vIK7oGwZA",
        partOfPlaylists: [],
      },
      {
        id: "G7FUyJ__iI4",
        title: "Coding with JS 8: generating HTML from JavaScript",
        description:
          "Learn programming by doing and making things. This way you will learn things you use and there's no textbook needed to get started",
        ownerImage:
          "https://yt3.ggpht.com/ytc/AAUvwnibnmzbi8nfRHEAzdI-8lpPGsrD1F6Cg3mAImtQ=s88-c-k-c0x00ffffff-no-rj",
        image:
          "https://i.ytimg.com/vi/wLtwrYBwD7E/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAVFHDmcn0QjJ_D0MrT7vIK7oGwZA",
        partOfPlaylists: [],
      },
    ],
  },
];

const dataState = {
  allPlaylists,
  likedVideos: [],
  createdPlaylists: [{ id: uuid(), name: "Watch Later", videos: [] }],
};

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, dataState);
  return (
    <DataContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};

export default DataProvider;
