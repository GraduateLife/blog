import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Hero from '../components/Hero/Hero';
import ProjectSection from '../components/Projects/Projects';
import IamGoodAtSection from '../components/IamGoodAt/IamGoodAt';
import BrowserOnly from '@docusaurus/BrowserOnly';

// import BlogLayoutWrapper from '../theme/BlogLayout';

export default function HomePage() {
  const {
    siteConfig: { title },
  } = useDocusaurusContext();

  return (
    <>
      <Layout title={`${title}`}>
        <Hero></Hero>
        <ProjectSection />
        <IamGoodAtSection />
      </Layout>
    </>
  );
}
