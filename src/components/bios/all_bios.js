import React, {Component} from 'react';
import './bios.css';
import {vatos_car} from './vatos_car.png';
import {robert_alma} from './robert_alma.png';
import {roberts_truck} from './roberts_truck.png';

class Familia extends Component{
    render(){
        return(
            <div className="all_bios">
                <div classname = "vato">
                    <h2>Vato</h2>
                    <img src={vatos_car} alt="vato's car" height="30" width="30"/>
                    <p>
                        As a baby I grew up around cars. My dad cruised and so did his dad and mom before him.
                        My dad and tios owned a paint and body so there was always something with cars happening in my family.
                        I've always been dedicated to the lowriding lifestyle, fixing and restoring cars has always been an interest of mine, just watching the process
                        of a car being restored to it's original glory if not better from start to finish. Lowriding has always been an art for me, I always 
                        tried to out do myself from build to build. I've introduced lowriding to my kids just to show another possible door for them,
                         if they find interest I will do the best I can to help build that want, to continue the lifestyle. Lowriding kept me interested because 
                         I've realized that places where people didn't get along brought them together to all share the common interest, because 
                         of that I've met and know so many people. It is a life I only wish to continue to pursue.
                    </p>
                </div>
                <div className = "robert">
                    <h2>Robert</h2>
                    <img src={roberts_truck} alt="robert's truck" height="30" width="30"/>
                    <img src={robert_alma} alt="robert and alma" height="30" width="30"/>
                    <p>
                        I became interested when Vato's cousin had brought in a lowrider bike. It made me want to create my own, so I started building 
                        my own lowrider bike. I started going to small events and that inspired me to see more. I had introduced my wife to lowriding,
                        going to car shows and events brought us closer together as well as with our friends. The reason I 
                        stay interested is the people you meet along the way. I enjoy lowriding and I want to get others involved to give them the same 
                        experinece i was given, I feel lowriding is something everyone should be introduced to. 
                    </p>
                </div>
                <div className = "jesse">
                    <h2>Jesse</h2>
                    <p>
                        My uncle took me cruising when I was 9 years old but really got me into lowriding was the good vibes from everyone 
                        around. I love lowriding cause I feel there there is more freedom, very relaxed, good people and nothing but good times. 
                        I enjoy cruising with my wife and kids, gives us a chance to spend time together. 
                        I think it's nice to show others that the lowriders and bombas are still around for all to enjoy that love those historical cars.
                         Getting the thumbs up and all the positive vibes and comments when we are cruising is what keeps me interested and I will only 
                         continue to keep the good vibes rolling.
                    </p>
                </div>
                <div className = "jd"></div>
                <div className = "joker"></div>
                <div className = ""></div>
                <div className = ""></div>
                <div className = ""></div>
                <div className = ""></div>
                <div className = ""></div>
            </div>
        )
    }
}

export default Familia;