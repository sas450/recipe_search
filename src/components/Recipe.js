import React from "react";
import shortid from "shortid";

export default class TodoForm extends React.Component {
  state = {
    loading: true,
    recipes: []
  };

  async componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/photos";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    this.setState({ recipes: data, loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.recipes.length) {
      return <div>didn't get a person</div>;
    }

    // const recipesJsx = [];

    // this.state.recipes.forEach(person => {
    //   recipesJsx.push(
    //     <div key={person.name.first + person.name.last}>
    //       <div>{person.name.title}</div>
    //       <div>{person.name.first}</div>
    //       <div>{person.name.last}</div>
    //       <img src={person.picture.large} />
    //     </div>
    //   );
    // });

    return (
      <div>
        {this.state.recipes.map(recipe => (
          <div key={shortid.generate()} style={{
            display: "flex",
          }}>
            <div>{recipe.title}</div>
            <img src={recipe.url} style = {{width : 10 , height : 10}}/>
          </div>
        ))}
        }
      </div>
    );
  }
}
