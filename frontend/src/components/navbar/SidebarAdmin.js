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
import { AiOutlineTransaction } from 'react-icons/ai';
import { BiPlanet } from 'react-icons/bi';
import { useNavigate, useLocation } from 'react-router-dom';
import useMetaMask from '../../hook/MetamaskHook';

const SidebarAdmin = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  
  const { connect, disconnect, isActive, account, shouldDisable } = useMetaMask();

  return (
    <SideNav
      className="sidebar"
      onSelect={(selected) => {
        if (selected === 'logout') {
          
        } else {
          const to = '/' + selected;
          if (pathname !== to) {
            navigate(to);
            localStorage.setItem('path',pathname);
          }
          else{
            localStorage.setItem('path','/' + selected);
          }
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
        <NavItem eventKey="transaction">
          <NavIcon className="sidebar-icon">
            <AiOutlineTransaction size="2em" />
          </NavIcon>
          <NavText>Planet Transaction</NavText>
        </NavItem>
        <NavItem eventKey="cadastre">
          <NavIcon className="sidebar-icon">
            <BiPlanet size="2em" />
          </NavIcon>
          <NavText>Planet Cadastre</NavText>
        </NavItem>
      </Nav>
      <Nav className="sidebar-wallet">
        <NavItem eventKey="logout" onClick={disconnect}>
          <NavIcon className="sidebar-icon">
            <MdLogout size="2em" color="rgb(255,255,255)" />
          </NavIcon>
          <NavText>Disconnect Wallet</NavText>
        </NavItem>
      </Nav>
    </SideNav>
  );
};
export default SidebarAdmin;
