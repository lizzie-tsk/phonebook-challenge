import { useEffect, useMemo, useState } from "react";
import "./App.css";

const FALLBACK_CONTACTS = [
    {
        id: 1,
        name: "Princess Purr",
        phone: "(555) 372-2345",
        email: "ada@example.com",
        photo: "https://shorturl.at/5UIHx"
    },
    {
        id: 2,
        name: "Meowow",
        phone: "(555) 267-9886",
        email: "alan@example.com",
        photo: "https://shorturl.at/l5A4x",
    },
    {
        id: 3,
        name: "Lucy Gucy",
        phone: "(555) 195-3659",
        email: "grace@example.com",
        photo: "https://shorturl.at/gKR0z",
        
    },
    {
        id: 4,
        name: "Macklemore the Asshole",
        phone: "(555) 395-2763",
        email: "grace@example.com",
        photo: "https://tinyurl.com/ye887cr5",
    },
    {
        id: 5,
        name: "Prudence",
        phone: "(555) 488-2940",
        email: "grace@example.com",
        photo: "https://tinyurl.com/phmzn2fp",
    },
    {
        id: 6,
        name: "Powow",
        phone: "(555) 111-6482",
        email: "grace@example.com",
        photo: "https://tinyurl.com/4skp2v8c",
    },
    {
        id: 7,
        name: "Noro the Conquerer",
        phone: "(555) 289-6900",
        email: "grace@example.com",
        photo: "https://tinyurl.com/pw3amepj",
    },
    {
        id: 8,
        name: "Rupert the Ginger",
        phone: "(555) 289-8892",
        email: "grace@example.com",
        photo: "https://tinyurl.com/48mwfbcj",
    },
    {
        id: 9,
        name: "Bella Baddied",
        phone: "(555) 133-8850",
        email: "grace@example.com",
        photo: "https://shorturl.at/nAb3y",
    },
    {
        id: 10,
        name: "Donkey",
        phone: "(555) 432-9992",
        email: "grace@example.com",
        photo: "https://shorturl.at/2LOYv",
    },
];

