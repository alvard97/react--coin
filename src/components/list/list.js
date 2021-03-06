import React from "react";
import fetchService from "../../services/fetchService";
import Table from "./table";
import Pagination from "../pagination/pagination";
import Loading from "../loading/loading";
import "./list.css";

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      currencies: [],
      error: null,
      page: 1,
      totalPages: 0,
    };
  }

  handlePaginationClick = (direction) => {
    if (direction === "next") {
      this.setState((prev) => ({ page: prev.page + 1 }), this.currenicesGetter);
    } else {
      this.setState((prev) => ({ page: prev.page - 1 }), this.currenicesGetter);
    }
  };

  currenicesGetter = async () => {
    const { page } = this.state;
    this.setState({ loading: true });

    const response = await fetchService.get(
      `cryptocurrencies?page=${page}&perPage=20`
    );

    this.setState({
      currencies: response.currencies,
      loading: false,
      totalPages: response.totalPages,
    });
  };
  



  componentDidMount() {
    this.currenicesGetter();
  }

  render() {
    const { loading, currencies, totalPages, page } = this.state;

    if (loading) {
      return <div className = 'loading-container'>
        <Loading/>
        </div>;
    }

    return (
      <>
        <Table
          currencies={currencies}
          
        />
        <Pagination
          handlePaginationClick={this.handlePaginationClick}
          totalPages={totalPages}
          page={page}
        />
      </>
    );
  }
}

export default List;
