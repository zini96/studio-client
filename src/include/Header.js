function Header(){
    return(
        <header>
            <div className="cartdiv">
                <ul>
                    <li>CART</li>
                    <li>MY PAGE</li>
                    <li>JOIN</li>
                    <li>돋보기아이콘</li>
                </ul>
            </div>
            <div className="headermain">
                <h1>
                    <img src=".../public/images/logo/logo1.png"/>
                </h1>
            </div>
            <div className="menunavi">
                <ul>
                    <li>ABOUT US</li>
                    <li>ARTWORKS</li>
                    <li>RESERVATION</li>
                    <li>CONTACT US</li>
                </ul>
            </div>
        </header>
    )
}

export default Header;