


var READTHEDOCS_DATA = {
    "project": "mcforge",
    "version": "1.13.x",
    "language": "en",
    "programming_language": "java",
    "page": null,
    "theme": "mkdocs",
    "builder": "mkdocs",
    "docroot": "docs",
    "source_suffix": ".md",
    "api_host": "https://readthedocs.org",
    //"proxied_api_host": "https://readthedocs.org",
    "ad_free": false,
    "commit": "b91e308826b6bd4c018183f733d08dac85b8698b",
    "global_analytics_code": "UA-17997319-1",
    "user_analytics_code": null
}

// Old variables
var doc_version = "1.13.x";
var doc_slug = "mcforge";
var page_name = "None";
var html_theme = "mkdocs";

// mkdocs_page_input_path is only defined on the RTD mkdocs theme but it isn't
// available on all pages (e.g. missing in search result)
if (typeof mkdocs_page_input_path !== "undefined") {
  READTHEDOCS_DATA["page"] = mkdocs_page_input_path.substr(
      0, mkdocs_page_input_path.lastIndexOf(READTHEDOCS_DATA.source_suffix));
}
