import logo from '../images/logo_no_background_hd.png';

function Upbar(){
    return(
        <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand" href="#">
          <img src={logo} alt="" width="30" height="30" class="d-inline-block align-text-top"/>
          Thinking App
          </span>
        </div>
      </nav>
    );
}

export default Upbar;
