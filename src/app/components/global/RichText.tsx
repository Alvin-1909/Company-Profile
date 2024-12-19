import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const RichText = ({ document }: { document: any }) => {
  return <div>{documentToReactComponents(document)}</div>;
};

export default RichText;
