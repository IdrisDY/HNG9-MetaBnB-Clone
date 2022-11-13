import FooterData from "./FooterData"

function FooterLinks() {
    return (
        <div className="flex flex-col md:grid md:grid-cols-3 text-center justify-between gap-y-8 w-4/5 md:w-full">
            {FooterData.map((link, index) => {
                return (
                    <div key={index} className="flex flex-col gap-2">
                        <p className="font-['Red_Rose'] text-2xl font-[700] text-[#F7F7F7] leading-[22px] ">{link.header}</p>
                        <div>
                        <a href="#" className={aStyle}>{link.text1}</a>
                        <a href="#" className={aStyle}>{link.text2}</a>
                        <a href="#" className={aStyle}>{link.text3}</a>
                        <a href="#" className={aStyle}>{link.text4}</a>
                    </div>
                    </div>
                )
            })}
        </div>
    );
}

const aStyle = `block font-['Red_Rose'] space-y-2 md:space-y-4 text-lg font-[400] text-[#F1F3F9] leading-[35px] cursor-pointer`


export default FooterLinks;