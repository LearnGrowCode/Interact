export default function SideAdvR({Position,HackName,SDate,EDate,Location,HLink}){
    return(
        <div className="fixed top-[20vh] z-2 transition ease-in-out delay-150 duration-700 translate-x-[90vw] hover:translate-x-[50vw] hover:duration-1000 sm:translate-x-[95vw] lg:translate-x-[96vw]">
        <div className="h-[30vh] w-[50vw] bg-yellow-300 flex px-2 py-4 items-center rounded-tl rounded-bl   ">
            <div className="w-[20vw] vtext  tracking-[0.3rem] text-xl     " >{HackName}</div>
            <div className="flex flex-col justify-center gap-2 h-[100%] text-sm">
                <div>Start On : {SDate}</div>
                <div>End On : {EDate}</div>
                <div>Venue : {Location}</div>
                <div>Link : <a href= {HLink} className="text-blue-900 "  >{HLink}</a></div>

            </div>
            
        </div>
        </div>
        
    )
}