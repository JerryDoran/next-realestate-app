import { getProperties } from '../features/global/api/getProperties';
import FeaturedPropeties from '../features/home/featured/FeaturedPropeties';
import HeroBanner from '../features/home/HeroBanner';
import Partners from '../features/home/partners/Partners';
import Team from '../features/home/team/Team';
import Testimonials from '../features/home/testimonials/Testimonials';

export default function Home({ featuredProperties }) {
  return (
    <>
      <HeroBanner />
      <FeaturedPropeties featuredProperties={featuredProperties} />
      <Team />
      <Partners />
      <Testimonials />
    </>
  );
}

export async function getStaticProps() {
  // const { hits } = require('../features/data/properties');
  const properties = await getProperties(5);

  return {
    props: {
      // featuredProperties: hits.slice(0, 5),
      featuredProperties: properties,
    },
  };
}
