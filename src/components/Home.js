import { Helmet } from "react-helmet";

import Profile from './Profile.js';
import Experience from './Experience.js';


const Home = () => {
    //? Web Title here!!
    const webTitle = "Lisan Shidqi Farizan | Home";
    
    return (
    <>
        <Helmet title={webTitle}/>
		<div class="main-wrapper">
			 {/*  Profile  */}
			<Profile />
			 {/* Experience Section  */}
			<Experience />
		</div>
    </>
    )
}

export default Home;