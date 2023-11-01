
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
  icon?: string,
  image?: string,
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
    title: "Subscriptions",
    data: [
      {
        name: "Web Dev Simplified",
        url: "https://www.youtube.com/@WebDevSimplified",
        image: "https://yt3.ggpht.com/ytc/APkrFKZWeMCsx4Q9e_Hm6nhOOUQ3fv96QGUXiMr1-pPP=s88-c-k-c0x00ffffff-no-rj",
      },
      {
        name: "FreeDawkins",
        url: "https://www.youtube.com/@FreeDawkins",
        image: "https://yt3.ggpht.com/ytc/APkrFKYZkwH0yDc1gDc-x_0xk6Cl0RtZKLaGIOOCfbys=s88-c-k-c0x00ffffff-no-rj",
      },
      {
        name: "SWISHOUT",
        url: "https://www.youtube.com/@SWISHOUT",
        image: "https://yt3.ggpht.com/uWbQhInWYumTsNseekxAw8ZOf3Nmf05IBUiEz84TMpdT_dYCNU0avrLfqXW-mY1zIDScM1Gc_A=s88-c-k-c0x00ffffff-no-rj",
      },
      {
        name: "Ray William Johnson",
        url: "https://www.youtube.com/@RayWilliamJohnson",
        image: "https://yt3.ggpht.com/hIL2R51j3u9v9SfFGKK4t4Ekbz84m3N_lGXoJoMaFQEMU2CR_Dk-ceg_7aG96OFAzoUpBc2KgP0=s88-c-k-c0x00ffffff-no-rj",
      },
      {
        name: "Los Angeles Lakers",
        url: "https://www.youtube.com/@lakers",
        image: "https://yt3.ggpht.com/cRfRvdqkt8UFmvTerPdkMouNVUxUDxCKvzXw33s3e9Cfw4yaf9TN1UzEQ8FwwFylT9wCm4WN=s88-c-k-c0x00ffffff-no-rj",
      },
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
]