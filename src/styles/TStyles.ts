export type ContainerProps = {
    flex?: number,
    background?: string,
    align?: string,
    justify?: string,
    margin?: number,
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
    borderColor?: string
}

export type ScrollViewProps = {
    margin?: number,
    hasPadding?: boolean,
    removePaddingTop?: string,
    removePaddingBottom?: string,
    background?: string
}

export type SpacerProps = {
    size?: number,
}

export type TextProps = {
    color?: string,
    small?: boolean,
    big?: boolean,
    size?: number,
    bold?: string,
    align?: string,
    scale?: string,
    spacing?: number,
    hasPadding?: boolean,
    opacity?: number,
    decoration?: string,
    margin?: number
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

export type ActivityIndicatorProps = {
    color?: string,
    size?:string
}

export type SnackbarProps = {
    background?: string,
    time?: number,
    style?: string
}