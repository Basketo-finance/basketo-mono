import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import EnergySavingsLeafOutlinedIcon from '@mui/icons-material/EnergySavingsLeafOutlined';
import SpokeIcon from '@mui/icons-material/Spoke';
import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';
import MuiRouteOutlinedIcon from '@mui/icons-material/RouteOutlined';

const RouteIcon = ({...props})=>(
  <MuiRouteOutlinedIcon {...props} style={{transform:"rotate(90deg)"}} />
)

export const stepOne = [
  {
    id: 1,
    icon: GroupsOutlinedIcon,
    text: "Managed by DAOs and Pro-Investors",
  },
  {
    id: 2,
    icon: TipsAndUpdatesOutlinedIcon,
    text: "Wide range of Crypto Baskets that represent a Theme or an Idea.",
  },
];

export const stepTwo = [
  {
    id: 1,
    icon: EnergySavingsLeafOutlinedIcon,
    text: "Invest securely in your favorite Baskets with very minimal transaction fees.",
  },
  {
    id: 2,
    icon: SpokeIcon,
    text: "Invest with a wide range of crypto currencies. Learn more about list of accepted coins. ",
  },
];

export const stepThree = [
  {
    id: 1,
    icon: MarkEmailUnreadOutlinedIcon,
    text: "Get updates about all the strategic rebalances made by Basket managers.",
  },
  {
    id: 2,
    icon: RouteIcon,
    text: "Baskets are fully customisable. Opt-in for rebalance updates by managers or make your own rebalances. ",
  },
];
