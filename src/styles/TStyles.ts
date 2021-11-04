export interface ContainerProps {
    background?: string,
    align?: string,
    justify?: string,
    spacing?: string | number,
    wrap?: string,
    row?: string,
    width?: string,
    height?: string,
    maxHeight?: string
    hasPadding?: boolean
    removePaddingTop?: string,
    removePaddingBottom?: string,
    radius?: string,
    border?: string,
}

export interface SpacerProps {
    size?: number,
}

export interface TitleProps {
    color?: string,
    small?: boolean,
    big?: boolean,
    size?: number,
    bold?: string,
    align?: string,
    scale?: string,
    spacing?: number
}

export interface ButtonProps {
    background?: string,
    block?: boolean,
    textColor?: string
  }