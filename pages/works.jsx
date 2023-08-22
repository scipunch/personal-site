import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import { WorkGridItem } from '../components/grid-item';
import thumbPixelplex from '../public/images/works/pixelplex.png';
import thumbDolorDomum from '../public/images/works/dolorDomum.png';
import thumbHaasOnline from '../public/images/works/haasOnline.png';
import thumb3bet from '../public/images/works/3bet.png';

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="pixelplex"
              title="Pixelplex"
              thumbnail={thumbPixelplex}
            >
            Currently working here as Python developer
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="dolorDomum"
              title="Dolor Domum"
              thumbnail={thumbDolorDomum}
            >
              Simple landing for alternative energy heating
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="HaasOnline"
              title="HaasOnline"
              thumbnail={thumbHaasOnline}
            >
              Crypto trading bots
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="3bet"
              title="3bet"
              thumbnail={thumb3bet}
            >
             Sport plugs detection 
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Works;
