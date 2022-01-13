import classes from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li><a href="#">Co? Gdzie? Kiedy?</a></li>
        <li><a href="#"><img src="img/logo.png" alt="" className={classes['nav__logo']}/></a></li>
        <li><a href="#">Informacja czwartkowa</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
