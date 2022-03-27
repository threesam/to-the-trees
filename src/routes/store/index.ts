import dotenv from 'dotenv'
import client from '$lib/sanityClient';
import { enhance } from '../../lib/form';
dotenv.config()




// printful fetch args
const printfulEndpoint = 'https://api.printful.com/store/products'
const printfulOptions = {
  headers: {
    'Authorization': `Bearer ${process.env.VITE_PRINTFUL_TOKEN}`
  }
}

export async function get() {
  // get all products
  const res = await fetch(printfulEndpoint, printfulOptions)
  const allProducts = await res.json()
  
  // generate product urls to get variant info
  const productIds = allProducts.result.map(product => product.id)
  const urls = productIds.map(id => `${printfulEndpoint}/${id}`)

  // fetch products and return results
  const products = await (await fetchAll(urls, printfulOptions)).map(product => product.result)

  // enhance with sanity data
  const filter = /* groq */ `*[_type == "product"]`;
  const projection = /* groq */ `{
        ...
    }`;

  const query = filter + projection;

  const sanity = await client.fetch(query).catch((err) => this.error(500, err));
  
  const enhancedProducts = products.map(product => {
    const additionalData = sanity.filter(prod => prod._id === product.sync_product.external_id).pop()
    return {
      ...product,
      ...additionalData
    }
  })

  return {
    body: { products: enhancedProducts }
  }
}

const fetchAll = async (urls, options) => {
  const response = await Promise.all(urls.map(url => fetch(url, options)))
  const jsons = await Promise.all(response.map(res => res.json()))
  return jsons
}