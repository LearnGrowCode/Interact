export default function SideAdvL({Position,HackName,SDate,EDate,Location,HLink}){
    return(
        <div>
        <div className="fixed top-[40vh] z-2 transition ease-in-out delay-150 duration-700 -translate-x-[40vw] hover:-translate-x-[0vw] hover:duration-1000 sm:-translate-x-[45vw] lg:-translate-x-[46vw]">
        <div className="h-[30vh] w-[50vw] bg-red-300 flex flex-row-reverse px-2 py-4 items-center rounded-tr rounded-br   ">
            <div className="w-[20vw] vtextL tracking-[0.3rem] text-xl     " >{HackName}</div>
            <div className="flex flex-col justify-center gap-2 h-[100%] text-sm">
                <div>Start On : {SDate}</div>
                <div>End On : {EDate}</div>
                <div>Venue : {Location}</div>
                <div>Link : <a href= {HLink} className="text-blue-900 "  >{HLink}</a></div>

            </div>
            
        </div>
        </div>
        
         </div>
    )
}