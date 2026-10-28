import Link from "next/link";

import {
  documentGroups,
  getDocumentNavigation,
} from "../data/documentNavigation";
import {
  type DocumentId,
  documents,
  getDocumentRoute,
} from "../data/documents";

/**
 * Presents catalogue groups and the current document's breadcrumb trail.
 *
 * @param props - Current catalogue document identifier.
 * @throws When no usable navigation context exists for the document.
 *
 * @remarks
 * The current group starts expanded. Native disclosures provide access
 * to the other groups. The current document is marked with aria-current.
 *
 * Breadcrumbs express editorial location, not browser history or a
 * hierarchy inferred from URL segments.
 *
 * Reception is followed by the group's landing page when appropriate,
 * then the current document. Redundant landing entries are omitted,
 * and the current breadcrumb is text rather than a link to itself.
 *
 * Public paths come from the catalogue; Next Link handles the deployment
 * prefix. Navigation declarations must be validated separately.
 */
export function DocumentNavigation({ documentId }: { documentId: DocumentId }) {
  const current = documents[documentId];
  const navigation = getDocumentNavigation(documentId);

  if (!navigation) {
    throw new Error(`No navigation group contains "${documentId}".`);
  }

  return (
    <>
      <nav aria-label="Documentation">
        {documentGroups.map((group) => (
          <details key={group.id} open={group.documents.includes(documentId)}>
            <summary>{group.title}</summary>
            <ol>
              {group.documents.map((id) => (
                <li key={id}>
                  <Link
                    href={getDocumentRoute(documents[id])}
                    aria-current={id === documentId ? "page" : undefined}
                  >
                    {documents[id].title}
                  </Link>
                </li>
              ))}
            </ol>
          </details>
        ))}
      </nav>

      <nav aria-label="Breadcrumb">
        <ol>
          <li>
            {documentId === "overview" ? (
              <span aria-current="page">Reception</span>
            ) : (
              <Link href={getDocumentRoute(documents.overview)}>Reception</Link>
            )}
          </li>

          {documentId !== "overview" ? (
            <>
              {navigation.landing.id !== "overview" &&
              navigation.landing.id !== documentId ? (
                <li>
                  <Link href={getDocumentRoute(navigation.landing.document)}>
                    {navigation.group.title}
                  </Link>
                </li>
              ) : null}

              <li>
                <span aria-current="page">{current.title}</span>
              </li>
            </>
          ) : null}
        </ol>
      </nav>
    </>
  );
}

/**
 * Offers adjacent documents within the current reading group.
 *
 * @param props - Current catalogue document identifier.
 * @returns Neighbor links, or null when neither neighbor exists.
 * @throws When no usable navigation context exists for the document.
 *
 * @remarks
 * Follows the group's explicit reading order, not catalogue declaration
 * order, URL sorting, or browser history.
 *
 * Navigation never wraps or crosses group boundaries.
 * Missing neighbors are omitted rather than shown as disabled links.
 * Links expose their sequence relationship through rel="prev" or "next".
 *
 * Public paths come from the catalogue; Next Link handles the deployment
 * prefix.
 */
export function DocumentPagination({ documentId }: { documentId: DocumentId }) {
  const navigation = getDocumentNavigation(documentId);

  if (!navigation) {
    throw new Error(`No navigation group contains "${documentId}".`);
  }

  const { previous, next } = navigation;

  if (!previous && !next) return null;

  return (
    <nav aria-label="Reading sequence">
      <ul>
        {previous ? (
          <li>
            <Link href={getDocumentRoute(previous.document)} rel="prev">
              Previous: {previous.document.title}
            </Link>
          </li>
        ) : null}

        {next ? (
          <li>
            <Link href={getDocumentRoute(next.document)} rel="next">
              Next: {next.document.title}
            </Link>
          </li>
        ) : null}
      </ul>
    </nav>
  );
}
