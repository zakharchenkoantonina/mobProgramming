import React, {useState, useEffect} from 'react'

const Header = () => {

/* const [prevScrollPos, setPrevScrollPos] = useState(0);
const [visible, setVisible] = useState(true)

const handleScroll = () => {
    const currentScrollPos = window.scrollY

    if(currentScrollPos > prevScrollPos){
        setVisible(false);
        console.log(visible);
    }else{
        setVisible(true)
        console.log(visible);
    }

    setPrevScrollPos(currentScrollPos)
}

useEffect( () => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll)
})
 */
return (
    <div className="headerContainer">
     {/*    <div className="filler h-4/5"></div>
        <div className="header sticky top-9 bg-transparent z-10 h-0 ">
            <h1 className='prata text-center w-screen text-6xl text-slate-400 lg:text-6xl'>Juhee Kang</h1>
        </div> */}
    </div>
   
)
}

export default Header;
