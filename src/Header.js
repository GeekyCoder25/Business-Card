import profile from './images/profile.png'

const Header = () => {
    return (
        <header>
            <a href="https://twitter.com/_GeekyCoder_" target="_blank"  rel="noreferrer"className='image-container'>
                <img src={profile} alt="profile" className='profile-logo' />
            </a>
            <h1>Geeky Coder</h1>
            <p>Frontend Developer</p>
            <a href="https://geekycoder25.github.io/Portfolio/" target="_blank"  rel="noreferrer"className='weblink'>geekycoder.website</a><br />
            <a href="mailto:toyibe25@gmail.com" target="_blank"  rel="noreferrer">
                <button className='email'><i className="fas fa-envelope"></i> Email</button>
            </a>
            <a href="https://www.linkedin.com/in/toyib-lawal" target="_blank" rel="noreferrer">
                <button className='linkedin'><i className="fab fa-linkedin"></i> LinkedIn</button>
            </a>
        </header>
    );
}

export default Header;