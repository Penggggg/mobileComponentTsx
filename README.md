# mobileComponentTsx
### hzp's personal component lib made by React / Typescript
### these components are combined the goods between [ant design](http://ant.design/) and [ionic2](http://ionicframework.com/docs/v2/)
***
### my special:
1. simple and easy way to set components props:
    `<Button round blue />` is equal to `<Button theme="blue" shape="round" />`
2. comfortable and colorful theme make by css3
***
## Components
### Icon
the `./assets/font/demo.html` will show you all the icons that were downloaded from [AliIconFont](http://www.iconfont.cn/)
***
### Button
#### a Button Component, which can be composed by different options from your code
#### set Button easliy `<Button blue round icon=".." />` if the value of props you want is default , you dont need to set this props in `<Button />`
1. theme: string
    * light(default)
    * blue
    * red
    * green
    * pink
    * dark
2. shape: string
    * normalshape(default)
    * round
3. display: string  
    * inline(default)
    * block
4. type: string
    * normaltype(default)
    * outline
    * clear
5. size: string
    * normalsize(default)
    * small
    * large
6. icon: string (icon on left beside the text)
7. iconRight: string (icon on right beside the text)
8. loading: boolean
    * true(default)

![normal](https://img.alicdn.com/tps/TB1s8msMVXXXXbqXXXXXXXXXXXX-567-50.png)
![round](https://img.alicdn.com/tps/TB1yqyqMVXXXXXtXpXXXXXXXXXX-471-121.png)
![iconround](https://img.alicdn.com/tps/TB1FyCpMVXXXXafXpXXXXXXXXXX-517-96.png)
![size](https://img.alicdn.com/tps/TB1bqfkLpXXXXb7aXXXXXXXXXXX-597-119.png)
![icon](https://img.alicdn.com/tps/TB1S2eyMVXXXXb5XXXXXXXXXXXX-681-95.png)
![outline](https://img.alicdn.com/tps/TB127OtMVXXXXXwXpXXXXXXXXXX-678-91.png)
![block](https://img.alicdn.com/tps/TB12a_iLpXXXXcYaXXXXXXXXXXX-942-368.png)
![loading](https://img.alicdn.com/tps/TB1aYKnMVXXXXazXpXXXXXXXXXX-759-94.png)
#### tips
1. active loading `<Button loading={ load } />`
2. compose loading animation with different icon `<Button loading icon="..." />`
3. loading animation `<Button loading >123</Button>` would has a default loading icon
***
