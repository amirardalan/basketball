import { css } from '@emotion/react'
import Container from '@/components/Container'
import { homeContent } from '@/data/content'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import { getNbaTeams } from '@/lib/rapidapi'

export const getStaticProps: GetStaticProps = async () => {
  const teams = await getNbaTeams()

  try {
    return { props: { home: homeContent, teams: teams.response } }
  } catch { return { props: { home: homeContent, teams: [] } } }
}

export default function Home({ home, teams }) {

  const styleMain = css({
    h1: {
      fontSize: 60,
      fontWeight: 900,
      lineHeight: '95%',
    },
    p: {
      fontWeight: 300,
    }
  })
  const styleLinks = css({
    maxWidth: 480,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    'h2': {
      marginRight: '.2rem',
      '&:after': {
        content: '" →"',
      }
    },
    '@media (max-width: 480px)': {
      flexDirection: 'column',
    }
  })
  const homeTop = css({
    marginBottom: '2rem',
  })

  console.log(teams)

  return (
    <Container title={home.meta.title}>
      <main css={styleMain} className="home">

        <div css={homeTop}>

          <h1>
            API-BASKETBALL
          </h1>

          <p>
            Basketball API stats and user interface experiment.
          </p>

        </div>

        <div css={styleLinks}>

          <Link href="/">
            <a>
              <h2>Players</h2>
            </a>
          </Link>

          <Link href="/">
            <a>
              <h2>Teams</h2>
            </a>
          </Link>

          <Link href="/">
            <a>
              <h2>Stats</h2>
            </a>
          </Link>

          <Link href="/">
            <a>
              <h2>About</h2>
            </a>
          </Link>

        </div>
      </main>
    </Container>
  )
}