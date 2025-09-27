

export default function Footer(){
    return(
        <div className="h-auto text-xl pb-30 bg-[#8DC540] text-white p-4 flex flex-row place-content-evenly items-center sm:flex-row">
            <img src="images/logo.png" alt="logo" className="h-50 w-50 mr-20"/>
                
            <div>
            <h1 className="text-2xl leading-15 font-bold ">juiceO</h1>
            <p>Whatapp: +923169686633</p>
            <p>Email: info.juiceo@gmail.com</p>
            <p className="max-w-md">Address: JuiceO - PWD, Makkah City Center, JuiceO, Main PWD Rd, Main PWD Road, Islamabad</p>
            </div>

            <div>
                <h4>Our Timings</h4>
                <p>Monday - Sunday <span>11:00 am - 02:00 am</span></p>
                <p className="underline">Terms and conditions | Privacy policy</p>
            </div>

        </div>

    )
}