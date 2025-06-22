import './home.scss'

import MainHi from "./HI/mainHi";
import RecentWork from '/src/pages/Home/RecentWork/RecentWork'
import MainDescription from "./mainDescription/MainDescription";
import TechStack from "./TechStack/TechStack";
import HowLWork from "./HowLWork/HowLWork";
import OrderFiverr from "./OrderFiverr/OrderFiverr";
import Heading from "../../components/Heading/Heading";
import Contacts from "./Contacts/Contacts";

function Home() {
    return (
        <div className='home'>
            <MainHi/>
            <Heading title="Recent Works"/>
            <RecentWork/>
            <MainDescription/>

            <Heading title="My stack of technologies"/>
            <TechStack/>

            <Heading title="How I’ll work?"/>
            <HowLWork/>

            <Heading title="Order my services on Fiverr"/>
            <OrderFiverr/>

            <Heading title="Contacts"/>
            <Contacts/>
        </div>
    )
}

export default Home;