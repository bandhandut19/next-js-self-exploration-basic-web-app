
const DynamicProdPage = ({ params, searchParams }) => {
    console.log(searchParams)
    return (
        <div>
            <h1>Dynamic Product Page {params.productId}</h1>
        </div>
    );
};

export default DynamicProdPage;