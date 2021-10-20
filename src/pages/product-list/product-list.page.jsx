import Categories from "../../components/categories/categories.component";

export default function ProductListPage() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
      }}
    >
      <h1 style={{ marginTop: '-30vh' }}>This is the Product List Page</h1>
      <Categories />
    </div>
  );
}
