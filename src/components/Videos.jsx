import React, {useState, useEffect} from 'react'
import SingleVideoComp from './SingleVideoComp'
import Carousel from 'nuka-carousel';

function Videos() {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };
 /*  const [slidesToShow, setSlidesToShow] = useState(1);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    const handleMediaQuery = (mq) => {
      setSlidesToShow(mq.matches ? 3 : 1);
    };
    handleMediaQuery(mediaQuery);
    mediaQuery.addListener(handleMediaQuery);
    return () => {
      mediaQuery.removeListener(handleMediaQuery);
    };
  }, []);
  ADD TO CAROUSEL IF <NEEDED>
  slidesToShow={slidesToShow}
 */

  return (
    <div className='scroll-item relative flex flex-col justify-center h-auto w-screen py-12 align-middle bg-gradient-to-b from-slate-300 to-slate-50'>
      <div className='videos videostripe pb-5 h-auto relative lg:top-10  bg-slate-black'>
        <div className=' carousel-container  overflow-hidden'>
          <Carousel
            defaultControlsConfig={{
              nextButtonText: '>',
              prevButtonText: '<',
              nextButtonStyle: {
                height: '200px',
                left: '0rem',
                zIndex: '0'
              },
              prevButtonStyle: {
                height: '200px'
              },
              pagingDotsStyle: {
                position: 'relative',
                bottom: '-5px',
                padding: '15px',
                fill: 'gray'
              }
            }}
            animation={'slide'}
            wrapAround={true}
        
          >
          
            <SingleVideoComp
              url='https://www.youtube.com/embed/aJuH7UjU-mI'
              title='Qui la voce sua soave… Vien, diletto'
              composer='Vincenzo Bellini (1801 - 1835)'
              opera='I Puritani'
              role='Elvira'
              style=''
              
            />
           
            <SingleVideoComp
              url='https://www.youtube.com/embed/Oh7psr-LjRE'
              title='Signore, ascolta'
              composer='Giacomo Puccini (1858 - 1924)'
              opera='Turandot'
              role='Liu'
            />

            <SingleVideoComp
              url='https://www.youtube-nocookie.com/embed/TAXRUl6CxkA'
              title='Eccomi in lieta vesta'
              composer='Vincenzo Bellini (1801 - 1835)'
              opera='I Capuleti e i Montecchi'
              role='Giulietta'
            />
            <SingleVideoComp
              url='https://www.youtube-nocookie.com/embed/ot9EFjAd6ds'
              title='Strahlender Mond'
              composer='Eduard Künneke (1885-1953)'
              opera='Vetter aus Dingsda'
              role='Julia de Weert'
            />
            <SingleVideoComp

              url='https://www.youtube.com/embed/j-3itKaHtNs'
              title='Je suis encore tout étourdie'
              composer='Massenet Jules (1842 - 1912)'
              opera='Manon'
              role='Manon Lescaut'
            />
            <SingleVideoComp

              url='https://www.youtube-nocookie.com/embed/VYKR8u1wJ2Q'
              title='Adieu, notre petite table'
              composer='Massenet Jules (1842 - 1912)'
              opera='Manon'
              role='Manon Lescaut'
            />
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default Videos
