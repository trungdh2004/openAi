import { ToolItemProps } from "./components/dashboard/ToolItem";

export const MAX_FREE_COUNT = 5;
export const THEME_MODES = [
  {
    lable: "Dark",
    value: "dark",
  },
  {
    lable: "Light",
    value: "light",
  },
];
export const TOOLS: ToolItemProps[] = [
  {
    title: "Conversation",
    icon: "/icon/conversation.svg",
    url: "/conversation",
    slug: "conversation",
    color: "bg-blue-500",
  },
  {
    title: "Photo generation",
    icon: "/icon/photo.svg",
    url: "/photo",
    color: "bg-violet-500",
    slug: "photo",
  },
  {
    title: "Video generation",
    icon: "/icon/video.svg",
    url: "/video",
    color: "bg-amber-500",
    slug: "video",
  },
  {
    title: "Audio generation",
    icon: "/icon/audio.svg",
    url: "/audio",
    color: "bg-orange-500",
    slug: "audio",
  },
  {
    title: "Code generation",
    icon: "/icon/code.svg",
    url: "/code",
    color: "bg-green-500",
    slug: "code",
  },
];

export const NAVIGATIONS = [
  {
    title: "Dashboard",
    icon: "/icon/dashboard.svg",
    url: "/dashboard",
    slug: "dashboard",
  },
  ...TOOLS,
];

export const DAY_IN_MX = 86_400_000;

export const PHOTO_AMOUNT_OPTIONS = [
  {
    value: "1",
    label: "1 Photo",
  },
  {
    value: "2",
    label: "2 Photos",
  },
  {
    value: "3",
    label: "3 Photos",
  },
  {
    value: "4",
    label: "4 Photos",
  },
  {
    value: "5",
    label: "5 Photos",
  },
];

export const PHOTO_RESOLUTION_OPTIONS = [
  {
    value: "256x256",
    label: "256x256",
  },
  {
    value: "512x512",
    label: "512x512",
  },
  {
    value: "1024x1024",
    label: "1024x1024",
  },
];
