<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes" />
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <style type="text/css">
          body {
            font-family: Helvetica, Arial, sans-serif;
            font-size: 13px;
            color: #666;
          }
          h1 {
            color: #E0E0E0;
          }
          table {
            border: 1px solid #E0E0E0;
            border-collapse: collapse;
            margin-bottom: 1em;
            width: 100%;
          }
          table tr.odd {
            background-color: #EEE;
          }
          table tbody tr:hover {
            background-color: #CCC;
          }
          body>div {
            width: 90%;
            margin: 0 auto;
          }
          .center {
            text-align: center;
          }
          a {
            color: #000;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
          td, th {
            border-right: 1px solid #E0E0E0;
            text-align: left;
            font-size: 11px;
            padding: 5px;
          }
          thead th {
            border-bottom: 1px solid #DDD;
          }
        </style>
      </head>
      <body>
        <div>
          <h1>XML Sitemap</h1>
          <xsl:if test="count(sitemap:sitemapindex/sitemap:sitemap) &gt; 0">
            <p>
              This XML Sitemap Index file contains <xsl:value-of select="count(sitemap:sitemapindex/sitemap:sitemap)"/> sitemap.
            </p>
            <table>
              <thead>
                <tr>
                  <th width="88%" valign="bottom">URL</th>
                  <th width="12%" valign="bottom">Last modified</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap">
                  <xsl:variable name="css-class">
                    <xsl:choose>
                      <xsl:when test="position() mod 2 = 0">even</xsl:when>
                      <xsl:otherwise>odd</xsl:otherwise>
                    </xsl:choose>
                  </xsl:variable>
                  <tr class="{$css-class}">
                    <td>
                      <xsl:variable name="sitemap_url">
                        <xsl:value-of select="sitemap:loc"/>
                      </xsl:variable>
                      <a href="{$sitemap_url}"><xsl:value-of select="sitemap:loc"/></a>
                    </td>
                    <td class="center">
                      <xsl:value-of select="concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)),concat(' ', substring(sitemap:lastmod,20,6)))"/>
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </xsl:if>
          <xsl:if test="count(sitemap:urlset/sitemap:url) &gt; 0">
            <p>
              This XML Sitemap file contains <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> URLs.
            </p>
            <table>
              <thead>
                <tr>
                  <th width="83%" valign="bottom">URL</th>
                  <th width="5%" valign="bottom">Priority</th>
                  <th width="12%" valign="bottom">Last modified</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:urlset/sitemap:url">
                  <xsl:variable name="css-class">
                    <xsl:choose>
                      <xsl:when test="position() mod 2 = 0">even</xsl:when>
                      <xsl:otherwise>odd</xsl:otherwise>
                    </xsl:choose>
                  </xsl:variable>
                  <tr class="{$css-class}">
                    <td>
                      <xsl:variable name="item_url">
                        <xsl:value-of select="sitemap:loc" />
                      </xsl:variable>
                      <a href="{$item_url}" target="_blank">
                        <xsl:value-of select="sitemap:loc" />
                      </a>
                    </td>
                    <td class="center">
                      <xsl:value-of select="sitemap:priority" />
                    </td>
                    <td class="center">
                      <xsl:value-of select="concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)),concat(' ', substring(sitemap:lastmod,20,6)))" />
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </xsl:if>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>