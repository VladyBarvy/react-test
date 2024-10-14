import React from 'react';
// этот компонент создан для проверки понятия "children"

class Borsy extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        {children}
      </div>
    );
  }
}



export default Borsy;
