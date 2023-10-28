import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
//require('dotenv').config();

//import { useLazyGetSummaryQuery } from "./article" // Make sure to use the correct import path


const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;
//console.log(process.env);
// try {
//     const response = useLazyGetSummaryQuery({ articleUrl: 'https://time.com/6266679/musk-ai-open-letter/' });
//     if (response.error) {
//         console.error('Error:', response.error);
//     } else {
//         console.log('Summary:', response.data);
//     }
// } catch (error) {
//     console.error('API request failed:', error);
// }


export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', "f0e8cd81aamshf5e87e65e723b1fp1d89b0jsn9b147160d243");
            headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com');

            return headers;
        },
    }),
    endpoints: (builder) => ({
        getSummary: builder.query({
            // encodeURIComponent() function encodes special characters that may be present in the parameter values
            // If we do not properly encode these characters, they can be misinterpreted by the server and cause errors or unexpected behavior. Thus that RTK bug
            query: (params) => `summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
        }),
    }),
})

export const { useLazyGetSummaryQuery } = articleApi;

// const encodedURL = encodeURIComponent("https://example.com/article");

