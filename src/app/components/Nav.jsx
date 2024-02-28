import './nav.scss';
const Nav = () => {
  return (
    <div className="nav-container">
      <div className="nav-wrapper">
        <div className="left">left</div>
        <div className="center">
          <span className="logo">Yikess.</span>
        </div>
        <div className="right">
          <div className="menu-item">
            <ul>
              <li>home</li>
              <li>our-story</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
