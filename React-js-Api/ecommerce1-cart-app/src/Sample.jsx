import { useState, useEffect } from "react";

export default function EcommerceCart() {
    const [cart, setCart] = useState([]);
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productQuantity, setProductQuantity] = useState("");

    useEffect(() => {
        fetch("http://localhost:5003/cartdata")
            .then(response => response.json())
            .then(data => setCart(data));
    }, []);

    const addProduct = (e) => {
        e.preventDefault();
        const newProduct = {
            id: Date.now(),
            name: productName,
            price: parseFloat(productPrice),
            quantity: parseFloat(productQuantity)
        };

        fetch("http://localhost:5003/cartdata", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newProduct)
        }).then(() => {
            setCart([...cart, newProduct]);
        });

        setProductName("");
        setProductPrice("");
        setProductQuantity("");
    };

    const removeProduct = (productId) => {
        fetch(`http://localhost:5003/cartdata/${productId}`, { method: "DELETE" })
            .then(() => {
                setCart(cart.filter(item => item.id !== productId));
            });
    };

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div className="bg-gray-100 text-gray-800 min-h-screen flex justify-center items-center p-6">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
                <div className="bg-white p-6 rounded shadow">
                    <h2 className="text-lg font-semibold mb-4">Add Product</h2>
                    <form onSubmit={addProduct} className="space-y-4">
                        <input
                            type="text"
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                            placeholder="Enter product name"
                            className="w-full px-3 py-2 border rounded-md"
                            required
                        />
                        <input
                            type="number"
                            value={productPrice}
                            onChange={(e) => setProductPrice(e.target.value)}
                            placeholder="Enter product price"
                            className="w-full px-3 py-2 border rounded-md"
                            required
                        />
                        <input
                            type="number"
                            value={productQuantity}
                            onChange={(e) => setProductQuantity(e.target.value)}
                            placeholder="Enter product quantity"
                            className="w-full px-3 py-2 border rounded-md"
                            required
                        />
                        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                            Add Product
                        </button>
                    </form>
                </div>
                <div className="bg-white p-6 rounded shadow">
                    <h2 className="text-lg font-semibold mb-4">Your Cart</h2>
                    <ul className="space-y-4">
                        {cart.map(item => (
                            <li key={item.id} className="flex justify-between items-center border-b pb-2">
                                <span>{item.name}</span>
                                <div>
                                    <span className="mr-4">${item.price}</span>
                                    <button onClick={() => removeProduct(item.id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                                        Remove
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-4 text-lg font-medium">
                        Total: {calculateTotal()} INR
                    </div>
                </div>
            </div>
        </div>
    );
}
