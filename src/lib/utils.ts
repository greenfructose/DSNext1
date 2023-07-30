import dynamic from "next/dynamic";
import { language } from "./constants";

export async function getComponentMap(sections:any) {
  return new Promise(async (resolve) => {
    const map:any = {};
    for (let i = 0; i < sections.length; i++) {
      if(!sections[i].template){
        continue;
      }
      const template = sections[i].template.doc;
      map["section" + i] = import(
        `../components/templates/${template.category}/${template.slug}/${template.slug}.${language === 'typescript' ? 'tsx' : 'jsx'}`
      );
    }
    resolve(map);
  });
}

export function getComponents(sections:any) {
  return new Promise((resolve) => {
    getComponentMap(sections).then((map:any) => {
      let comps = [];
      for (const key of Object.keys(map)) {
        let comp = dynamic(() => map[key], {
          suspense: false,
        });
        comps.push(comp);
      }
      resolve(comps);
    });
  });
}