export default function Preheading({ attributes }:any) {
  if (!attributes) return <></>;
  return (
    <span id="preheading" className={`preheading ${attributes.type} ${attributes.alignment}`}>
      {attributes.text}
    </span>
  );
}
