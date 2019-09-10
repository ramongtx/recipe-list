import * as contentful from 'contentful';

const contentfulClient = contentful.createClient({
  accessToken: '7ac531648a1b5e1dab6c18b0979f822a5aad0fe5f1109829b8a197eb2be4b84c',
  space: 'kk2bw5ojx476',
});

const PRODUCT_CONTENT_TYPE_ID = 'recipe';

const getAllRecipes = () => {
  return contentfulClient.getEntries({ content_type: PRODUCT_CONTENT_TYPE_ID });
};

export default getAllRecipes;
