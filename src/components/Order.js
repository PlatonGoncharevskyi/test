import React, { Component } from 'react';
import { FaRegTrashCan } from "react-icons/fa6";

export class Order extends Component {
  render() {
    return (
      <div className='item'>
        <img src={'./img/' + this.props.item.img} alt={this.props.item.title} />
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.price}₴</p>
        <p>Кількість: {this.props.item.quantity}</p>
        <FaRegTrashCan className='delete-icon' onClick={() => this.props.onDelete(this.props.item.id)} />
      </div>
    );
  }
}

export default Order;
