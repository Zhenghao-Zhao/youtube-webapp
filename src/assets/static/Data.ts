
export const chips = [
  "All",
  "Mixes",
  "Music",
  "Top Gear",
  "Performance cars",
  "Game shows",
  "Gaming",
  "Car Racing",
  "NBA",
  "Computer programming",
  "Culinary arts",
  "Retrievers",
  "Live",
  "Comedy",
  "Action-adventure games",
  "Recently uploaded"
]

export type GuideEntryType = {
  name: string,
  url: string,
  icon: string,
  // image: string,
}

export type GuideSectionType = {
  title: string,
  icon?: string,
  data: GuideEntryType[],
}

export const GuideSections = [
  {
    title: "",
    data: [
      {
        name: "Home",
        url: "#",
        icon: "Home",
      },
      {
        name: "Shorts",
        url: "#",
        icon: "Shorts",
      },
      {
        name: "Subscription",
        url: "#",
        icon: "Subscription"
      },
    ],
  },

  {
    title: "You",
    icon: "ArrowRight",
    data: [
      {
        name: "Your channel",
        url: "#",
        icon: "You",
      },
      {
        name: "Library",
        url: "#",
        icon: "Library",
      },
      {
        name: "History",
        url: "#",
        icon: "History",
      }
    ]
  },

  {
    title: "Explore",
    data: [
      {
        name: "Trending",
        url: "#",
        icon: "Trending",
      },
      {
        name: "Music",
        url: "#",
        icon: "Music",
      },
      {
        name: "Films",
        url: "#",
        icon: "Films"
      },
      {
        name: "Live",
        url: "#",
        icon: "Live"
      },
      {
        name: "Gaming",
        url: "#",
        icon: "Gaming",
      },
      {
        name: "News",
        url: "#",
        icon: "News"
      },
      {
        name: "Sports",
        url: "#",
        icon: "Sports"
      },
      {
        name: "Podcasts",
        url: "#",
        icon: "Podcasts"
      },
    ]
  },

  // {
  //   title: "Subscriptions",
  //   data: [
  //     {
  //       name: "Web Dev Simplified",
  //       url: "#",
  //       image: "https://yt3.ggpht.com/ytc/APkrFKZWeMCsx4Q9e_Hm6nhOOUQ3fv96QGUXiMr1-pPP=s88-c-k-c0x00ffffff-no-rj",
  //     }
  //   ]
  // }
]