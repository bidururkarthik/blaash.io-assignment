import ImageOne from "../assets/home/playlistOne.svg";
import ImageTwo from "../assets/home/playlistTwo.svg";
import ImageThree from "../assets/home/playlistThree.svg";
import ImageFour from "../assets/home/playlistFour.svg";
import ImagFive from "../assets/home/playlistFive.svg";
import ImageSix from "../assets/home/playlistSix.svg";
import UpArrowIcon from "../assets/sidebar/upArrow.svg";
import DownArrowIcon from "../assets/sidebar/downArrow.svg";
import RevenueIcon from "../assets/sidebar/revenue.svg";
import ImageIcon from "../assets/sidebar/image.svg";
import BrightImageIcon from "../assets/sidebar/brightImage.svg";
import ClickIcon from "../assets/sidebar/click.svg";
import CalenderIcon from "../assets/sidebar/calender.svg";
import SettingsIcon from "../assets/sidebar/settings.svg";

export const STRINGS = {
  HEADER_HEADING: "Design Studio",
  HEADER_USERNAME: "Leonardo C",
  SUPPORT_BTN_TEXT: "Support Request",
  PRODUCT_BTN_TEXT: "Product Tour",
  SEARCH_PLACEHOLDER: "Search Project ...",
  HOME_HEADER_TEXT: "Product Playlists",
  HOME_HEADER_BTN_LABEL: "Generate Code",
  SIDEBAR_OPEN_TEXT: "Product Playlist",
  VIDEO_STATUS: "Video Status",
  ACTIVE: "Active",
  INACTIVE: "Inactive",
  PRODUCT_LIST: "Product List",
  UPDATE_PLAYLIST: "Update Playlist",
};

export const URL = {
  USER_IMG:
    "https://s3-alpha-sig.figma.com/img/ca36/f578/7872525aaf6ad0282e97da8c646da0d9?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nekSJD9S67i7g1tn0yI5wu3pFmrTSTr3ywVP7h7Bnghir6berAKa8w3xjE2IWM4CXNDBfiL3s0~FswAlHlO4ThtILAbdhLqH3ux4Zm0F6YT-t55OT03TiGWVudT1~r5pWI7cOiDcXTgRN8ITR~rh67my9J5t9C93Bf6df21JqXVabOXVGgcUAunl3GggELwyRcbWuNCwQROyEabJxROnyC63OVLuz5mUMT90TTLqAdrLi-1RslOHmuSZLM6z6WBqES7iYo4fcIdsj5ThQkeZPqPyXG3Ptva62IjVj1KVtseUz5OxS~Ih04z9v4AVUpygq6W9ChmU1M3iRer-hzw~kw__",
};

export const PlaylistBackgoundImages = [
  ImageOne,
  ImageTwo,
  ImageThree,
  ImageFour,
  ImagFive,
  ImageSix,
];

export const SidebarItems = [
  { icon: RevenueIcon, text: "Revenue", downArrow: false, upArrow: false },
  {
    icon: ImageIcon,
    text: "Shoppable Video",
    downArrow: true,
    downArrowIcon: DownArrowIcon,
    upArrow: false,
  },
  {
    icon: ImageIcon,
    text: "Story",
    downArrow: true,
    downArrowIcon: DownArrowIcon,
    upArrow: false,
  },
  {
    icon: ImageIcon,
    text: "Live Commerce",
    downArrow: true,
    downArrowIcon: DownArrowIcon,
    upArrow: false,
  },
  {
    icon: BrightImageIcon,
    text: "Playlist Manager",
    downArrow: false,
    upArrow: true,
    upArrowIcon: UpArrowIcon,
  },
  { icon: ClickIcon, text: "One Click Post", downArrow: false, upArrow: false },
  { icon: CalenderIcon, text: "Calender", downArrow: false, upArrow: false },
  {
    icon: SettingsIcon,
    text: "Hire Influencer",
    downArrow: false,
    upArrow: false,
  },
];
