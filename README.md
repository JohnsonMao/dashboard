# React - Practive

## todoList 相關的知識點
1. 拆分組件，實現靜態組件，注意: className、style 的寫法
2. 動態初始化列表，如何確定將數據放在哪個組件的 state 中?
    - 某個組件使用: 放在其自身的 state 中
    - 某些組件使用: 放在他們共同的副組件 state 中 (官方稱此做法為: 提升 state)
3. 關於父子之間的數據傳遞:
    1. 【父組件】給【子組件】傳遞數據: 通過 props 傳遞
    2. 【子組件】給【父組件】傳遞數據: 通過 props 傳遞，要求父提前給子傳遞一個函數
4. 注意 defaultChecked 和 checked 的區別，類似的還有: defaultValue 和 value
5. state 在哪裡，操作 state 的方法就在哪裡