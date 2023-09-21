import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Pixelplex">
      <Container>
        <Title>
          Pixelplex <Badge>2023</Badge>
        </Title>
        <P>
          Web3 Antivirus installs as a browser extension. It vets the parties and properties you interact with on Web3 to warn you before you take potentially dangerous actions.
        </P>
        <P>
          Here I&apos;ve been analyzing smart contracts for almost a year using AST and IR analysis in Python with custom algorithms and unique techniques. In addition, I am responsible for a number of DE pipelines for processing project logos and tokens, terrabytes of NFT&apos;s media and malicious sites.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://web3antivirus.io/">
              https://web3antivirus.io/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Position</Meta>
            Python Developer
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Python, Pandas, PostgreSQL, Docker, Bash</span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/w3a_1.jpg" alt="Web3 Antivirus" />
      </Container>
    </Layout>
  )
}

export default Work;
