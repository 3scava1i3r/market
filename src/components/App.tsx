import React, { ReactElement } from 'react'
import Footer from './organisms/Footer'
import Header from './organisms/Header'
import Styles from '../global/Styles'
import styles from './App.module.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSiteMetadata } from '../hooks/useSiteMetadata'
import { useOcean } from '@oceanprotocol/react'
import Alert from './atoms/Alert'
import { graphql, PageProps, useStaticQuery } from 'gatsby'
import LogOut from '../pages/logout'

const contentQuery = graphql`
  query AppQuery {
    purgatory: allFile(filter: { relativePath: { eq: "purgatory.json" } }) {
      edges {
        node {
          childContentJson {
            account {
              title
              description
            }
          }
        }
      }
    }
  }
`

export default function App({
  children,
  ...props
}: {
  children: ReactElement
}): ReactElement {
  const data = useStaticQuery(contentQuery)
  const purgatory = data.purgatory.edges[0].node.childContentJson.account


  const {
    isInPurgatory: isAccountInPurgatory,
    purgatoryData: accountPurgatory
  } = useOcean()

  return (
    <Router>
      <div className={styles.app}>
         <Switch>
            <Route path="/logout">
               <LogOut />
            </Route>
    
          <Styles>
             <div className={styles.app}>
             <Header />
             {isAccountInPurgatory && (
             <Alert
              title={purgatory.title}
              badge={`Reason: ${accountPurgatory?.reason}`}
              text={purgatory.description}
              state="error"
          />
        )}

             <main className={styles.main}>{children}</main>
            <Footer />
            </div>
          </Styles>
         </Switch>
      </div>
    </Router>


    // <Styles>
    //   <div className={styles.app}>
    //     <Header />



    //     {isAccountInPurgatory && (
    //       <Alert
    //         title={purgatory.title}
    //         badge={`Reason: ${accountPurgatory?.reason}`}
    //         text={purgatory.description}
    //         state="error"
    //       />
    //     )}

    //     <main className={styles.main}>{children}</main>
    //     <Footer />
    //   </div>
    // </Styles>
  )
}


