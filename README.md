## Github Search

### [Demo](https://vue-github-search.vercel.app/)
![](https://i.imgur.com/aoJBQPf.png)
### Feature
- use octokit interact with github api
- auto search keywords
  - while user typing over three keywords
  - implementing debounce - executed the function only after user stopped typing in the search bar
- infinite loading
  - Each time the user scrolls to the bottom, auto load more data
  - implementing throttling - to prevent unnecessary load, execute the function only one time in 1000 milliseconds

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```
