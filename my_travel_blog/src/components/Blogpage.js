import './blogPage.css'
export default function BlogPage(props){
    return (
        <div className='mainContainer'>
            <div className='imageSec'>
                <img src='../images/taj.jpg' height='250px'/>
            </div>
            <div className='dataSec'>



                <div className='locIco'>
                    <img classname='iconLoc' src="../images/loc_ico.png" height='20px'/>
                    <p>India</p>
                    <p><a href="#" target='_Blank'>Go to maps</a>
                    </p>
                </div>

                <div className='Info'>
                    <div className='heading'>
                        <h3>{props.heading}</h3>
                    </div>
                    <div className='data'>
                        <p
                        Width=
                        "326px"
                        Height=
                        "45px"
                        Top=
                        "203px"
                        Left=
                        "184px">
                        
Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}