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

### Notes
- 為什麼選擇這些部分寫測試
  - unit test
    這邊特別對於 子元件是否正確的把關鍵字傳遞到上層父元件 做了測試，為了確保出來的結果跟預想的一樣。
    原因在於這邊在元件設計上有切開 component，並且搜尋這個行為是這個頁面主要的功能。
    (父層：App, 子元件: Header 當使用者在 searchBar 輸入關鍵字時，子元件透過 $emit event 讓 App 元件接收到後 call api 搜尋。)
  - e2e test
    這邊特別模擬使用者 做了測試，為了真正模擬使用者行為。
    原因在於希望透過自動化的方式模擬這個頁面上會出現的使用者行為，並且觀察頁面是否正確運行。
- 其他地方沒有寫的原因為何
  - unit test
    這邊沒有對於使用 dayjs 的 format render 做測試
    原因在於 dayjs 這邊需要另外做 mock，會需要花一些時間再研究一下，在時程上的考量下沒有做出這個測試。
  - e2e test
    在 模擬使用者行為 時這邊單純針對搜尋 repository type 做實際模擬
    原因在於 考量到其他的 type（topic, users) 在運作上也是一樣的行為。

### Project setup
```
yarn install
```
### Compiles and hot-reloads for development
```
yarn serve
```
