import React, { useState, useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc, updateDoc, deleteDoc, collection, addDoc, serverTimestamp, query, orderBy, onSnapshot } from "firebase/firestore";
import { ShoppingCart, Phone, CheckCircle, Star, Gift, Smile, Edit, Save, X, Lock, Upload, Trash2, List, Settings, Truck, AlertCircle, Check } from 'lucide-react';

// --- Firebase Setup ---
const firebaseConfig = {
  apiKey: "AIzaSyBHFsTRQT1eopfz8NG5ux__0QKgKCnoXOE",
  authDomain: "support-94add.firebaseapp.com",
  projectId: "support-94add",
  storageBucket: "support-94add.firebasestorage.app",
  messagingSenderId: "442252148032",
  appId: "1:442252148032:web:722f176b1c1b52a7368ea5",
  measurementId: "G-GP4C34CQF9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const appId = "ecohut-web-v1"; 

// --- Default Configuration ---
const defaultConfig = {
  productName: "১০ আইটেম স্পেশাল চকলেট কম্বো! 🍫",
  description: "আপনার সোনামণি কি চকলেটের জন্য বায়না ধরে? 😢 বাজারের ক্ষতিকর চকলেট না দিয়ে দিন প্রিমিয়াম কোয়ালিটি চকলেট বক্স!",
  price: 1250,
  regularPrice: 1490,
  phone: "01715247588",
  deliveryInside: 70,
  deliveryOutside: 130,
  images: [
    "https://images.unsplash.com/photo-1623910398642-83b6f8497678?q=80&w=1000&auto=format&fit=crop"
  ],
  features: [
    { title: "১০০% অথেনটিক", text: "সৌদি, দুবাই ও তুরস্ক থেকে ইম্পোর্টেড।" },
    { title: "সেরা স্বাদ", text: "বাচ্চাদের পছন্দের ১০টি ভিন্ন ফ্লেভার।" },
    { title: "পারফেক্ট গিফট", text: "জন্মদিন বা যেকোনো উপলক্ষে সেরা উপহার।" }
  ]
};

// --- Image Compressor ---
const compressImage = (file) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const MAX_WIDTH = 600;
        const scaleSize = MAX_WIDTH / img.width;
        canvas.width = MAX_WIDTH;
        canvas.height = img.height * scaleSize;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL('image/jpeg', 0.7));
      }
    }
  })
}

