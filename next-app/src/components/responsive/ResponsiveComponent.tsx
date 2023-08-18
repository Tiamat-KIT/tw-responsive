import {ExTag} from "@/components/responsive/ResponsiveType"
import "@/app/globals.css"

export function Text({tag = "p",extra,children}: {tag?: "p" | "h1" | "h2" | "h3",extra?: string,children: React.ReactNode}  
){
    
    switch(tag){
        case "p":
            return <ExTag tag={tag} className={`text-base ${extra}`}>{children}</ExTag>
        case "h1":
            return <ExTag tag={tag} className={`text-4xl text-center font-bold underline underline-offset-4 ${extra}`}>{children}</ExTag>
        case "h2":
            return <ExTag tag={tag} className={`text-3xl ${extra}`}>{children}</ExTag>
        case "h3":
            return <ExTag tag={tag} className={`text-2xl ${extra}`}>{children}</ExTag>
    }
}

export function Container({children}:{children: React.ReactNode}) {
    return <div className="container mx-auto px-5">{children}</div>
}

export function List({tag = "ul",ListItem}:{tag?:"ul" | "ol", ListItem: string[]}){

    switch(tag){
        case "ul":
            return <ExTag tag={tag} className="list-outside list-disc">{ListItem.map((item,idx) => {
                return (
                    <li key={idx}>{item}</li>
                )
            })}</ExTag>
        case "ol":
            return <ExTag tag={tag} className="list-outside list-decimal">{ListItem.map((item,idx) => {
                return (
                    <li key={idx}>{item}</li>
                )
            })}</ExTag>
    }
}

export function BgImage({
    bgImageUrl,
    bgImageStyle
}:{
    bgImageUrl: string,
    bgImageStyle: "fixed" | "local" | "scroll"})
{
    const bgStyle = `bg-${bgImageStyle}`
    return <div className={bgStyle} style={{backgroundImage: `url(${bgImageUrl})`}} />
}

export function GradientHeading({
    children,
    to,
    beginColor,
    endColor,
}:{
    children: React.ReactNode,
    to: "t" | "b" | "l" | "r",
    beginColor: string,
    endColor: string
}){
    const direction = "bg-gradient-to-" + to

    return (
        <div className="text-4xl text-center font-extrabold">
            <span className={`bg-clip-text text-transparent ${direction} ${beginColor} ${endColor}`}>
                {children}
            </span>
        </div>
    )
}