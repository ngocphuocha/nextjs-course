import Link from 'next/link'

const ProductList = () => {
    const pids = [1, 2, 3]

    return (
        <>
            <Link href='/'>
                <a>Home</a>
            </Link>
            {/* {products[1]} */}
            {
                pids.map((pid) => (
                    <Link key={pid} href="/product/[productId]" as={`/product/${pid}`}>
                        <a>Product {pid}</a>
                    </Link>
                ))
            }
        </>
    )
}

export default ProductList