import '../../styles/body/header.scss';
import Avatar from '../../assets/avatar.png';
import Logo2 from '../../assets/logo2.png';
const Header = () => {
    return (
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div className="header">
                <img className='logo2' src={Logo2} alt='logo'></img>
                <div className='search'>
                    <button type="submit" className='submit'><i className="fa fa-search"></i></button>
                    <input className='input_search' placeholder="Search" ></input>
                </div>
                <img className='avatar' src={Avatar} alt='avatar'></img>
            </div>
        </>
    )
}

export default Header; 