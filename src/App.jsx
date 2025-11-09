import { useEffect, useMemo, useState } from "react";
import "./App.css";

const FALLBACK_CONTACTS = [
    {
        id: 1,
        name: "Princess Purr",
        phone: "(555) 372-2345",
        email: "purr@example.com",
        photo: "/images/princess.jpg"
    },
    {
        id: 2,
        name: "Meowow",
        phone: "(555) 267-9886",
        email: "meowow@example.com",
        photo: "/images/meowow.jpg"
    },
    {
        id: 3,
        name: "Lucy Gucy",
        phone: "(555) 195-3659",
        email: "lucy@example.com",
        photo: "/images/lucy.jpg"
        
    },
    {
        id: 4,
        name: "Macklemore the Asshole",
        phone: "(555) 395-2763",
        email: "mac@example.com",
        photo: "/images/mac.jpg"
    },
    {
        id: 5,
        name: "Prudence",
        phone: "(555) 488-2940",
        email: "prudence@example.com",
        photo: "/images/prudence.jpg"
    },
    {
        id: 6,
        name: "Powow",
        phone: "(555) 111-6482",
        email: "powow@example.com",
        photo: "/images/powow.jpg"
    },
    {
        id: 7,
        name: "Noro the Conquerer",
        phone: "(555) 289-6900",
        email: "noro@example.com",
        photo: "/images/noro.avif"
    },
    {
        id: 8,
        name: "Rupert the Ginger",
        phone: "(555) 289-8892",
        email: "rupert@example.com",
        photo: "/images/rupert.webp"
    },
    {
        id: 9,
        name: "Bella Baddied",
        phone: "(555) 133-8850",
        email: "bella@example.com",
        photo: "/images/bella.jpg"
    },
    {
        id: 10,
        name: "Donkey",
        phone: "(555) 432-9992",
        email: "donkey@example.com",
        photo: "/images/donkey.jpg"
    },
];

