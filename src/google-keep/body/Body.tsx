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
        columnWidth: 200
      });

    var elem_2 = document.querySelector('.grid');
    if (elem_2)
      var msnry_2 = new Masonry(elem_2, {
        // options
        itemSelector: '.grid-item',
        columnWidth: 200
      });
  }, []);


  return <div className='rx-body-container'>
    <Header/>

    <div className="rx-body-content-container">
      <div className="rx-body-content-container-flex">
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
          <div className="rx-masonry-grid-item">
            <div className="rx-card">
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
          <div className="rx-masonry-grid-item">
            <div className="rx-card">
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
              adsdasdad askdas daksd ajsd ajsdk asdj
              adsdasdad askdas daksd ajsd ajsdk asdj
              adsdasdad askdas daksd ajsd ajsdk asdj
              adsdasdad askdas daksd ajsd ajsdk asdj
              adsdasdad askdas daksd ajsd ajsdk asdj
              adsdasdad askdas daksd ajsd ajsdk asdj
            </div>
          </div>
        </div>
      </div>
    </div>

    <h1>Masonry - columnWidth</h1>
    <div className="grid">
      <div className="grid-item"></div>
      <div className="grid-item grid-item--width2 grid-item--height2"></div>
      <div className="grid-item grid-item--height3"></div>
      <div className="grid-item grid-item--height2"></div>
      <div className="grid-item grid-item--width3"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item grid-item--height2"></div>
      <div className="grid-item grid-item--width2 grid-item--height3"></div>
      <div className="grid-item"></div>
      <div className="grid-item grid-item--height2"></div>
      <div className="grid-item"></div>
      <div className="grid-item grid-item--width2 grid-item--height2"></div>
      <div className="grid-item grid-item--width2"></div>
      <div className="grid-item"></div>
      <div className="grid-item grid-item--height2"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item grid-item--height3"></div>
      <div className="grid-item grid-item--height2"></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item grid-item--height2"></div>
    </div>

    <div>
      <div className="masonry-with-columns">
        <div>
          1 aldsladsadlsa sadksalksd asd lans dsb
          1 aldsladsadlsa sadksalksd asd lans dsb
          1 aldsladsadlsa sadksalksd asd lans dsb
        </div>
        <div>
          2 dakdjslads alkdsbadsajbsd a dslhads
          2 dakdjslads alkdsbadsajbsd a dslhads
          2 dakdjslads alkdsbadsajbsd a dslhads
          2 dakdjslads alkdsbadsajbsd a dslhads
          2 dakdjslads alkdsbadsajbsd a dslhads
          2 dakdjslads alkdsbadsajbsd a dslhads
          2 dakdjslads alkdsbadsajbsd a dslhads
        </div>
        <div>
          3 2 dakdjslads alkdsbadsajbsd a dslhads
          2 dakdjslads alkdsbadsajbsd a dslhads
        </div>
        <div>
          4
          1 aldsladsadlsa sadksalksd asd lans dsb
          1 aldsladsadlsa sadksalksd asd lans dsb
        </div>
        <div>
          5
        </div>
        <div>
          6
        </div>
        <div>
          7v2 dakdjslads alkdsbadsajbsd a dslhads
          2 dakdjslads alkdsbadsajbsd a dslhads
          2 dakdjslads alkdsbadsajbsd a dslhads
          2 dakdjslads alkdsbadsajbsd a dslhads
        </div>
        <div>
          8
        </div>
        <div>
          9
        </div>
        <div>
          10
        </div>
        <div>
          11
        </div>
        <div>
          12
        </div>
        <div>
          13
        </div>
        <div>
          14
        </div>
        <div>
          15
        </div>
      </div>
    </div>

  </div>
};
