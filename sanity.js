//config file for sanity

import {
    createImageUrlBuilder,
    createCurrentUserHook,
    createClient
} from "next-sanity";

export const config = {
    /**
     * FInd your project ID and dataset in 'sanity.json' in your studio project
     * These are considered "public", but you can use environment variables
     * if you want differ between local dev and production
     * https://nextjs.org/docs/basic-features/environment-variables
     */
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    productId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion: "2021-03-25",
    /**
     * Set useCdn to `false` if your application require the fresgest possible data always
     * (potentially) slightly slower and a bit more expensive
     * Authentication requests (like preview) will always bypass the CDN
     */

    useCdn: process.env.NODE_ENV === "production",
}

//Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config);

/**
 * setup a helper function for generating image URLs with only the asset references data in your documents
 * Read more: https//www.sanity.io/docs/image-url
 */

export const urlFor = (source) => createImageUrlBuilder(config).image(source)