


var READTHEDOCS_DATA = {
    "project": "mcforge",
    "version": "1.19.x",
    "language": "en",
    "programming_language": "java",
    "page": null,
    "theme": "readthedocs",
    "builder": "mkdocs",
    "docroot": "docs",
    "source_suffix": ".md",
    //"api_host": "https://readthedocs.org",
    "ad_free": false,
    "commit": [
        "cbab69558f99feaa20124677b47c8882af880cab"
    ],
    "global_analytics_code": "UA-17997319-1",
    "user_analytics_code": null,
    "proxied_static_path": "/_/static/",
    "proxied_api_host": "/_"
}

// Old variables
var doc_version = "1.19.x";
var doc_slug = "mcforge";
var page_name = "None";
var html_theme = "readthedocs";

// mkdocs_page_input_path is only defined on the RTD mkdocs theme but it isn't
// available on all pages (e.g. missing in search result)
if (typeof mkdocs_page_input_path !== "undefined") {
  READTHEDOCS_DATA["page"] = mkdocs_page_input_path.substr(
      0, mkdocs_page_input_path.lastIndexOf(READTHEDOCS_DATA.source_suffix));
}
