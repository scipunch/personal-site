import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="HaasOnline">
      <Container>
        <Title>
          Haas Online <Badge>2021</Badge>
        </Title>
        <P>
          Crypto trading bots automation
        </P>
        <P>
          I&apos;ve been automating crypto bots setup to make that process as fast and as easy as possible. We&apos;ve made a lot of tests, found great strategies and share them with our clients.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.haasonline.com/">
              https://www.haasonline.com/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Position</Meta>
            Python Engineer
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Python, Pandas, Docker</span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/haasOnline_1.png" alt="HaasOnline" />
      </Container>
    </Layout>
  )
}

export default Work;

