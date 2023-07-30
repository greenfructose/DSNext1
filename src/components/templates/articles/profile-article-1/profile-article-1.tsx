import Image from "next/image";
import Head from "next/head";
import getConfig from "next/config";

const getHTML = (content: any) => {
  return {
    __html: content,
  };
};

export default function ProfileArticle1({ content }: any) {
  if (!content) return <></>;
  let { item = null, global = null } = { ...content };
  const { publicRuntimeConfig } = getConfig();
  return (
    <>
      <Head>
        {item.attributes.fullName && (
          <>
            <title>{global.name} | Team | {item.attributes.fullName}</title>
            <meta property="og:title" content={item.attributes.fullName} />
            <meta name="twitter:title" content={item.attributes.fullName} />
          </>
        )}
      </Head>
      <article id="profile-article-1" className="template">
        {item && (
          <div className="max-w-screen-xl mx-auto">
            <header className="max-w-4xl mx-auto">
              <span className={`preheading blank left`}>
                {item.attributes.position}
              </span>
              <div className="flex items-center">
                <h1 className="mb-10">{item.attributes.fullName}</h1>
              </div>
            </header>
            <div className="relative mb-20">
              <Image
                src={`${publicRuntimeConfig.BACKEND_URL || ""}${
                  item.attributes?.profileImage?.data.attributes.url
                }`}
                width={item.attributes.profileImage.data.attributes.width}
                height={item.attributes.profileImage.data.attributes.height}
                layout="responsive"
                alt={item.attributes.fullName}
              />
            </div>
            <div
              className="max-w-2xl mx-auto"
              dangerouslySetInnerHTML={getHTML(item.attributes.bio)}
            ></div>
          </div>
        )}
      </article>
    </>
  );
}
