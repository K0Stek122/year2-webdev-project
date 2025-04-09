import { useState } from 'react';
import { readData, writeData, deleteData } from '../utils/FirebaseHandler';
import './css/AdminPanel.css';
import Button from '../components/Button';
import InputBox from '../components/InputBox';

interface Item {
    id: string;
    name: string;
    price: string;
    tag: string;
}

const AdminPanel: React.FC = () => {

    const [items, setItems] = useState<Item[]>([])

    // These are input boxes
    const [itemName, setItemName] = useState('');
    const [itemPrice, setItemPrice] = useState('');
    const [itemTag, setItemTag] = useState('');

    const handleItemNameChange = (value: string) => {
        setItemName(value);
    }
    const handleItemPriceChange = (value: string) => {
        setItemPrice(value);
    }
    const handleItemTagChange = (value: string) => {
        setItemTag(value);
    }

    const fetchDatabaseItems = () => {
        readData('items').then((data) => {
            if (data) {
                const itemsArray = Object.keys(data).map((key) => ({
                    id: key,
                    name: data[key].name,
                    price: data[key].price,
                    tag: data[key].tag,
                }));
                setItems(itemsArray);
            }
        });
    }

    const addItem = () => {
        addItemToDatabase(itemName, itemPrice, itemTag);
        fetchDatabaseItems();
    }

    const addItemToDatabase = (name: string, price: string, tag: string) => {
        const id = Math.floor(Math.random() * 1000) + 1;
        writeData(`items/${id}`, {
            name: name,
            price: price,
            tag: tag
        });
    }

    const deleteItem = (id: string) => {
        if (items.length == 1) {
            alert("You must have at least one item in the database.");
            return;
        }

        deleteData(`items/${id}`);
        fetchDatabaseItems();
    }

    fetchDatabaseItems();

    return (
        <div className="admin-panel">
            <div className="admin-panel-header">
                <Button onclick={addItem} name="Add Item" />
                <InputBox placeholder='Item Name' value={itemName} onChange={handleItemNameChange} />
                <InputBox placeholder='Item Price' value={itemPrice} onChange={handleItemPriceChange} />
                <InputBox placeholder='Item Tag' value={itemTag} onChange={handleItemTagChange} />
            </div>
            <table className="data-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Tag</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.tag}</td>
                            <td>
                                <Button name="Delete" onclick={() => deleteItem(item.id)} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminPanel;