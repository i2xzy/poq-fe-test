import React from 'react';
import Checkbox from '../Checkbox';

import {
  Wrapper,
  Item,
  Image,
  Details,
  Promotion,
  Name,
  Prices,
  Price,
  PriceWas,
  Quantity,
  ErrorText,
  WarningText,
} from './Inventory.styled';

type ItemType = {
  productId: number;
  name: string;
  imageUrl: string;
  price: number;
  priceWas: number;
  promotionBadge: string;
  quantity: number;
  lowOnStock: boolean;
  available: boolean;
  checked?: boolean;
};

interface Props {
  items: ItemType[];
  selectItem: (id: number) => void;
}

const Inventory = ({ items, selectItem }: Props) => {
  const filteredItems = items.filter(item => item.available);
  return (
    <Wrapper>
      {filteredItems.map(item => (
        <Item key={item.productId} onClick={() => selectItem(item.productId)}>
          <Checkbox
            checked={item.checked}
            onChange={() => selectItem(item.productId)}
          />
          <Image src={item.imageUrl} alt={item.name} />
          <Details>
            <Promotion>{item.promotionBadge}</Promotion>
            <Name>{item.name}</Name>
            <Prices>
              <Price>{item.price}</Price>
              <PriceWas>{item.priceWas}</PriceWas>
            </Prices>
            {item.quantity > 0 && (
              <Quantity>{`${item.quantity} in stock`}</Quantity>
            )}
            {item.lowOnStock && item.quantity === 0 && (
              <ErrorText>OUT OF STOCK</ErrorText>
            )}
            {item.lowOnStock && item.quantity > 0 && (
              <WarningText>LOW ON STOCK</WarningText>
            )}
          </Details>
        </Item>
      ))}
    </Wrapper>
  );
};

export default Inventory;