const App = () => {
    const [contacts, setContacts] = useState(FALLBACK_CONTACTS);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {}, []);

    const [query, setQuery] = useState("");

    const [form, setForm] = useState({ name: "", phone: "", email: "" });
    function handleSubmit(e) {
        e.preventDefault();
        // Add contact submission logic here
    }

    return (
        <main className="page" data-testid="page-root">
            <header className="page__header">
                <h1 className="page__title">🐾 Kitty Contacts 🐾</h1>
                <p className="page__subtitle">Throughout this project, we will be building a simple contact directory for my kitty cat June</p>
            </header>

            <section className="intro-cat">
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
                    {loading ? " (loading...)" : ""}
                    {error ? ` (error: ${error})` : ""}
                </p>
            </section>

            <section className="contacts" aria-labelledby="contacts-heading">
                <h2 id="contacts-heading">Contacts</h2>
                <ul className="contacts_list">
                    <li className="contact-card">
                        <img src="https://shorturl.at/5UIHx" alt="Princess Purr" className="contact-photo" />
                        <div className="contact-card__info">
                            <h3 className="contact-card__name">Princess Purr 🐾</h3>
                            <p className="contact-card__phone">📱 (555) 372-2345</p>
                            <p className="contact-card__email">✉️ princess@kitties.com</p>
                            <p className="contact-card__blurb">Must be treated like royalty or she will pee on the bed</p>
                        </div>
                    </li>

                    <li className="contact-card">
                        <img src="https://shorturl.at/l5A4x" alt="Meowow" className="contact-photo" />
                        <div className="contact-card__info">
                            <h3 className="contact-card__name">Meowow 🐾</h3>
                            <p className="contact-card__phone">📱 (555) 267-9886</p>
                            <p className="contact-card__email">✉️ meowow@kitties.com</p>
                            <p className="contact-card__blurb">He is a very vocal baby who loves attention and treats</p>
                        </div>
                    </li>

                    <li className="contact-card">
                        <img src="https://shorturl.at/gKR0z" alt="Lucy Gucy" className="contact-photo" />
                        <div className="contact-card__info">
                            <h3 className="contact-card__name">Lucy Gucy 🐾</h3>
                            <p className="contact-card__phone">📱 (555) 195-3659</p>
                            <p className="contact-card__email">✉️ lucy@kitties.com</p>
                            <p className="contact-card__blurb">She prefers cheap boxes over her $100 cat tree</p>
                        </div>
                    </li>

                    <li className="contact-card">
                        <img src="https://tinyurl.com/ye887cr5" alt="Macklemore the Asshole" className="contact-photo" />
                        <div className="contact-card__info">
                            <h3 className="contact-card__name">Macklemore the Asshole 🐾</h3>
                            <p className="contact-card__phone">📱 (555) 395-2763</p>
                            <p className="contact-card__email">✉️ macklemore@kitties.com</p>
                            <p className="contact-card__blurb">Sleeps on your pillow, and will try to bite your scalp if he gets pissed</p>
                        </div>
                    </li>

                    <li className="contact-card">
                        <img src="https://tinyurl.com/phmzn2fp" alt="Prudence" className="contact-photo" />
                        <div className="contact-card__info">
                            <h3 className="contact-card__name">Prudence 🐾</h3>
                            <p className="contact-card__phone">📱 (555) 488-2940</p>
                            <p className="contact-card__email">✉️ prudence@kitties.com</p>
                            <p className="contact-card__blurb">She likes to watch Charmed and imagine that she is a witch</p>
                        </div>
                    </li>

                    <li className="contact-card">
                        <img src="https://tinyurl.com/4skp2v8c" alt="Powow" className="contact-photo" />
                        <div className="contact-card__info">
                            <h3 className="contact-card__name">Powow 🐾</h3>
                            <p className="contact-card__phone">📱 (555) 111-6482</p>
                            <p className="contact-card__email">✉️ powow@kitties.com</p>
                            <p className="contact-card__blurb">Her favorite activity is kneading biscuits on your face</p>
                        </div>
                    </li>

                    <li className="contact-card">
                        <img src="https://tinyurl.com/pw3amepj" alt="Noro the Conquerer" className="contact-photo" />
                        <div className="contact-card__info">
                            <h3 className="contact-card__name">Noro the Conquerer 🐾</h3>
                            <p className="contact-card__phone">📱 (555) 289-6900</p>
                            <p className="contact-card__email">✉️ noro@kitties.com</p>
                            <p className="contact-card__blurb">He has conquered every surface in the house</p>
                        </div>
                    </li>

                    <li className="contact-card">
                        <img src="https://tinyurl.com/48mwfbcj" alt="Rupert the Ginger" className="contact-photo" />
                        <div className="contact-card__info">
                            <h3 className="contact-card__name">Rupert the Ginger 🐾</h3>
                            <p className="contact-card__phone">📱 (555) 289-8892</p>
                            <p className="contact-card__email">✉️ rupert@kitties.com</p>
                            <p className="contact-card__blurb">He uses his gingerness as an excuse to live a life of crime</p>
                        </div>
                    </li>

                    <li className="contact-card">
                        <img src="https://shorturl.at/nAb3y" alt="Bella Baddied" className="contact-photo" />
                        <div className="contact-card__info">
                            <h3 className="contact-card__name">Bella Baddied 🐾</h3>
                            <p className="contact-card__phone">📱 (555) 133-8850</p>
                            <p className="contact-card__email">✉️ bella@kitties.com</p>
                            <p className="contact-card__blurb">Adorably weird kitty that likes standing on her back two legs</p>
                        </div>
                    </li>

                    <li className="contact-card">
                        <img src="https://shorturl.at/2LOYv" alt="Donkey" className="contact-photo" />
                        <div className="contact-card__info">
                            <h3 className="contact-card__name">Donkey 🐾</h3>
                            <p className="contact-card__phone">📱 (555) 432-9992</p>
                            <p className="contact-card__email">✉️ donkey@kitties.com</p>
                            <p className="contact-card__blurb">The jury is still out on his species, might be a donkey cat hybrid</p>
                        </div>
                    </li>
                </ul>

            </section>

            <section className="form" aria-labelledby="form-heading">
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
