import Inventory2RoundedIcon from '@mui/icons-material/Inventory2Rounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import ReceiptRoundedIcon from '@mui/icons-material/ReceiptRounded';
import TocRoundedIcon from '@mui/icons-material/TocRounded';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
const prifix = '/dashboard';
export const DashboardData = [
  // DASHBOARD
  {
    title: 'داشبورد',
    icon: <DashboardRoundedIcon />,
    link: null,
    subItem: [
      {
        title: 'صفحه اصلی',
        icon: <DashboardRoundedIcon />,
        link: `${prifix}/`,
      },
      {
        title: 'آمار محصولات',
        icon: <AddCircleRoundedIcon />,
        link: `${prifix}/product-report`,
      },
      {
        title: 'آمار فروش',
        icon: <TocRoundedIcon />,
        link: `${prifix}/sell-report`,
      },
    ],
  },
  // Products
  {
    title: 'محصولات',
    icon: <Inventory2RoundedIcon />,
    link: null,
    subItem: [
      {
        title: 'لیست محصولات',
        icon: <TocRoundedIcon />,
        link: `${prifix}/products`,
      },
      {
        title: 'ثبت',
        icon: <AddCircleRoundedIcon />,
        link: `${prifix}/products/add`,
      },
    ],
  },
  // Customers
  {
    title: 'مشتریان',
    icon: <PeopleAltRoundedIcon />,
    link: null,
    subItem: [
      {
        title: 'لیست مشتریان',
        icon: <TocRoundedIcon />,
        link: `${prifix}/customers`,
      },
      {
        title: 'مشتری جدید',
        icon: <AddCircleRoundedIcon />,
        link: `${prifix}/customers/add`,
      },
    ],
  },
  // Invoices
  {
    title: 'فاکتورها',
    icon: <ReceiptRoundedIcon />,
    link: null,
    subItem: [
      {
        title: 'لیست فاکتورها',
        icon: <TocRoundedIcon />,
        link: `${prifix}/invoices`,
      },
      {
        title: 'فاکتور جدید',
        icon: <AddCircleRoundedIcon />,
        link: `${prifix}/invoices/add`,
      },
    ],
  },
];
