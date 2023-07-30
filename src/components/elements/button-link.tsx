import Link from "next/link";

export default function ButtonLink({ attributes }:any) {
  if (!attributes) return <></>;
  return (
    <Link
      className={`btn btn-${attributes.type}`}
      key={attributes.type}
      href={attributes.url}
    >
      {attributes.label}
    </Link>
  );
}
