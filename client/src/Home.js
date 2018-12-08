import React from 'react';
import {Link} from 'react-router-dom';
import rss from './img/rss.png';
import facebook from './img/facebook-icon.png';
import itunes from './img/iTunes.png';
export default () => {
    return (
        <div className="jumbotron">

            <div className="col-md-8">
                <div className="row">
                    <h1>Life Knocking</h1>
                    <p>Welcome to our podcast. Life Knocking is a monthly podcast brought to you by three friends: Kris, Travis, and Brandon (KTB). What will you do when life comes knocking at your door!? </p>
                </div>
                <div className="row">
                    <Link to="/rss"><img alt="rss" src={rss}></img></Link>
            {/* <div className="fb-like text-right" data-href="https://www.facebook.com/lkpod" data-layout="button_count" data-action="like" data-show-faces="false" data-share="false"></div>
                </div> */}
                
                </div>
            </div>
            <div className="row hidden-xs">
                 <div className="col-md-4" style={{borderLeft:"1px solid white"}}> 
                    <h2>Social Media</h2>
                    <br/>
                    <div><a href="https://www.facebook.com/lkpod"><img alt="facebook" src={facebook}></img> Facebook</a></div>
                    <br/>
                    <div><a href="https://itunes.apple.com/us/podcast/life-knocking/id879715030?mt=2"><img alt="itunes" src={itunes}></img> iTunes</a></div>
                </div> 
            </div>
        </div>
    )
}