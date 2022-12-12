import React from "react";
import  {Navbar, Navbarlogo, Logotext, Ullist, Listitem, Itema} from './style.js'


const Nav =() =>{
return(
    <Navbar> 

       <div className="container">
                
                <Navbarlogo>
                    <Logotext>Ultra Profile</Logotext>
                </Navbarlogo>
                
                <Ullist>
                    <Listitem><Itema  href="/">Home</Itema></Listitem>
                    <Listitem><Itema href="#work">Work</Itema></Listitem>
                    <Listitem><Itema href="#Portfolio">Portfolio</Itema></Listitem>
                    <Listitem><Itema href="#Resume">Resume</Itema></Listitem>
                    <Listitem><Itema href="#about">About</Itema></Listitem>
                    <Listitem><Itema href="/Contact">Contact</Itema></Listitem>
                </Ullist>
                
            </div>
    </Navbar>
)
}


export default Nav