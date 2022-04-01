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
import { VscDebugDisconnect } from 'react-icons/vsc';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();


  return (
    <SideNav
      className="sidebar"
      onSelect={(selected) => {
        const to = '/' + selected;
        if (pathname !== to) {
          navigate(to);
          localStorage.setItem('path',pathname);
        }
        else{
          localStorage.setItem('path','/' + selected);
        }
      }}
    >
      <Toggle />
      <Nav defaultSelected={pathname.substring(1)}>
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
      </Nav>
      <Nav className="sidebar-wallet">
        <NavItem eventKey="login">
          <NavIcon className="sidebar-icon">
            <VscDebugDisconnect size="2em" color="rgb(255,255,255)" />
          </NavIcon>
          <NavText>Connect Wallet</NavText>
        </NavItem>
      </Nav>
    </SideNav>
  );
};
export default Sidebar;
