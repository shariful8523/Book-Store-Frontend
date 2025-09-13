import { useRef } from "react";
import { ourBestSellersStyles as styles } from "../assets/dummystyles";
import { ChevronLeft, ChevronRight, Minus, ShoppingCart, Plus, Star } from "lucide-react";
import { bgColors, obsbooks } from "../assets/dummydata";
import { useCart } from "../CartContext/CartContext";

const OurBestSellers = () => {
    const scrollRef = useRef(null);

    // ✅ এখানেই custom hook useCart কল করবো
    const { cart, dispatch } = useCart();

    const inCart = (id) => cart?.items?.some(item => item.id === id);
    const getQtc = (id) => cart?.items?.find(item => item.id === id)?.quantity || 0;

    const handelAdd = (book) =>
        dispatch({ type: "ADD_ITEM", payload: { ...book, quantity: 1 } });

    const handelInc = (id) =>
        dispatch({ type: "INCREMENT", payload: { id } });

    const handelDec = (id) =>
        dispatch({ type: "DECREMENT", payload: { id } });

    const scrollLeft = () =>
        scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });

    const scrollRight = () =>
        scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* HEADER */}
                <div className={styles.headerWrapper}>
                    <div className={styles.headerText}>
                        <h1 className={styles.title}>
                            <span className={styles.gradientText}>
                                Curated Excellence
                            </span>
                        </h1>
                        <p className={styles.subtitle}>
                            Top Rated by Our Readers
                        </p>
                    </div>

                    {/* LEFT/RIGHT scroll buttons */}
                    <div className={styles.navWrapper}>
                        <div className={styles.navButtons}>
                            <button onClick={scrollLeft} className={styles.navBtn}>
                                <ChevronLeft className={styles.navIcon} size={20} />
                            </button>
                            <button onClick={scrollRight} className={styles.navBtn}>
                                <ChevronRight className={styles.navIcon} size={20} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* BOOK SECTION */}
                <div className={styles.scrollContainer} ref={scrollRef}>
                    {obsbooks.map((book, index) => (
                        <div
                            className={styles.card(bgColors[index % bgColors.length])}
                            key={book.id}
                        >
                            <div className={styles.cardInner}>
                                <div className="space-y-3 md:space-y-4">
                                    {/* Stars */}
                                    <div className={styles.stars}>
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                className="h-4 md:h-5 md:w-5 text-amber-400 fill-amber-400"
                                                key={i}
                                            />
                                        ))}
                                    </div>

                                    {/* Book Info */}
                                    <div className={styles.bookInfo}>
                                        <h2 className={styles.bookTitle}>{book.title}</h2>
                                        <p className={styles.bookAuthor}>{book.author}</p>
                                    </div>

                                    {/* Desc */}
                                    <p className={styles.bookDesc}>
                                        Jane McLane's latest masterpiece challenges
                                        conventional storytelling. Explore transformative
                                        narratives that...
                                    </p>
                                </div>

                                {/* Cart Controls */}
                                <div className={styles.cartControls}>
                                    <div className={styles.priceQtyWrapper}>
                                        <span className={styles.price}>
                                            ${book.price.toFixed(2)}
                                        </span>

                                        {!inCart(book.id) ? (
                                            <button
                                                onClick={() => handelAdd(book)}
                                                className={styles.addButton}
                                            >
                                                <ShoppingCart className="h-4 w-4 md:h-5 md:w-5" />
                                                <span>Add to Collection</span>
                                            </button>
                                        ) : (
                                            <div className={styles.qtyWrapper}>
                                                <button
                                                    onClick={() => handelDec(book.id)}
                                                    className={styles.qtyBtn}
                                                >
                                                    <Minus size={18} />
                                                </button>
                                                <span className={styles.qtyText}>
                                                    {getQtc(book.id)}
                                                </span>
                                                <button
                                                    onClick={() => handelInc(book.id)}
                                                    className={styles.qtyBtn}
                                                >
                                                    <Plus size={18} />
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <img src={book.image} alt={book.title} className={styles.bookImage} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurBestSellers;
