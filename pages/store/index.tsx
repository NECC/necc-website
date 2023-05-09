import StoreItem from "../../components/store/StoreItem"
import storeData from "../../data/store.json"
import Layout from "../../components/Layout"


export default function Store() {
  const storeItems = storeData.storeItems;

  return (
    <Layout>
      <div className="bg-slate-100 dark:bg-gray-800 min-h-screen">
        <div id="store-page" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 gap-x-12 justify-items-center py-32 container mx-auto">
          {
            storeItems.map(({ name, paths, shortDescription, price, price_socio }, index) => {
              return (
                <StoreItem name={name} paths={paths} shortDescription={shortDescription} price={price} price_socio={price_socio} key={index} />
              );
            })
          }
        </div>
      </div>
    </Layout>
  )
}
