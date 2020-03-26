(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{357:function(e,a,t){"use strict";t.r(a);var s=t(8),i=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"comparison-to-alternatives"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#comparison-to-alternatives"}},[e._v("#")]),e._v(" Comparison to alternatives")]),e._v(" "),t("h2",{attrs:{id:"about-meilisearch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#about-meilisearch"}},[e._v("#")]),e._v(" About MeiliSearch")]),e._v(" "),t("p",[e._v("MeiliSearch has been designed to be a ready-to-go open source solution and deliver an intuitive and instantaneous search experience. As the amount of information available on the websites increases as time goes by, it is essential to provide users with the most relevant results. Since many closed source search engines and open source alternatives can be used, determining which one to install is critical and may not seem easy at first.")]),e._v(" "),t("p",[e._v("The present article covers a comparison of alternatives to MeiliSearch, i.e., available search technologies to be considered when planning to implement a search bar.")]),e._v(" "),t("h2",{attrs:{id:"comparisons"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#comparisons"}},[e._v("#")]),e._v(" Comparisons")]),e._v(" "),t("h3",{attrs:{id:"meilisearch-vs-elasticsearch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#meilisearch-vs-elasticsearch"}},[e._v("#")]),e._v(" MeiliSearch vs. Elasticsearch")]),e._v(" "),t("p",[e._v("Elasticsearch has been designed as a backend search engine and, although it is not at first suited for this purpose, is commonly used to build search bars for the end-users.\nUnlike Elasticsearch, which is a general search engine, MeiliSearch focuses on delivering a specific kind of features.")]),e._v(" "),t("p",[e._v("Elasticsearch can handle search through massive amounts of data and perform text analysis. In order to make it effective for end-user searching, you need to spend time understanding more about how Elasticsearch works internally to be able to customize and tailor it to fit your needs.\nMeiliSearch is intended to deliver performant instant search experiences aimed at end-users. However, processing complex queries or analyzing very large datasets is not possible.")]),e._v(" "),t("p",[e._v("Elasticsearch can sometimes be too slow if you want to provide a full instant search experience. Most of the time, it is significantly slower in returning search results compared to MeiliSearch.\nMeiliSearch is a perfect choice if you need a simple and easy tool to deploy a typo-tolerant search bar that provides a prefix searching capability, makes search intuitive for users, and returns them their results instantly with near-perfect relevance.")]),e._v(" "),t("h3",{attrs:{id:"meilisearch-vs-typesense"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#meilisearch-vs-typesense"}},[e._v("#")]),e._v(" MeiliSearch vs. Typesense")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://typesense.org/docs/0.11.1/guide/#ranking-relevance",target:"_blank",rel:"noopener noreferrer"}},[e._v("Typesense uses a default_sorting_field"),t("OutboundLink")],1),e._v(" on each document, it means that before indexing your documents you need to compute a relevancy score for Typesense to be able to sort them based on your needs.\nOn the other hand, "),t("RouterLink",{attrs:{to:"/guides/main_concepts/relevancy.html"}},[e._v("MeiliSearch uses a bucket sort")]),e._v(", which means that there is a default relevancy algorithm based on the proximity of words in the documents, the fields in which the words are found and the number of typos. And you can still add your own custom rules if you want to alter the default search behavior.")],1),e._v(" "),t("h3",{attrs:{id:"meilisearch-vs-algolia"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#meilisearch-vs-algolia"}},[e._v("#")]),e._v(" MeiliSearch vs. Algolia")]),e._v(" "),t("p",[e._v("MeiliSearch was inspired by Algolia's product and the algorithms behind it. We indeed studied most of the algorithms and data structures described in their blog posts in order to implement our own. MeiliSearch is thus a new search engine based on the work of Algolia and recent research papers.\nIt provides similar features and reaches the same level of relevance just as quickly as its predecessor.")]),e._v(" "),t("p",[e._v("Contrary to Algolia, MeiliSearch is open-source and written in Rust, a systems-level and modern programming language, that allows to rapidly build features. Rust also enables portability and flexibility, which makes the deployment of our search engines inside Virtual Machines, containers, or even Lambda@Edge, a seamless operation.")]),e._v(" "),t("p",[e._v("One of Algolia's major assets is the robust worldwide infrastructure that they offer to their customers.\nMeiliSearch currently delivers a search engine and is not in a position to provide a competitive infrastructure yet. However, we aim it to be much more simple to deploy and maintain than Algolia's.")]),e._v(" "),t("h2",{attrs:{id:"a-quick-look-at-the-search-engine-landscape"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#a-quick-look-at-the-search-engine-landscape"}},[e._v("#")]),e._v(" A Quick Look at the Search Engine Landscape")]),e._v(" "),t("h3",{attrs:{id:"open-source"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#open-source"}},[e._v("#")]),e._v(" Open Source")]),e._v(" "),t("h4",{attrs:{id:"lucene"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lucene"}},[e._v("#")]),e._v(" Lucene")]),e._v(" "),t("p",[e._v("Apache Lucene is a free and open-source search library, written in Java, used for the full-text indexing and search of documents. This project was first created in 1999 by Doug Cutting, who had previously written search engines at Xerox's Palo Alto Research Center (PARC) and Apple. Since Lucene has been developed to build web search applications such as Google, you can see that DuckDuckGo still uses it for some specific searches.")]),e._v(" "),t("p",[e._v("Lucene has since been divided into several projects:")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Lucene itself")]),e._v(": the full-text search library.")]),e._v(" "),t("li",[t("strong",[e._v("Solr")]),e._v(": an enterprise search server with a powerful REST API.")]),e._v(" "),t("li",[t("strong",[e._v("Nutch")]),e._v(": an extensible and scalable web crawler relying on Apache Hadoop.")])]),e._v(" "),t("p",[e._v("Since Lucene is the technology behind many open source or closed source search engines, it is considered as the reference search library.")]),e._v(" "),t("h4",{attrs:{id:"sonic"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sonic"}},[e._v("#")]),e._v(" Sonic")]),e._v(" "),t("p",[e._v("Sonic is a lightweight and schema-less search index server written in Rust. Sonic cannot be considered as an out-of-the-box solution and, compared to MeiliSearch, it does not ensure relevancy ranking. Indeed, it does not store any documents but is comprised of an inverted index with a Levenshtein automaton, which means an application querying Sonic has to retrieve the search results from an external database using the IDs that are returned and then apply some relevancy ranking.\nIts ability to run on a few MBs of RAM makes it a minimalist and resource-efficient alternative to database tools that can be too heavyweight to scale.")]),e._v(" "),t("h4",{attrs:{id:"typesense"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#typesense"}},[e._v("#")]),e._v(" Typesense")]),e._v(" "),t("p",[e._v("Another simple search engine is Typesense, which has been designed and optimized for speed. Particular attention has been given to ease-of-use. Thus, Typesense aims to be simple to set-up and focus on developer productivity and experience by providing a clean API. It is best suited for light projects.")]),e._v(" "),t("h4",{attrs:{id:"lucene-derivatives"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lucene-derivatives"}},[e._v("#")]),e._v(" Lucene derivatives")]),e._v(" "),t("h4",{attrs:{id:"lucene-solr"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lucene-solr"}},[e._v("#")]),e._v(" Lucene-Solr")]),e._v(" "),t("p",[e._v("Solr is a subproject of Apache Lucene, created in 2004 by Yonik Seeley, and is today one of the most widely used search engines available worldwide. Solr is a search platform, written in Java, and built on top of Lucene. In other words, Solr is an HTTP wrapper around Lucene's Java API, meaning you can leverage all the features of Lucene by using it. In addition, Solr server is combined with Solr Cloud, providing distributed indexing and searching capabilities, thus ensuring high availability and scalability. Data is shared but also automatically replicated.\nFurthermore, Solr is not only a search engine; it is often used as a document-structured NoSQL database. Documents are stored in collections, which can be comparable to tables in a relational database.")]),e._v(" "),t("p",[e._v("Due to its extensible plugin architecture and customizable features, Solr is a search engine with an endless number of use cases even though, since it can index and search documents and email attachments, it is specifically popular for enterprise search.")]),e._v(" "),t("h4",{attrs:{id:"bleve-tantivy"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bleve-tantivy"}},[e._v("#")]),e._v(" Bleve & Tantivy")]),e._v(" "),t("p",[e._v("Bleve and Tantivy are search engine projects, respectively written in Golang and Rust, inspired by Apache Lucene and its algorithms (e.g., tf-idf, short for term frequency-inverse document frequency). Such as Lucene, both are libraries to be used for any search project; however they are not ready-to-use APIs.")]),e._v(" "),t("h4",{attrs:{id:"elasticsearch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch"}},[e._v("#")]),e._v(" Elasticsearch")]),e._v(" "),t("p",[e._v('Elasticsearch is a search engine based on the Lucene library and is most popular for full-text search. It provides a REST API accessed by JSON over HTTP. One of its key options, called index sharding, gives you the ability to divide indexes into physical spaces in order to increase performance and ensure high availability. Both Lucene and Elasticsearch have been designed for processing high-volume data streams, analyzing logs, and running complex queries. You can perform operations and analysis (e.g., calculate the average age of all users named "Thomas") on documents that match a specified query.')]),e._v(" "),t("p",[e._v("Today, Lucene and Elasticsearch are dominant players in the open-source search engine landscape. They both are solid solutions for a lot of different use cases in search, and also for building your own recommendation engine. They are good general products, but they require to be configured properly to get similar results to those of MeiliSearch or Algolia.")]),e._v(" "),t("h3",{attrs:{id:"closed-source"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#closed-source"}},[e._v("#")]),e._v(" Closed Source")]),e._v(" "),t("h4",{attrs:{id:"algolia"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#algolia"}},[e._v("#")]),e._v(" Algolia")]),e._v(" "),t("p",[e._v("Algolia is a company providing a search engine on a SaaS model. Its software is closed source. In its early stages, Algolia offered mobile search engines that could be embedded in apps, facing the challenge of implementing the search algorithms from scratch. From the very beginning, the decision was made to build a search engine directly dedicated to the end-users, i.e., implementing search within mobile apps or websites.\nAlgolia successfully demonstrated over the past few years how critical tolerating typos are in order to improve the users' experience, and in the same way, its impact on reducing bounce rate and increasing conversion.")]),e._v(" "),t("p",[e._v("Apart from Algolia, a wide choice of SaaS products are available on the Search Engine Market. Most of them use Elasticsearch and fine-tune its settings in order to have a custom and personalized solution.")]),e._v(" "),t("h4",{attrs:{id:"swiftype"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#swiftype"}},[e._v("#")]),e._v(" Swiftype")]),e._v(" "),t("p",[e._v("Swiftype is a search service provider specialized in website search and analytics. Swiftype was founded in 2012 by Matt Riley and Quin Hoxie, and is now owned by Elastic since November 2017. It is an end-to-end solution built on top of Elasticsearch, meaning it has the ability to leverage the Elastic Stack.")]),e._v(" "),t("h4",{attrs:{id:"doofinder"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#doofinder"}},[e._v("#")]),e._v(" Doofinder")]),e._v(" "),t("p",[e._v("Doofinder is a paid on-site search service that is developed to integrate into any website with very little configuration. Doofinder is used by online stores to increase their sales, aiming to facilitate the purchase process.")]),e._v(" "),t("h2",{attrs:{id:"conclusions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#conclusions"}},[e._v("#")]),e._v(" Conclusions")]),e._v(" "),t("p",[e._v("Each Search solution fits best with the constraints of a particular use case. Since each type of search engine offers a unique set of features, it wouldn't be easy nor relevant to compare their performance. For instance, it wouldn't be fair to make a comparison of speed between Elasticsearch and Algolia over a product-based database. The same goes for a very large full text-based database.")]),e._v(" "),t("p",[e._v("We cannot, therefore, compare ourselves with Lucene-based or other search engines targeted to specific tasks.")]),e._v(" "),t("p",[e._v("In the particular use case we cover, the most similar solutions to MeiliSearch are Algolia and Typesense. The three of them are search-as-you-type relevant search engines.")]),e._v(" "),t("p",[e._v("Typesense is a great tool but is not recommended for achieving a lot of operations with minimal configuration. "),t("br"),e._v("\nWhile Algolia offers the most advanced and powerful search features, this efficiency comes with an expensive pricing. Moreover, their service is marketed to big companies.")]),e._v(" "),t("p",[e._v("MeiliSearch is dedicated to all types of developers. Our goal is to deliver a developer-friendly tool, easy to install, and to deploy. Because providing an out-of-the-box awesome search experience for the end-users matters to us, we want to give everyone access to the best search experiences out there with minimum effort and without requiring any financial resources.")]),e._v(" "),t("p",[e._v("Usually, when a developer is looking for a search tool to integrate into their application, they will go for ElasticSearch or less effective choices. Even if Elasticsearch is not best suited for this use case, it remains a great open-source solution. However, it requires technical know-how to execute advanced features and hence more time to customize it to your business.")]),e._v(" "),t("p",[e._v("We aim to become the default solution for developers.")])])}),[],!1,null,null,null);a.default=i.exports}}]);