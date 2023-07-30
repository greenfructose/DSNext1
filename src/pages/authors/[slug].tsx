import { GetStaticPaths, GetStaticProps } from 'next';
import { withRouter } from "next/router";
import { getConfig, getItems } from "@builtjs/theme";
import Page from "../../lib/page";
import { pages } from "../../lib/constants";

export default withRouter(Page);

export const getStaticPaths: GetStaticPaths = async () => {
  const allItems = await getItems('author');
  return {
    paths: allItems.items.map(({ attributes }:any) => `/authors/${attributes.slug}`) ?? [],
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const config = await getConfig(pages.AUTHOR_ARTICLE);
  config.params = context.params;
  return {
    props: { config }
  };
};