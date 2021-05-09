import React from 'react';
import {Header} from "./components/Header";
import Masonry from "masonry-layout";

export const Body: React.FC = () => {

  React.useEffect(() => {
    var elem = document.querySelector('.rx-masonry-grid');
    if (elem)
      var msnry = new Masonry(elem, {
        // options
        itemSelector: '.rx-masonry-grid-item',
        columnWidth: 140
      });
  }, []);


  return <div className='rx-body-container'>
    <Header/>

    <div className="rx-body-content-container">
      <div className="rx-masonry-grid">


        <div className="rx-masonry-grid-item">
          <div className="rx-card">
            Card
            lorem ipsum lorem dolorem lorem ipsum lorem dolorem
            lorem ipsum lorem dolorem
            lorem ipsum lorem doloremlorem ipsum lorem dolorem
            lorem ipsum lorem dolorem
            lorem ipsum lorem dolorem
            lorem ipsum lorem dolorem lorem ipsum lorem dolorem
            lorem ipsum lorem dolorem
            lorem ipsum lorem doloremlorem ipsum lorem dolorem
            lorem ipsum lorem dolorem
            lorem ipsum lorem dolorem
            lorem ipsum lorem dolorem lorem ipsum lorem dolorem
            lorem ipsum lorem dolorem
            lorem ipsum lorem doloremlorem ipsum lorem dolorem
            lorem ipsum lorem dolorem
            lorem ipsum lorem dolorem
          </div>
        </div>
        <div className="rx-masonry-grid-item">
          <div className="rx-card">Card lorem ipsum
            adsdasdad askdas daksd ajsd ajsdk asdj
            adsdasdad askdas daksd ajsd ajsdk asdj
            adsdasdad askdas daksd ajsd ajsdk asdj
            adsdasdad askdas daksd ajsd ajsdk asdj
          </div>
        </div>
        <div className="rx-masonry-grid-item">
          <div className="rx-card">adsdasdad askdas daksd ajsd ajsdk asdj
            adsdasdad askdas daksd ajsd ajsdk asdj
            adsdasdad askdas daksd ajsd ajsdk asdj
            adsdasdad askdas daksd ajsd ajsdk asdj
            adsdasdad askdas daksd ajsd ajsdk asdj
            adsdasdad askdas daksd ajsd ajsdk asdj
            adsdasdad askdas daksd ajsd ajsdk asdj
            adsdasdad askdas daksd ajsd ajsdk asdj
            adsdasdad askdas daksd ajsd ajsdk asdj
          </div>
        </div>
        <div className="rx-masonry-grid-item">
          <div className="rx-card">adsdasdad askdas daksd ajsd ajsdk asdj
            adsdasdad askdas daksd ajsd ajsdk asdj
            adsdasdad askdas daksd ajsd ajsdk asdj
          </div>
        </div>
        <div className="rx-masonry-grid-item">
          <div className="rx-card">
            adsdasdad askdas daksd ajsd ajsdk asdj
            adsdasdad askdas daksd ajsd ajsdk asdj
          </div>
        </div>
      </div>
    </div>
  </div>
};
