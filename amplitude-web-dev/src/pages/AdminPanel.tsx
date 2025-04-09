import { useState } from 'react';
import { readData, writeData, deleteData } from '../utils/FirebaseHandler';
import './css/HomePage.css';
import Button from '../components/Button';

interface Item {
    id: string;
    name: string;
    price: string;
    tag: string;
}

const AdminPanel: React.FC = () => {

    const [items, setItems] = useState<Item[]>([])

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
        const name = (document.getElementById('item-name') as HTMLInputElement).value;
        const price = (document.getElementById('item-price') as HTMLInputElement).value;
        const tag = (document.getElementById('item-tag') as HTMLInputElement).value;
        addItemToDatabase(name, price, tag);
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
            <Button onclick={addItem} name="Add Item" />
            <input id="item-name" className="input" type="text" placeholder="Item Name" />
            <input id="item-price" className="input" type="text" placeholder="Item Price" />
            <input id="item-tag" className="input" type="text" placeholder="Item Tag" />
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