import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    authors?: string[];
    tags?: string[];
  };
}

export const SEO = ({
  title = 'Default Site Title',
  description = 'Default description for your website',
  image = '/default-og-image.jpg',
  article
}: SEOProps) => {
  const { pathname } = useLocation();
  const siteUrl = window.location.origin;
  const fullUrl = `${siteUrl}${pathname}`;
  const type = article ? 'article' : 'website';
  const siteName = 'Your Site Name';

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={`${siteUrl}${image}`} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />

      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Helmet>
  );
};