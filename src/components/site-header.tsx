import Link from "next/link";

export function SiteHeader() {
  return (
    <>
      <header className="siteHeaderWrap">
        <div className="siteHeaderInner">
          <Link className="siteBrand" href="/">
            Home<span>Kitchen</span>
          </Link>

          <div className="siteSearch">
            <input placeholder="Search for products..." type="text" />
            <button aria-label="Search" type="button">
              <svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </button>
          </div>

          <div className="headerActions">
            <Link className="headerAction" href="/collections">
              <svg fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="22">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              <span className="headerActionBadge">0</span>
            </Link>
            <Link className="headerAction" href="/collections">
              <svg fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="22">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              <span className="headerActionBadge">0</span>
            </Link>
          </div>
        </div>
      </header>
      <nav className="siteNavWrap">
        <div className="siteNav">
          <Link href="/">Home</Link>
          <Link href="/collections">Collections</Link>
          <Link href="/collections/cookware">Cookware</Link>
          <Link href="/collections/appliances">Appliances</Link>
          <Link href="/collections/dining">Dining</Link>
          <Link href="/collections/storage">Storage</Link>
          <Link href="/collections/tools">Tools</Link>
        </div>
      </nav>
    </>
  );
}
