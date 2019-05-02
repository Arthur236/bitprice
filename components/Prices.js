import React from 'react';

class Prices extends React.Component {
  renderPrices = () => {
    const { bpi } = this.props;

    const keys = Object.keys(bpi);

    return keys.map((b, index) => (
      <li key={index} className="list-group-item">
        {bpi[b].description} <span className="badge badge-primary">{bpi[b].code}</span>: <strong>{bpi[b].rate}</strong>
      </li>
    ))
  };

  render() {
    return (
      <div>
        <ul className="list-group">
          {this.renderPrices()}
        </ul>
      </div>
    );
  }
}

export default Prices;
