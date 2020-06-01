import React from "react";
import "./list.css";
import fetchService from "../../services/fetchService";

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      currencies: [],
      error: null,
    };
  }

  currenicesGetter = async () => {
    this.setState({ loading: true });

    const response = await fetchService.get(
      "cryptocurrencies?page=1&perPage=20"
    );
    this.setState({
      currencies: response.currencies,
      loading: false,
    });
  };


  renderChangePercent = percent => {
    if (percent > 0) {
      return <span className="percent-raised">{percent}% &uarr;</span>
    } else if (percent < 0) {
      return <span className="percent-fallen">{percent}% &darr;</span>
    } else {
      return <span>{percent}</span>
    }
   

  }

  componentDidMount() {
    this.currenicesGetter();

    // fetch("https://jsonplaceholder.typicode.com/todos")
    // .then((response) => response.json())
    // .then((json) =>
    //   this.setState((prevState) => {
    //     return {
    //       currencies: json,
    //       loading: !prevState.loading,
    //     };
    //   })
    // );
  }

  // change = (id) => {
  //   this.setState((prevState) => {
  //     const elem = prevState.currencies.map((item) => {
  //       if(item.id === id){
  //         item.completed = !item.completed;
  //       }
  //       return item;
  //     });
  //       return {currencies:elem};

  //   });
  // };

  render() {
    const { loading, currencies } = this.state;

    if (loading) {
      return <div>Loading... </div>;
    }

    // const elemTrue = currencies.map((item) => {
    //   if(item.completed){
    //     return(
    //       <li key = {item.id} onClick = {() => this.change(item.id)}>
    //         <p> {item.title} </p>
    //         <input type = "checkbox" checked = {item.completed} />
    //       </li>
    //     );
    //   };
    // });

    // const elemFalse = currencies.map((item) => {
    //   if(!item.completed){
    //     return(
    //       <li key = {item.id} onClick = {() => this.change(item.id)}>
    //         <p> {item.title} </p>
    //         <input type = "checkbox" checked = {item.completed} />
    //       </li>
    //     );
    //   };
    // });

    return (
      <div className="Table-container">
        <table className="Table">
          <thead className="Table-head">
            <tr>
              <th>Cryptocurrency</th>
              <th>Price</th>
              <th>Market Cap</th>
              <th>24H Change</th>
            </tr>
          </thead>
          <tbody className="Table-body">
            {currencies.map((currency) => (
              <tr key = {currency.id}>
                <td>
                  <span className="Table-rank">{currency.rank}</span>
                  {currency.name}
                </td>
                <td>
                  <span className="Table-dollar">$ </span>
                  {currency.price}
                </td>
                <td>
                  <span className="Table-dollar">$ </span>
                  {currency.marketCap}
                </td>
                <td>
                  {this.renderChangePercent(currency.percentChange24h)}

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );

    // return (
    //   <div className = "comp">
    //     <ul>
    //       <li> completed</li>
    //       {elemTrue}
    //     </ul>

    //     <ul>
    //       <li> no completed</li>
    //       {elemFalse}
    //     </ul>
    //   </div>
    // );
  }
}

export default List;
