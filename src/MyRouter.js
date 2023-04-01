import Mac from "./Components/Pages/Mac"
import IPhone from "./Components/Pages/IPhone"
import IPad from "./Components/Pages/IPad"
import Four04 from "./Components/Pages/Four04"
import Cart from "./Components/Pages/Cart"
import Music from "./Components/Pages/Music"
import Watch from "./Components/Pages/Watch"
import Tv from "./Components/Pages/Tv"
import Support from "./Components/Pages/Support"
import {Routes , Route} from "react-router-dom"
import React from 'react'
import Sectionwrapper from "./Components/Sectionwrapper"
import Productpage from "./Components/Pages/Productpage"

function myRouter() {
return (
    <div>
        <Routes>
            <Route path="/mac" element = {<Mac />}/>
            <Route path="/iPhone" element = {<IPhone />} />
            <Route path="/iPhone/:ProductID" element = {<Productpage />} />
            <Route path="/iPad" element = {<IPad />} />
            <Route path="/watch" element = {<Watch/>} />
            <Route path="/tv" element = {<Tv/>} />
            <Route path="/music" element = {<Music/>} />
            <Route path="/support" element = {<Support />} />
            <Route path="/cart" element = {<Cart />} />            
            <Route path="*" element = {<Four04 />}/> 
            <Route path="/" element= {<Sectionwrapper />}/>

        </Routes>

    </div>
)
}

export default myRouter
