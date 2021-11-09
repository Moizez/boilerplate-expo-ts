export type ContainerProps = {
    flex?: number,
    background?: string,
    align?: string,
    justify?: string,
    spacing?: string | number,
    wrap?: string,
    row?: boolean,
    width?: string,
    maxWidth?: string,
    minWidth?: string,
    height?: string,
    maxHeight?: string,
    minHeight?: string,
    hasPadding?: boolean,
    removePaddingTop?: string,
    removePaddingBottom?: string,
    radius?: string,
    border?: number,
    borderColor?:string
}

export type SpacerProps = {
    size?: number,
}

export type TitleProps = {
    color?: string,
    small?: boolean,
    big?: boolean,
    size?: number,
    bold?: string,
    align?: string,
    scale?: string,
    spacing?: number
}

export type ButtonProps = {
    background?: string,
    block?: boolean,
    textColor?: string
}

export type TextInputProps = {
    error: boolean | string
}

export type HelperTextProps = {
    type?: string
}

export type SnackbarProps = {
    background?: string,
    time?: number,
    style?: string
}