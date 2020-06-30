import React, { Component } from "react";
import Links from "./links";
import SearchForm from "./searchForm";
import Navbar from "./navbar";
import Footer from "./footer";

class Index extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar {...this.props} />
        <div className="content container">
          <SearchForm onSearch={this.handleSearch} />
          <Links />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Index;
