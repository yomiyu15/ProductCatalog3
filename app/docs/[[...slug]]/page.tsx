import { pdfConfig } from "../pdf-config";
import DocsBreadcrumb from "@/components/docs-breadcrumb";
import Pagination from "@/components/pagination";
import Toc from "@/components/toc";
import { page_routes } from "@/lib/routes-config";
import { notFound } from "next/navigation";
import { getDocsForSlug } from "@/lib/markdown";
import { Typography } from "@/components/typography";

type PageProps = {
  params: { slug: string[] };
};

export default async function DocsPage({ params: { slug = [] } }: PageProps) {
  const pathName = slug.join("/");
  const docData = await getDocsForSlug(pathName);

  if (!docData) notFound();

  const { content } = docData;

  // Check if the current path matches a PDF configuration
  const pdfEntry = pdfConfig.find((pdf) => pdf.path === pathName);

  const renderContent = () => {
    if (pdfEntry) {
      return (
        <iframe
          src={pdfEntry.src}
          width="100%"
          height="800vh"
          title={pdfEntry.title}
        />
      );
    }
    return <div>{content}</div>;
  };

  return (
    <div className="flex items-start gap-10">
      <div className="flex-[4.5] pt-10">
        <DocsBreadcrumb paths={slug} />
        <Typography>
          {renderContent()}
          <Pagination pathname={pathName} />
        </Typography>
      </div>
      <Toc path={pathName} />
    </div>
  );
}

export async function generateMetadata({ params: { slug = [] } }: PageProps) {
  const pathName = slug.join("/");
  const docData = await getDocsForSlug(pathName);

  if (!docData) return null;

  const { frontmatter } = docData;

  return {
    title: frontmatter.title,
    description: frontmatter.description,
  };
}

export function generateStaticParams() {
  return page_routes.map((route) => ({
    slug: route.href.split("/").slice(1),
  }));
}
