import React from 'react';
import ListActionCreator from '../../actions/ListActionCreator';
import styles from './styles.css';

export default class ListComponent extends React.Component {
  constructor() {
    super();
  }

  handleClick(index) {
    ListActionCreator.deleteItemByIndex(index);
  }

  render() {
    var that = this;
    return (<ol>
      {this.props.data.map(function(result, i) {
        var boundClick = that.handleClick.bind(that, i);
        return (
            <ul className={styles.foo} key={result.id}>
              {result.name}
              <button onClick={boundClick}>Delete</button>
            </ul>);
      })}
    </ol>);
  }
}