# React - Practive

## todoList 相關的知識點
1. 拆分組件，實現靜態組件，注意: className、style 的寫法
2. 動態初始化列表，如何確定將數據放在哪個組件的 state 中?
    - 某個組件使用: 放在其自身的 state 中
    - 某些組件使用: 放在他們共同的副組件 state 中 (官方稱此做法為: 提升 state)
3. 關於父子之間的數據傳遞:
    - 【父組件】給【子組件】傳遞數據: 通過 props 傳遞
    - 【子組件】給【父組件】傳遞數據: 通過 props 傳遞，要求父提前給子傳遞一個函數
4. 注意 defaultChecked 和 checked 的區別，類似的還有: defaultValue 和 value
5. state 在哪裡，操作 state 的方法就在哪裡

## nanoid
1. 添加 nanoid 函式庫，nanoid 是隨機產生 id 的函式庫

```node
npm i nanoid
```
2. 引入 nanoid 到所需的專案

```JS
import { nanoid } from 'nanoid'
```
3. 使用 nanoid() 調用函式

```JS
nanoid()
```

## Prop-Types
1. 添加 prop-types 函式庫，對 Props 傳遞進行限制

```node
npm i prop-types
```

2. 引入 prop-types 到所需的專案

```JS
import PropTypes from 'prop-types'
```

3. 使用 static propTypes = {} 對接收 Props 的類型進行限制警告

```JS
static propTypes = {
        Props名稱: PropTypes.類型.isRequired
    }
```

## gh-pages
1. React 想部屬到 Github pages 可以透過 gh-pages 這個工具自動化執行操作

```node
npm i gh-pages --save-dev
```
2. 修改 package.json 檔案

```json
{
    // 新增 homepage
    "homepage": "http: [Github 用戶名稱] .github.io/ [專案名稱]",

    // 在 scripts 新增 predeploy & deploy
    // deploy 負責自動化部屬分支
    // predeploy 負責在部屬前建立 build
    "scripts": {
        "predeploy": "npm run build",
        "deploy": "gh-pages -d dist"
    }
}
```