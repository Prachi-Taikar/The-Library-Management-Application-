import BestBookBox from "../components/bestBookBox/bestBookBox";
import FeaturedBoxList from "../components/featuredBoxList/featuredBoxList";
import FeaturedTestimonials from "../components/featuredTestimonials/featuredTestimonials";
import Hero from "../components/hero/hero";
import RatingData from "../components/ratingData/ratingData";

function Home() {

    const heroData = {
      title: "Endless  Entertainment  And  Knowledge",
      subtitle: "Read or listen anytime, anywhere.",
      ctaText: "Read free for 90 days",
      ctaSubText: "Only ₹299/month after. Cancel anytime."
    }
    return (
        <div className="page__home">
          <Hero {...heroData} />
          <FeaturedBoxList />
          <FeaturedTestimonials />
          <BestBookBox />
          <RatingData />
        </div>
      )
    }
    
    export default Home;