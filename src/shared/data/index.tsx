import BallotRoundedIcon from "@mui/icons-material/BallotRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
export const routeLinks = {
  login: {
    title: "ورود",
    url: "/login",
  },
  register: {
    title: "ثبت نام",
    url: "/register",
  },
  dashboard: {
    title: "شروع کنید",
    url: "/dashboard",
  },
};

export const NavData = [
  {
    name: " لیست پلن ها",
    link: "plans",
    icon: <BallotRoundedIcon />,
  },
  {
    name: "درباره ما",
    link: "about",
    icon: <PeopleRoundedIcon />,
  },
];

export enum globalText {
  logoText = "بیلیو",
  loginBtnText = "ورود | ثبت نام",
  nextStepBtnText = "مرحله بعد",
}

export enum loginData {
  title = "ورود به بیلیو",
  emailPlaceholder = "ایمیل",
  passwordPlaceholder = "رمز عبور",
  textButton = "ورود",
  questionText = "اکانت نداری ؟",
  questionLinkText = "بساز",
}

export enum registerData {
  title = "ثبت نام برای بیلیو",
  fullNamePlaceHolder = "نام کامل",
  emailPlaceholder = "ایمیل",
  passwordPlaceholder = "رمز عبور",
  confrimPasswordPlaceholder = "تکرار رمز عبور",
  textButton = "ثبت نام",
  questionText = "اکانت داری ؟",
  questionLinkText = "وارد شو",
}
