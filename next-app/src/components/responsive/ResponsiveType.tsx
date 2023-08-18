import { ComponentPropsWithoutRef,ElementType } from "react"

export type Props<T extends ElementType> = {
    tag?: T;
} & Omit<ComponentPropsWithoutRef<T>,'tag'>;


export const ExTag = <T extends ElementType = 'button'>({tag,...props}: Props<T>) => {
    const Tag = tag || "button";

    return <Tag {...props} />
}