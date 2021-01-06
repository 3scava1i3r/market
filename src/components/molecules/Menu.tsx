import React, { ReactElement } from 'react'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'gatsby'
import { useLocation } from '@reach/router'
import loadable from '@loadable/component'
import styles from './Menu.module.css'
import { useSiteMetadata } from '../../hooks/useSiteMetadata'
import Container from '../atoms/Container'
import UserPreferences from './UserPreferences'
import Badge from '../atoms/Badge'
import Logo from '../atoms/Logo'
import Vote from '../../pages/vote'
import LogOut from '../../pages/logout'

const Wallet = loadable(() => import('./Wallet'))

declare type MenuItem = {
  name: string
  link: string
}

function MenuLink({ item }: { item: MenuItem }) {
  const location = useLocation()

  const classes =
    location?.pathname === item.link
      ? `${styles.link} ${styles.active}`
      : styles.link

  return (
    <Link key={item.name} to={item.link} className={classes}>
      {item.name}
    </Link>
  )
}

export default function Menu(): ReactElement {
  const { menu, siteTitle } = useSiteMetadata()

  return (
    <nav className={styles.menu}>
      <Container>
        <Link to="/" className={styles.logoUnit}>
          <Logo />
          <h1 className={styles.title}>
            {siteTitle} <Badge label="beta" />
          </h1>
        </Link>

        <ul className={styles.navigation}>
          {menu.map((item: MenuItem) => (
            <li key={item.name}>
              <MenuLink item={item} />
            </li>
          ))}

          <li>
              <Link className={styles.link} to="/vote">Vote</Link>
          </li>

          <li>
            <Wallet />
          </li>
          <li>
            <UserPreferences />
          </li>
          <li>
            <Link className={styles.navigation} style={{fontWeight:"bold"}} to="/logout">Log Out</Link>
          </li>
          {/* <Router>
            <Switch>
              <Route path='/logout'>
                  <LogOut />
              </Route>
            </Switch>
          </Router> */}
        </ul>
      </Container>
    </nav>
  )
}