const App = () => {
    const [contacts, setContacts] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        setLoading(true);
        fetch("/data/contacts.json")
            .then((res) => {
                if (!res.ok) throw new Error ("Network response failed");
                return res.json();
            })
            .then((data) => {
                console.log("Fetched contacts:", data);
                setContacts(data);
                setError(null);
            })
            .catch(() => {
                console.warn("Fetch failed, using fallback list");
                setError("Failed to load contacts, and will be using the fallback contacts");
                setContacts(FALLBACK_CONTACTS);
            })
            .finally(() => setLoading(false));
    }, []);

    const [query, setQuery] = useState("");

    const filteredContacts = useMemo(() => {
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(query.toLowerCase()) ||
            contact.phone.includes(query)
        );
    }, [contacts, query]);

    const [form, setForm] = useState({ name: "", phone: "", email: "" });
    function handleSubmit(e) {
        e.preventDefault();
        const newErrors = {};
        if (form.name.length <2) {
            newErrors.name = "Name should have at least 2 characters";
        }
        if (!form.phone) {
            newErrors.phone = "Phone number is required";
        }

        if (!form.email.includes("@")) {
            newErrors.email = "Input a valid email";
        } 

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
          }
          
        setErrors({});
    
        const newContact = {
            id: contacts.length + 1,
            ...form,
            photo: "/images/placeholder_cat.jpg",
        };

        setContacts([newContact, ...contacts]);
        setForm({ name: "", phone: "", email: ""});
    }

    return (
        <main className="page" data-testid="page-root">
            <header className="page__header">
                <h1 className="page__title">🐾 Kitty Contacts 🐾</h1>
                <p className="page__subtitle">Throughout this project, we will be building a simple contact directory for my kitty cat June</p>
                <div className="toolbar">
                    <a className="btn" href="#intro">Home</a>
                    <a className="btn" href="#contacts">Contacts</a>
                    <a className="btn" href="#form">Add Contact</a>
                </div>

            </header>

            <section id="intro" className="intro-cat">
                <img src="/images/june.jpg" alt="June the Cat" className="intro-cat__photo" />
                <div className="intro-cat__info">
                    <h3 className="intro-cat__name">June 🐾</h3>
                    <p className="intro-cat__phone">📱 (555) 575-7575</p>
                    <p className="intro-cat__email">✉️ june@kitties.com</p>
                    <p className="intro-cat__description">
                    I am the most perfectest kitty cat to have graced this world!
                    My favorite activities include yelling at my mommy when she gets home because I was lonely all day, and sleeping at any given moment.
                    Everyone says that I am the best cat they have ever met and I agree with them, I am also the best cat I have ever met too!
                    </p>
                </div>
            </section>

            <section className="search" aria-labelledby="search-heading">
                <h2 id="search-heading">Search Contacts</h2>

                <div className="search__controls">
                    <label htmlFor="search-input">Find your favorite furball by typing in keywords and information!</label>
                    <input
                        id="search-input"
                        type="search"
                        placeholder="Search by name or phone"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        data-testid="search-input"
                    />
                </div>

                <p className="search__results" data-testid="results-count">
                    Showing {contacts.length}{" "}
                    {contacts.length === 1 ? "result" : "results"}
                    {loading && <span> Loading...</span>}
                    {error && <span style={{ color: "red" }}> {error}</span>}
                </p>
            </section>

            <section id="contacts" className="contacts" aria-labelledby="contacts-heading">
                <h2 id="contacts-heading">Contacts</h2>
                {filteredContacts.length > 0 && (
                <ul className="contacts_list">
                <li className="contact-card">
                    <img
                        src={filteredContacts[currentPage].photo}
                        alt={filteredContacts[currentPage].name}
                        className="contact-photo"/>    
                <div className="contact-card__info">
                    <h3 className="contact-card__name">{filteredContacts[currentPage].name} 🐾</h3>
                        <p className="contact-card__phone">📱 {filteredContacts[currentPage].phone}</p>
                        <p className="contact-card__email">✉️ {filteredContacts[currentPage].email}</p>
                </div>
                </li>  
                </ul>
                )}

                <div className="pagination">
                    <span>
                        Page {currentPage + 1} of {filteredContacts.length}
                    </span>
                    
                    <div className="pagination-buttons">
                        <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 0))} disabled={currentPage === 0}>
                            Previous
                        </button>
                        
                        <button onClick={() => setCurrentPage(prev => Math.min(prev +1, filteredContacts.length - 1))}
                        disabled={currentPage === filteredContacts.length - 1}>
                            Next
                        </button>
                    </div>
                </div>

            </section>

            <section id="form" className="form" aria-labelledby="form-heading">
                <h2 id="form-heading">Add a Contact</h2>
                <form className="form__body" onSubmit={handleSubmit} noValidate>
                    <div className="field">
                        <label htmlFor="name">Enter kitty's name 🐱</label>
                        <input
                            id="name"
                            name="name"
                            placeholder="Junnifer"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            required
                            minLength={2}
                        />
                        {errors.name && <small style={{ color: "red" }}>{errors.name}</small>}
                    </div>
                    <div className="field">
                        <label htmlFor="phone">Enter kitty's number 📞</label>
                        <input
                            id="phone"
                            name="phone"
                            inputMode="tel"
                            placeholder="(555) 555-5555"
                            value={form.phone}
                            onChange={(e) =>
                                setForm({ ...form, phone: e.target.value })
                            }
                            required
                        />
                        {errors.phone && <small style={{ color: "red" }}>{errors.phone}</small>}
                    </div>
                    <div className="field">
                        <label htmlFor="email">Enter kitty's email ✉️</label>
                        <input
                            id="email"
                            name="email"
                            placeholder="cats4life@kitties.com"
                            type="email"
                            value={form.email}
                            onChange={(e) =>
                                setForm({ ...form, email: e.target.value })
                            }
                        />
                        {errors.email && <small style={{ color: "red" }}>{errors.email}</small>}
                    </div>
                    <div className="form__actions">
                        <button className="btn" type="submit" data-testid="btn-add">
                            Add Contact
                        </button>
                    </div>
                </form>
            </section>

            <footer className="page__footer">
                <small>
                    Please let me know which kitty cat is your favorite because they are all adorable!
                </small>
            </footer>
        </main>
    );
};


export default App;
