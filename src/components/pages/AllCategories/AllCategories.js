import Categories from '../../features/Categories/Categories';

const AllCategories = () => {
    return (
        <section id="home"className="mx-auto" style={{ minWidth: '300px', maxWidth: '800px' }} >
            <h1>All Categories</h1>
            <Categories />
        </section>)
}

export default AllCategories;