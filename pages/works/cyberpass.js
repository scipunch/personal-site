import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Cyberpass">
      <Container>
        <Title>
          Cyberpass <Badge>2024</Badge>
        </Title>
        <P>
          Cyberpass is the go-to solution for gaming clubs like PC or VR. It provides systems to generate and manage customer accounts with the help of Android and iOS wallets. This project is currently integrated into <Link href="https://mir-vr.com/">MirVr <ExternalLinkIcon mx="2px" /></Link>.
        </P>
        <P>
          Here, I&apos;ve made the whole project from the technical specification to the actual realization. It was very fun, and I&apos;ve learned more about management and delivering new features. For now, I continue adding new features here.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Position</Meta>
            Lead software developer
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Python, Fast API, React, PostgreSQL</span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/cyberpass_1.png" alt="Cyberpass superuser" />
        <WorkImage src="/images/works/cyberpass_2.png" alt="Cyberpass manager" />
      </Container>
    </Layout>
  )
}

export default Work;
