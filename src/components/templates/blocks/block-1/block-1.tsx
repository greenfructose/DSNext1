import { ButtonLink, Preheading } from "@/components/elements";

export default function Block1({ content }:any) {
  if (!content) return <></>;
  let { attributes=null } = {...content};
  return (
    <section id="block-1" className="template">
      <div className="mx-auto max-w-screen-xl">
        <Preheading attributes={attributes.preheading}></Preheading>
        <h2 className="max-w-5xl">{attributes.title}</h2>
        <p className="max-w-3xl">{attributes.blurb1}</p>
        <p className="max-w-3xl mb-8">{attributes.blurb2}</p>
        {attributes.buttonLinks &&
          attributes.buttonLinks.map((button:any) => {
            return <ButtonLink key={button.type} attributes={button}></ButtonLink>;
          })}
      </div>
    </section>
  );
}