// --- Main Component ---
export default function App() {
  const [user, setUser] = useState(null);
  const [config, setConfig] = useState(defaultConfig);
  const [loading, setLoading] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  
  // Admin Panel States
  const [activeTab, setActiveTab] = useState('orders'); // 'config' or 'orders'
  const [orders, setOrders] = useState([]);

  // State for Image Gallery
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    quantity: 1,
    deliveryArea: 'inside_dhaka'
  });

  // --- Auth & Data Fetching ---
  useEffect(() => {
    const init = async () => {
      try {
        await signInAnonymously(auth);
        const docRef = doc(db, 'artifacts', appId, 'public', 'siteConfig');
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setConfig({ ...defaultConfig, ...docSnap.data() });
        } else {
          await setDoc(docRef, defaultConfig);
        }
      } catch (error) {
        console.error("Init Error:", error);
      }
    };
    init();
    
    const adminStatus = localStorage.getItem('ecohut_admin');
    if (adminStatus === 'true') setIsAdmin(true);
    onAuthStateChanged(auth, setUser);
  }, []);

  // Fetch Orders for Admin
  useEffect(() => {
    if (isAdmin) {
        const q = query(collection(db, 'artifacts', appId, 'public', 'data', 'orders'), orderBy('orderDate', 'desc'));
        const unsubscribe = onSnapshot(q, (snapshot) => {
           const ordersData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
           setOrders(ordersData);
        });
        return () => unsubscribe();
    }
  }, [isAdmin]);

  const handleAdminLogin = () => {
    const pass = prompt("অ্যাডমিন পাসওয়ার্ড দিন:");
    if (pass === "admin123") { 
      localStorage.setItem('ecohut_admin', 'true');
      setIsAdmin(true);
      setShowAdminPanel(true);
      alert("স্বাগতম অ্যাডমিন!");
    } else {
      alert("ভুল পাসওয়ার্ড!");
    }
  };

  const handleConfigSave = async () => {
    if (!isAdmin) return;
    setLoading(true);
    try {
      await setDoc(doc(db, 'artifacts', appId, 'public', 'siteConfig'), config);
      alert("সেভ হয়েছে!");
    } catch (e) {
      console.error(e);
      alert("সেভ করতে সমস্যা হয়েছে");
    }
    setLoading(false);
  };

  // Order Management Functions
  const updateOrderStatus = async (orderId, newStatus) => {
    if (!isAdmin) return;
    try {
        await updateDoc(doc(db, 'artifacts', appId, 'public', 'data', 'orders', orderId), { status: newStatus });
    } catch (e) {
        console.error("Status update failed:", e);
        alert("স্ট্যাটাস আপডেট হয়নি!");
    }
  };

  const deleteOrder = async (orderId) => {
    if (!isAdmin) return;
    if (window.confirm("আপনি কি নিশ্চিত এই অর্ডারটি ডিলিট করতে চান? এটি আর ফিরিয়ে আনা যাবে না।")) {
        try {
            await deleteDoc(doc(db, 'artifacts', appId, 'public', 'data', 'orders', orderId));
        } catch (e) {
            console.error("Delete failed:", e);
            alert("ডিলিট হয়নি!");
        }
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const compressedBase64 = await compressImage(file);
      setConfig(prev => ({
        ...prev,
        images: [...prev.images, compressedBase64]
      }));
    }
  };

  const removeImage = (index) => {
    setConfig(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
    if (activeImgIndex >= index && activeImgIndex > 0) {
        setActiveImgIndex(activeImgIndex - 1);
    }
  };

  const handleFeatureChange = (index, field, value) => {
    const newFeatures = [...config.features];
    newFeatures[index] = { ...newFeatures[index], [field]: value };
    setConfig({ ...config, features: newFeatures });
  };

  const calculateTotal = () => {
    const delivery = formData.deliveryArea === 'inside_dhaka' ? config.deliveryInside : config.deliveryOutside;
    return (config.price * formData.quantity) + delivery;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleQuantityChange = (delta) => {
    setFormData(prev => ({
      ...prev,
      quantity: Math.max(1, prev.quantity + delta)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) return alert("অপেক্ষা করুন...");
    setLoading(true);
    try {
      await addDoc(collection(db, 'artifacts', appId, 'public', 'data', 'orders'), {
        ...formData,
        totalPrice: calculateTotal(),
        productName: config.productName,
        orderDate: serverTimestamp(),
        status: 'new',
        userId: user.uid
      });
      setOrderSuccess(true);
      setFormData({ name: '', phone: '', address: '', quantity: 1, deliveryArea: 'inside_dhaka' });
    } catch (error) {
      alert("অর্ডার প্লেস করতে সমস্যা হয়েছে।");
    } finally {
      setLoading(false);
    }
  };

  // Helper for status badge
  const getStatusBadge = (status) => {
    switch(status) {
        case 'new': return <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-bold">নতুন</span>;
        case 'confirmed': return <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full font-bold">কনফার্ম</span>;
        case 'shipped': return <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full font-bold">পাঠানো হয়েছে</span>;
        case 'delivered': return <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-bold">ডেলিভারি সম্পন্ন</span>;
        case 'cancelled': return <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full font-bold">বাতিল</span>;
        default: return <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full font-bold">{status}</span>;
    }
  };

  // Styles
  const styles = `
    @keyframes chase { 
      0% { left: 110%; } 
      100% { left: -20%; } 
    }
    .animate-chase { position: fixed; bottom: 20px; z-index: 40; animation: chase 15s linear infinite; display: flex; align-items: center; pointer-events: none; }
    .kid-pattern { background-color: #fffbeb; background-image: radial-gradient(#fbbf24 2px, transparent 2px); background-size: 30px 30px; }
    .wing-flap { animation: flap 0.2s infinite alternate; }
    @keyframes flap { from { transform: rotate(-10deg); } to { transform: rotate(10deg); } }
    .scrollbar-hide::-webkit-scrollbar { display: none; }
    .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
  `;

  if (orderSuccess) {
    return (
      <div className="min-h-screen kid-pattern flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-md w-full text-center border-4 border-yellow-400">
          <Smile className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h2 className="text-3xl font-extrabold text-purple-600 mb-4">অর্ডার কনফার্ম! 🎉</h2>
          <p className="text-gray-600 mb-6">ধন্যবাদ! আমরা শীঘ্রই কল করব।</p>
          <button onClick={() => setOrderSuccess(false)} className="bg-purple-600 text-white px-8 py-3 rounded-full font-bold">আরো অর্ডার করুন</button>
        </div>
      </div>
    );
  }

  return (
    <div className="font-sans text-gray-800 kid-pattern min-h-screen pb-24 overflow-x-hidden relative">
      <style>{styles}</style>

      {/* --- Admin Toggle Button --- */}
      <button 
        onClick={handleAdminLogin}
        className="fixed bottom-4 left-4 z-50 bg-gray-800 text-white p-3 rounded-full opacity-60 hover:opacity-100 transition shadow-lg hover:scale-110"
        title="Admin Login"
      >
        <Lock size={20} />
      </button>

      {/* --- Admin Panel Modal --- */}
      {showAdminPanel && (
        <div className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-2 sm:p-4">
          <div className="bg-white rounded-2xl w-full max-w-5xl h-[90vh] shadow-2xl relative flex flex-col overflow-hidden">
            
            {/* Header */}
            <div className="bg-purple-100 p-4 flex justify-between items-center border-b">
                <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2 text-purple-800">
                    <Edit size={24}/> অ্যাডমিন প্যানেল
                </h2>
                <button onClick={() => setShowAdminPanel(false)} className="text-gray-500 hover:text-red-500 bg-white p-2 rounded-full shadow hover:scale-110 transition"><X size={20}/></button>
            </div>

            {/* Tabs */}
            <div className="flex bg-white border-b">
                <button 
                    onClick={() => setActiveTab('orders')} 
                    className={`flex-1 py-3 font-bold text-center flex items-center justify-center gap-2 transition ${activeTab === 'orders' ? 'text-purple-700 border-b-4 border-purple-600 bg-purple-50' : 'text-gray-500 hover:bg-gray-50'}`}
                >
                    <List size={18}/> অর্ডার লিস্ট ({orders.length})
                </button>
                <button 
                    onClick={() => setActiveTab('config')} 
                    className={`flex-1 py-3 font-bold text-center flex items-center justify-center gap-2 transition ${activeTab === 'config' ? 'text-purple-700 border-b-4 border-purple-600 bg-purple-50' : 'text-gray-500 hover:bg-gray-50'}`}
                >
                    <Settings size={18}/> সেটিংস
                </button>
            </div>
            
            {/* Content Area */}
            <div className="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-50">
                
                {/* --- ORDER LIST TAB --- */}
                {activeTab === 'orders' && (
                    <div className="space-y-4">
                        {orders.length === 0 ? (
                            <div className="text-center py-20 text-gray-500">
                                <List size={48} className="mx-auto mb-4 opacity-20"/>
                                <p>কোন অর্ডার পাওয়া যায়নি</p>
                            </div>
                        ) : (
                            orders.map((order) => (
                                <div key={order.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition">
                                    <div className="flex flex-col md:flex-row justify-between gap-4">
                                        
                                        {/* Customer Info */}
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-1">
                                                <h3 className="font-bold text-lg text-gray-800">{order.name}</h3>
                                                {getStatusBadge(order.status)}
                                            </div>
                                            <p className="text-sm text-gray-600 flex items-center gap-1"><Phone size={12}/> {order.phone}</p>
                                            <p className="text-sm text-gray-600 mt-1 bg-gray-50 p-2 rounded border border-dashed">{order.address}</p>
                                            <p className="text-xs text-gray-400 mt-2">
                                                {order.orderDate ? new Date(order.orderDate.seconds * 1000).toLocaleString('bn-BD') : 'Time unknown'}
                                            </p>
                                        </div>

                                        {/* Order Details */}
                                        <div className="md:text-right flex flex-col justify-between">
                                            <div>
                                                <p className="text-sm font-semibold text-gray-500">পরিমাণ: {order.quantity} টি</p>
                                                <p className="text-xl font-black text-purple-700">৳{order.totalPrice}</p>
                                                <p className="text-xs text-gray-400">{order.deliveryArea === 'inside_dhaka' ? 'ঢাকার ভিতরে' : 'ঢাকার বাইরে'}</p>
                                            </div>
                                            
                                            {/* Action Buttons */}
                                            <div className="flex flex-wrap gap-2 mt-3 md:justify-end">
                                                <select 
                                                    value={order.status} 
                                                    onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                                                    className="border rounded px-2 py-1 text-sm bg-white cursor-pointer"
                                                >
                                                    <option value="new">নতুন</option>
                                                    <option value="confirmed">কনফার্ম</option>
                                                    <option value="shipped">পাঠানো হয়েছে</option>
                                                    <option value="delivered">ডেলিভারি সম্পন্ন</option>
                                                    <option value="cancelled">বাতিল</option>
                                                </select>
                                                <button 
                                                    onClick={() => deleteOrder(order.id)}
                                                    className="bg-red-50 text-red-500 p-1.5 rounded hover:bg-red-500 hover:text-white transition"
                                                    title="Delete Order"
                                                >
                                                    <Trash2 size={16}/>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                )}

                {/* --- SETTINGS TAB --- */}
                {activeTab === 'config' && (
                    <div className="space-y-6">
                        {/* Basic Info */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-bold mb-1">প্রোডাক্টের নাম</label>
                                <input type="text" value={config.productName} onChange={(e) => setConfig({...config, productName: e.target.value})} className="w-full border p-2 rounded focus:ring-2 focus:ring-purple-200 outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-1">ফোন নাম্বার</label>
                                <input type="text" value={config.phone} onChange={(e) => setConfig({...config, phone: e.target.value})} className="w-full border p-2 rounded focus:ring-2 focus:ring-purple-200 outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-1">বর্তমান দাম (৳)</label>
                                <input type="number" value={config.price} onChange={(e) => setConfig({...config, price: parseInt(e.target.value)})} className="w-full border p-2 rounded focus:ring-2 focus:ring-purple-200 outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-1">রেগুলার দাম (৳)</label>
                                <input type="number" value={config.regularPrice} onChange={(e) => setConfig({...config, regularPrice: parseInt(e.target.value)})} className="w-full border p-2 rounded focus:ring-2 focus:ring-purple-200 outline-none" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold mb-1">বর্ণনা</label>
                            <textarea rows="3" value={config.description} onChange={(e) => setConfig({...config, description: e.target.value})} className="w-full border p-2 rounded focus:ring-2 focus:ring-purple-200 outline-none" />
                        </div>

                        {/* Features Edit Section */}
                        <div className="border-t pt-4">
                            <label className="block text-sm font-bold mb-3 text-purple-700">বৈশিষ্ট্যসমূহ (Features)</label>
                            <div className="grid gap-4">
                                {config.features.map((feat, i) => (
                                    <div key={i} className="flex flex-col md:flex-row gap-2 bg-white p-2 rounded border shadow-sm">
                                        <input 
                                            className="border p-2 rounded font-bold md:w-1/3"
                                            value={feat.title}
                                            onChange={(e) => handleFeatureChange(i, 'title', e.target.value)}
                                            placeholder="Title"
                                        />
                                        <input 
                                            className="border p-2 rounded w-full"
                                            value={feat.text}
                                            onChange={(e) => handleFeatureChange(i, 'text', e.target.value)}
                                            placeholder="Description"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Image Manager */}
                        <div className="border-t pt-4">
                            <label className="block text-sm font-bold mb-3">ছবি ম্যানেজমেন্ট (ড্র্যাগ বা ক্লিক করে ছবি দিন)</label>
                            <div className="flex flex-wrap gap-4">
                                {config.images.map((img, idx) => (
                                    <div key={idx} className="relative w-24 h-24 border rounded overflow-hidden group shadow-sm">
                                        <img src={img} alt="Product" className="w-full h-full object-cover" />
                                        <button onClick={() => removeImage(idx)} className="absolute top-0 right-0 bg-red-600/80 text-white p-1 opacity-100 hover:bg-red-600 transition"><Trash2 size={14} /></button>
                                    </div>
                                ))}
                                
                                <label className="w-24 h-24 border-2 border-dashed border-gray-300 rounded flex flex-col items-center justify-center cursor-pointer hover:bg-white hover:border-purple-500 transition">
                                    <Upload className="text-gray-400" />
                                    <span className="text-xs text-gray-500 mt-1">Add Photo</span>
                                    <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                                </label>
                            </div>
                        </div>
                        
                        {/* Save Config Button */}
                        <div className="pt-4 border-t flex justify-end">
                             <button onClick={handleConfigSave} className="bg-purple-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-purple-700 flex items-center gap-2 shadow-lg hover:shadow-xl transform transition hover:-translate-y-1">
                                {loading ? 'সেভ হচ্ছে...' : <><Save size={18} /> সেটিংস সেভ করুন</>}
                            </button>
                        </div>
                    </div>
                )}
            </div>
          </div>
        </div>
      )}

      {/* --- Floating Animation (Right to Left) --- */}
      <div className="animate-chase">
        {/* Chocolate (Running away, leading the chase to the left) */}
        <div className="relative transform scale-150 mr-12">
           <span className="text-4xl absolute -left-4 -top-2 wing-flap">🕊️</span>
           <span className="text-5xl drop-shadow-lg">🍫</span>
           <span className="text-4xl absolute -right-4 -top-2 wing-flap" style={{animationDelay: '0.1s'}}>🕊️</span>
        </div>

        {/* Child (Chasing, following the chocolate) */}
        <div className="transform scale-150 bouncing-child">
            {/* scaleX(1) makes the runner face right */}
            <span className="text-6xl inline-block" style={{ transform: 'scaleX(1)' }}>🏃‍♂️</span>
        </div>
      </div>

      {/* Top Bar */}
      <div className="bg-purple-600 text-white py-2 px-4 text-sm font-bold text-center md:flex md:justify-between md:items-center shadow-md">
        <p className="flex items-center justify-center gap-2"><Gift size={16}/> বাচ্চাদের জন্য সেরা গিফট বক্স!</p>
        <div className="flex justify-center gap-4 mt-1 md:mt-0">
          <a href={`tel:${config.phone}`} className="flex items-center gap-1 hover:text-yellow-300"><Phone size={14} /> {config.phone}</a>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-40 border-b-4 border-yellow-400 shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-4xl">🍬</span>
            <h1 className="text-3xl font-black text-purple-700 tracking-tight" style={{ fontFamily: 'cursive' }}>EcoHut</h1>
          </div>
          <a href="#order-form" className="bg-yellow-400 text-purple-900 px-6 py-2 rounded-full font-black text-sm hover:bg-yellow-500 transition shadow-lg flex items-center gap-2 transform hover:scale-105 border-2 border-yellow-500">
            <ShoppingCart size={20} /> অর্ডার করুন
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-xl border-4 border-purple-100 flex flex-col md:flex-row gap-8 items-start">
            
            {/* Image Side */}
            <div className="w-full md:w-1/2 relative">
               {/* Main Image */}
               <div className="relative aspect-square bg-yellow-50 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                 <img 
                    src={config.images[activeImgIndex] || config.images[0]} 
                    alt="Product Main" 
                    className="w-full h-full object-cover transition-all duration-300" 
                 />
                 <div className="absolute top-4 right-4 bg-red-500 text-white px-5 py-2 rounded-full font-black shadow-lg text-lg animate-pulse border-2 border-white">
                   {Math.round(((config.regularPrice - config.price) / config.regularPrice) * 100)}% ছাড়!
                 </div>
               </div>
               
               {/* Thumbnails (Clickable) */}
               <div className="flex gap-3 mt-4 overflow-x-auto pb-2 scrollbar-hide">
                  {config.images.map((img, i) => (
                    <div 
                        key={i} 
                        onClick={() => setActiveImgIndex(i)}
                        className={`w-20 h-20 flex-shrink-0 rounded-lg border-2 overflow-hidden cursor-pointer transition transform hover:scale-105 ${activeImgIndex === i ? 'border-purple-600 ring-2 ring-purple-300' : 'border-purple-200'}`}
                    >
                        <img src={img} alt="thumb" className="w-full h-full object-cover" />
                    </div>
                  ))}
               </div>
            </div>

            {/* Content Side */}
            <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
              <div>
                <h1 className="text-3xl md:text-5xl font-black text-gray-800 leading-tight mb-2 drop-shadow-sm">
                  {config.productName}
                </h1>
                <div className="flex justify-center md:justify-start items-center gap-2 mb-6">
                   <div className="flex text-yellow-400 filter drop-shadow">
                     {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={24} />)}
                   </div>
                   <span className="text-gray-500 font-bold">(২০০+ হ্যাপি কিডস)</span>
                </div>
                
                <div className="inline-block bg-yellow-100 px-6 py-2 rounded-2xl border-2 border-yellow-400 mb-4 transform -rotate-2">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl font-black text-purple-700">৳{config.price}</span>
                    <span className="text-xl text-gray-500 line-through decoration-red-500 decoration-2">৳{config.regularPrice}</span>
                  </div>
                </div>
              </div>

              <div className="text-gray-700 space-y-4 text-lg bg-white/50 p-4 rounded-xl border border-purple-100">
                {/* whitespace-pre-line ক্লাসটি যুক্ত করা হয়েছে যাতে লাইন ব্রেক কাজ করে */}
                <p className="whitespace-pre-line">{config.description}</p>
              </div>

              <div className="pt-4">
                <a href="#order-form" className="block w-full text-center bg-gradient-to-r from-purple-600 to-purple-500 text-white py-4 rounded-2xl font-black text-2xl shadow-xl hover:from-purple-700 hover:to-purple-600 transition transform hover:-translate-y-1 hover:scale-105">
                  অর্ডার করতে ক্লিক করুন 🛒
                </a>
                <p className="text-center text-gray-500 font-bold mt-3">কল করুন: <span className="text-purple-700 text-lg">{config.phone}</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-8 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {config.features.map((feat, i) => (
            <div key={i} className={`bg-white p-6 rounded-2xl shadow-lg border-b-4 ${i===0?'border-green-500':i===1?'border-yellow-500':'border-blue-500'} text-center transform hover:-translate-y-1 transition`}>
               <h3 className="font-bold text-xl mb-2">{feat.title}</h3>
               <p className="text-gray-600">{feat.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Order Form */}
      <div id="order-form" className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-white ring-4 ring-purple-100">
            <div className="bg-purple-600 py-6 text-center relative overflow-hidden">
               <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/food.png')]"></div>
               <h2 className="text-2xl md:text-3xl font-black text-white relative z-10">অর্ডার কনফার্ম করুন 👇</h2>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-5">
              <div className="flex justify-between items-center bg-yellow-50 p-4 rounded-xl border-2 border-yellow-200 border-dashed">
                <div className="flex items-center gap-3">
                   <div className="text-3xl">🎁</div>
                   <div>
                      <p className="font-bold text-gray-800">Combo Pack</p>
                      <p className="text-xs text-gray-500 font-bold text-purple-600">Premium Item</p>
                   </div>
                </div>
                <span className="font-black text-purple-700 text-xl">৳{config.price}</span>
              </div>

              <div className="space-y-4">
                <input required type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="আপনার নাম..." className="w-full px-5 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 outline-none font-medium" />
                <input required type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="মোবাইল নাম্বার..." className="w-full px-5 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 outline-none font-medium" />
                <textarea required name="address" value={formData.address} onChange={handleInputChange} rows="2" placeholder="ঠিকানা (বাসা, রোড, এলাকা)..." className="w-full px-5 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 outline-none font-medium" />
                
                <div className="bg-gray-50 p-4 rounded-xl text-center">
                   <label className="block text-sm font-bold text-gray-700 mb-2">কয়টি বক্স নিবেন?</label>
                   <div className="flex items-center justify-center gap-6">
                      <button type="button" onClick={() => handleQuantityChange(-1)} className="w-10 h-10 rounded-full bg-white shadow border font-bold text-red-500">-</button>
                      <span className="text-2xl font-black w-8">{formData.quantity}</span>
                      <button type="button" onClick={() => handleQuantityChange(1)} className="w-10 h-10 rounded-full bg-white shadow border font-bold text-green-500">+</button>
                   </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <label className={`cursor-pointer border-2 rounded-xl p-3 flex flex-col items-center justify-center gap-1 transition ${formData.deliveryArea === 'inside_dhaka' ? 'border-purple-500 bg-purple-50 text-purple-700' : 'border-gray-200'}`}>
                    <input type="radio" name="deliveryArea" value="inside_dhaka" checked={formData.deliveryArea === 'inside_dhaka'} onChange={handleInputChange} className="hidden" />
                    <span className="font-bold">ঢাকার ভিতরে</span>
                    <span className="text-sm bg-white px-2 rounded-full border">৳{config.deliveryInside}</span>
                  </label>
                  <label className={`cursor-pointer border-2 rounded-xl p-3 flex flex-col items-center justify-center gap-1 transition ${formData.deliveryArea === 'outside_dhaka' ? 'border-purple-500 bg-purple-50 text-purple-700' : 'border-gray-200'}`}>
                    <input type="radio" name="deliveryArea" value="outside_dhaka" checked={formData.deliveryArea === 'outside_dhaka'} onChange={handleInputChange} className="hidden" />
                    <span className="font-bold">ঢাকার বাইরে</span>
                    <span className="text-sm bg-white px-2 rounded-full border">৳{config.deliveryOutside}</span>
                  </label>
                </div>
              </div>

              <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 mt-2">
                 <div className="flex justify-between items-center mb-1 text-sm"><span className="text-gray-600">সাবটোটাল</span><span className="font-bold">৳{config.price * formData.quantity}</span></div>
                 <div className="flex justify-between items-center mb-3 text-sm"><span className="text-gray-600">ডেলিভারি চার্জ</span><span className="font-bold">৳{formData.deliveryArea === 'inside_dhaka' ? config.deliveryInside : config.deliveryOutside}</span></div>
                 <div className="flex justify-between items-center text-2xl font-black text-gray-800 border-t-2 border-dashed border-gray-300 pt-3"><span>সর্বমোট</span><span className="text-purple-600">৳{calculateTotal()}</span></div>
              </div>

              <button type="submit" disabled={loading} className={`w-full bg-purple-600 text-white font-black text-xl py-4 rounded-xl shadow-xl hover:bg-purple-700 transition flex justify-center items-center gap-2 ${loading ? 'opacity-70' : ''}`}>
                {loading ? 'অর্ডার হচ্ছে...' : <span>অর্ডার কনফার্ম করুন <CheckCircle size={20} className="inline"/></span>}
              </button>
            </form>
          </div>
        </div>
      </div>

      <footer className="bg-purple-900 text-purple-200 py-10 border-t-4 border-yellow-400 text-center">
         <h3 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: 'cursive' }}>EcoHut</h3>
         <p className="text-sm opacity-50">&copy; 2024 EcoHut. Made with 💜 for Kids.</p>
      </footer>
    </div>
  );
}