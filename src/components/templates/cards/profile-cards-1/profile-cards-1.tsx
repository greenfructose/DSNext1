import Image from "next/image";
import Link from "next/link";
import getConfig from "next/config";
import { Preheading } from "@/components/elements";

export default function ProfileCards1({ content }: any) {
  if (!content) return <></>;
  let { collections = null } = { ...content };
  let data: any = null;
  const { publicRuntimeConfig } = getConfig();
  const DEFAULT_COLS = 3;
  const cols = (data && data.columns) || DEFAULT_COLS;
  if (!collections) {
    throw new Error("No template collections");
  }
  let collectionName = Object.keys(collections)[0];
  let collection = collections[collectionName];
  let items;
  let limit;
  if (collection) {
    items = collection.data;
    limit = collection.limit || items.length;
  }

  return (
    <section id="profile-cards-1" className="template">
      <div className="max-w-screen-xl mx-auto">
        <div
          className={`grid grid-cols-1 gap-x-6 gap-y-16 lg:grid-cols-${cols}`}
        >
          {items &&
            items.slice(0, limit).map((item: any, i: number) => (
              <div key={i}>
                <Link href={`/authors/${item.attributes.slug}`}>
                  <div className="relative w-full h-56 transition-opacity rounded-b-none hover:opacity-80">
                    <Image
                      className="rounded-b-none"
                      src={`${publicRuntimeConfig.BACKEND_URL || ""}${
                        item.attributes?.profileImage?.data.attributes.url
                      }`}
                      layout="fill"
                      objectFit="cover"
                      alt={item.attributes.fullName}
                    />
                  </div>
                </Link>
                <div className="p-8 border border-t-0 border-gray-200 rounded-b-lg dark:border-gray-700">
                  <span className={`preheading blank left`}>
                    {item.attributes.position}
                  </span>
                  <Preheading attributes={item.attributes}></Preheading>
                  <Link
                    className="no-underline"
                    href={`/authors/${item.attributes.slug}`}
                  >
                    <h3 className="mb-4 hover:text-gray-700 dark:hover:text-gray-200">
                      {item.attributes.fullName}
                    </h3>
                  </Link>
                  <p>{item.attributes.excerpt}</p>
                  <Link href={`/authors/${item.attributes.slug}`}>
                    Read More
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
