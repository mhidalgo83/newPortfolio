import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="header u-margin-bottom-med">
    <div className="header__main">
      <Link to="/">{siteTitle}</Link>
    </div>
    <div className="header__links">
      <Link to="/portfolio/" className="header__links--each">
        Portfolio
      </Link>
      <Link to="/blog/" className="header__links--each">
        Blog
      </Link>
      <Link to="/contact/" className="header__links--each">
        Contact
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
