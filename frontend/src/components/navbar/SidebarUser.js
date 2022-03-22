import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from '@trendmicro/react-sidenav';
import '../../styles/Sidebar.scss';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { FaHome } from 'react-icons/fa';
import { MdOutlineDescription } from 'react-icons/md';
import { MdLogout } from 'react-icons/md';
import { FiSettings } from 'react-icons/fi';
import { useNavigate, useLocation } from 'react-router-dom';

const SidebarUSer = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <SideNav
      className="sidebar"
      onSelect={(selected) => {
        if (selected === 'logout') {
          
        } else {
          const to = '/' + selected;
          if (pathname !== to) {
            navigate(to);
          }
        }
      }}
    >
      <Toggle />
      <Nav defaultSelected="home">
        <NavItem eventKey="home">
          <NavIcon className="sidebar-icon">
            <FaHome size="1.8em" />
          </NavIcon>
          <NavText>Home</NavText>
        </NavItem>
        <NavItem eventKey="description">
          <NavIcon className="sidebar-icon">
            <MdOutlineDescription size="2em" />
          </NavIcon>
          <NavText>Description</NavText>
        </NavItem>
        <NavItem eventKey="mypage">
          <NavIcon className="sidebar-icon">
            <FiSettings size="2em" />
          </NavIcon>
          <NavText>MY Page</NavText>
        </NavItem>
      </Nav>
      <Nav className="sidebar-wallet">
        <NavItem eventKey="logout">
          <NavIcon className="sidebar-icon">
            <MdLogout size="2em" color="rgb(255,255,255)" />
          </NavIcon>
          <NavText>Disconnect Wallet</NavText>
        </NavItem>
      </Nav>
    </SideNav>
  );
};
export default SidebarUSer;
