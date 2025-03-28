import "./App.css";

const welcome =  {
  greeting: 'Hey',
  title: 'Dude...',
    where: "Where's my Car?"
}
const list = [
    {
        title: 'React',
        url: 'https://reactjs.org/',
        author: 'Jordan Walke',
        num_comments: 3,
        points: 4,
        objectID: 0,
    },
    {
        title: 'Redux',
        url: 'https://redux.js.org/',
        author: 'Dan Abramov, Andrew Clark',
        num_comments: 2,
        points: 5,
        objectID: 1,
    },
];
const App = () => {
  return (
      <div>
        <h1>{welcome.greeting} {welcome.title}</h1>

        <Search />

        <hr />

        <List />
      </div>
  );
}

const  Search = () => {
    return (
        <div>
            <label htmlFor={"search"}>Search: </label>
            <input id="search" type={"text"}/>
        </div>
    );
}

const List = () => {
    return (
        <ul style={{
          listStyle: "none",
          padding: 0,
          textAlign: "left",
          display: "flex",
          flexDirection: "column",
          gap: "10px"
        }}>
          {list.map(function (item) {
            return (
                <li key={item.objectID}>
                  <a href={item.url}>Title: {item.title}</a>
                  <div>Author: {item.author}</div>
                  <div>Comments: {item.num_comments}</div>
                  <div>Points: {item.points}</div>
                </li>
            );
          })}
        </ul>
    );

}
export default App;
