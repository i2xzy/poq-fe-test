import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import Button from './components/Button';
import Header from './components/Header';
import Inventory from './components/Inventory';

function App() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetch('https://run.mocky.io/v3/fca7ef93-8d86-4574-9a4a-3900d91a283e')
      .then(res => res.json())
      .then(res =>
        setData(
          res.map(item => ({
            ...item,
            available: item.available === 'TRUE',
            lowOnStock: item.lowOnStock === 'TRUE',
          }))
        )
      );
  }, []);

  console.log(data);

  const theme = {
    primary: '#5f2c3e',
    success: '#597650',
    error: '#c65032',
    warning: '#d49640',
  };

  const removeItems = e => {
    e.preventDefault();
    setData(data.filter(item => !item.checked));
  };

  const selectItem = id =>
    setData(
      data?.map(item =>
        item.productId === id ? { ...item, checked: !item.checked } : item
      )
    );

  const selectedItems = data.filter(item => item.checked);

  return (
    <ThemeProvider theme={theme}>
      <Header>
        <Button
          disabled={selectedItems.length < 1}
          onClick={removeItems}
        >{`Remove ${selectedItems.length} selected products`}</Button>
      </Header>
      {data ? <Inventory items={data} selectItem={selectItem} /> : 'Loading...'}
    </ThemeProvider>
  );
}

export default App;
