import {useState} from 'react';
import { readData } from '../utils/FirebaseHandler';
import './css/ItemPool.css';
import './SaleItem'
import SaleItem from './SaleItem';

type ItemPoolProps = object;

interface Item {
    id: string;
    name: string;
    price: string;
    tag: string;
}

const ItemPool: React.FC<ItemPoolProps> = () => {
    const [items, setItems] = useState<Item[]>([]);
    const fetchDatabaseItems = () => {
        // Fetch items from the database
        readData('items').then((data) => {
            const itemsTemp: Item[] = Object.entries(data).map(([id, itemData]) => ({
                id,
                name: itemData.name,
                price: parseFloat(itemData.price),
                tag: itemData.tag,
            }));
            setItems(itemsTemp);
        });
    }

    fetchDatabaseItems();

    return (
        <div className="item-pool">
            {items.map((item) => (
            <SaleItem name={item.name} price={Number(item.price)} />
            ))}
        </div>
    );
};

export default ItemPool;