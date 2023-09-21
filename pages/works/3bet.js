import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="3bet">
      <Container>
        <Title>
          3Bet <Badge>2020</Badge>
        </Title>
        <P>
          At My first job here was classifying teams into single groups. Many bookmakers call the same teams slightly differently, I was able to automate the comparison process with a 97% accuracy. It was necessary to implement both a number of fuzzy string comparison algorithms in Java and add analysis using ML models in Python.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://3bet.pro/">
              https://3bet.pro/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Position</Meta>
            Junior Java Developer
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Java, Kotlin, Spring Boot, Redis, PostgreSQL, Python, Pandas, ScikitLearn</span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/3bet_1.jpeg" alt="3Bet" />
      </Container>
    </Layout>
  )
}

export default Work;


