import Link from 'next/link'

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link href="/">
          <a className='navbar-brand'>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src="./images/logo.jpg" alt="Digital Character Cafe Logo" width="100" height="100" style={{ borderRadius: '50%', marginRight: '10px' }} /> 
              The Digital Character Cafe
            </div>
          </a>
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <Link href="">
              <li className="nav-item text-white">Cafe staff</li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  )
}
