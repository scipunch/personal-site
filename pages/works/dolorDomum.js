import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="DolorDomum">
      <Container>
        <Title>
          DolorDomum <Badge>2022</Badge>
        </Title>
        <P>
          The idea of drawing energy from the environment has nowadays moved from the realm of wishful thinking to the realm of practical implementation.
        </P>
        <P>
          I&apos;ve developed simple landing for DolorDomum consultations. So it's increased sales by 14%.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://dolordomum.com/">
              https://dolordomum.com/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Position</Meta>
            Freelancer
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>JavaScript, React, ChakraUI</span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/dolorDomum_1.png" alt="Web3 Antivirus" />
      </Container>
    </Layout>
  )
}

export default Work;

