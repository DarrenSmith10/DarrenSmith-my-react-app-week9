import myImage from "../assets/images/DarrenNewProfile.jpg";

const NavBar = () => {
  return (
    <nav style={styles.navbar}>
        <h1>
        Data Analyst and Software Developer
        </h1>
        <h1 class = "header-subtitle">My Portfolio</h1>
        <div class ="col col-12">
          <div class = "col col-3 wd-mob">
            <a class>
            <img src={myImage} class = "header-avatar" alt="Home" width="300" /></a>
          </div>
        </div>
      </nav>
  )
}

// Inline styles for simplicity
const styles = {  
  navbar: {
    backgroundColor: '#7370c7',
    color: '#fff',
    padding: '10px',
    textAlign: 'center',
  },
};

export default NavBar