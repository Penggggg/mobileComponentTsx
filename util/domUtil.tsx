// 允许组件进行优雅写法 <Button danger /> 等价于 <Button theme={`danger`} />
export const _fitlerProps = ( props: any, _theme: Array<string> ) => {
    for(let i = 0; i < _theme.length; i++) {
        if( props.hasOwnProperty(_theme[i]) ) {
            return _theme[i] ;
        }
    }
}
