## Github Search

### [Demo](https://vue-github-search.vercel.app/)
![](https://i.imgur.com/aoJBQPf.png)
### Feature
- use octokit interact with github api
- auto search keywords
  - while user typing over three keywords
  - implementing debounce - executed the function only after user stopped typing in the search bar (If user types very fast, will allow the execution of func only when the user has stopped typing in the search bar)
- infinite scroll
  - Each time user scrolls to the bottom, auto loading data in next page
  - implementing throttling - to prevent unnecessary load, execute the function only one time in 1000 milliseconds
- unit test
  - test the emitted events on input search (確認搜尋關鍵字的子元件正確的把資料傳遞到上層父元件)
- e2e test
  - 模擬使用者情境：
    - 輸入關鍵字自動搜尋
    - 滑到最底部自動 loading 出更多資料

### Project setup
```
yarn install
```
### Compiles and hot-reloads for development
```
yarn serve
```
