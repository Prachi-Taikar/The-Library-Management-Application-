
//import BestBookBox from "./components/bestBookBox/bestBookBox";
import {SidebarVisibilityContextProvider}  from "./store/sidebarVisibilityContext";
import Backdrop from "./components/backdrop/backdrop";
//import BookDetailHeading from "./components/bookDetailHeading/bookDetailHeading";
//import DiscriptionBooks from "./components/discriptionBooks/discriptionBooks";
//import FeaturedBoxList from "./components/featuredBoxList/featuredBoxList";
//import FeaturedTestimonials from "./components/featuredTestimonials/featuredTestimonials";
import FooterPrimary from "./components/footerPrimary/footerPrimary";
import FooterSecondary from "./components/footerSecondary/footerSecondary";
import Header from "./components/header/header";
//import Hero from "./components/hero/hero";
//import OneBookDetail from "./components/oneBookDetail/oneBookDeatil";
//import PressBox from "./components/pressBox/pressBox";
//import RatingData from "./components/ratingData/ratingData";
import Sidebar from "./components/sidebar/sidebar";
//import SomeBookHeading from "./components/someBookHeading/someBookHeading";
import Home from "./pages/home";
import UserContextProvider from "./store/userContext";
import Login from "./pages/login";
import Signup from "./pages/signup";



import{
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Detail from "./pages/detail";
import List from "./pages/list";
import Create from "./pages/create";


// const heroData={
//   title: "Endless Entertainment and Knowledge",
//   subtitle: "Read or listen anytime, anywhere.",
//   ctaText: " Read free for 30 days",
//   ctaSubText: "Only ₹299/month after. Cancel anytime."
// }
      // <SidebarVisibilityContextProvider>
      //     <Header />
      //     <Backdrop />
      //     <Sidebar />
      // </SidebarVisibilityContextProvider>
      

//       <Hero {...heroData} />
//       <FeaturedBoxList />
//       <FeaturedTestimonials />
//       <BestBookBox />
//       <PressBox />
//       <SomeBookHeading />
//       <DiscriptionBooks />
//       <BookDetailHeading />
//       <OneBookDetail />
//       <RatingData /> 

function App() {
  return (
    <div className="page">
      <UserContextProvider>
        <Router>
          <SidebarVisibilityContextProvider>
            <Header />
            <Backdrop />
            <Sidebar />
          </SidebarVisibilityContextProvider>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/book/:id" exact component={Detail} />
            <Route path="/book/:id/edit" exact component={Create} />
            <Route path="/list" component={List} />
            <Route path="/create" component={Create} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </Router>
        <FooterPrimary />
        <FooterSecondary />
      </UserContextProvider>
      

   </div>
  );
}

export default App;
  
