# All settings

The `/settings` route allows you to customize search settings for the given index. It is possible to modify all of an index's settings at once using the [`update settings` endpoint](#update-settings), or modify each one individually using the child routes.

These are the reference pages for the child routes:

- [Displayed attributes](/reference/api/displayed_attributes.md)
- [Distinct attribute](/reference/api/distinct_attribute.md)
- [Faceting](/reference/api/faceting.md)
- [Filterable attributes](/reference/api/filterable_attributes.md)
- [Pagination](/reference/api/pagination.md)
- [Ranking rules](/reference/api/ranking_rules.md)
- [Searchable attributes](/reference/api/searchable_attributes.md)
- [Sortable attributes](/reference/api/sortable_attributes.md)
- [Stop-words](/reference/api/stop_words.md)
- [Synonyms](/reference/api/synonyms.md)
- [Typo tolerance](/reference/api/typo_tolerance.md)

To learn more about settings, refer to our [dedicated guide.](/learn/configuration/settings.md)

::: warning
When you update a setting, you overwrite its default value. Use the `DELETE` route to reset any setting to its original value.
:::

## Settings object

The settings object allows you to customize index level settings for your Meilisearch instance.

```json
{
    "displayedAttributes":[
        "*"
    ],
    "searchableAttributes":[
        "*"
    ],
    "filterableAttributes":[],
    "sortableAttributes":[],
    "rankingRules":
    [
        "words",
        "typo",
        "proximity",
        "attribute",
        "sort",
        "exactness"
    ],
    "stopWords":[],
    "synonyms":{},
    "distinctAttribute":null,
    "typoTolerance":{
        "enabled":true,
        "minWordSizeForTypos":{
            "oneTypo":5,
            "twoTypos":9
            },
        "disableOnWords":[],
        "disableOnAttributes":[]
        },
    "faceting":{
        "maxValuesPerFacet":100
        },
    "pagination":{
        "maxTotalHits":1000
        }
}
```

### `displayedAttributes`

**Type**: Array of strings

**Description**: Fields displayed in the returned documents

**Default value**: All attributes

**Dedicated API route**: [`/settings/displayed-attributes`](/reference/api/displayed_attributes.md)

**Dedicated guide**:

### `distinctAttribute`

**Type**: String

**Description**: Search returns documents with distinct (different) values of the given field

**Default value**: `null`

**Dedicated API route**: [`/settings/distinct-attribute`](/reference/api/distinct_attribute.md)

**Dedicated guide**:

### `faceting`

**Type**: Object

**Description**: Faceting settings

| Name                | Type    | Description                                            | Default value |
|---------------------|---------|--------------------------------------------------------|---------------|
| `maxValuesPerFacet` | Integer | Maximum number of facet values returned for each facet | `100`         |

```json
{
  "maxValuesPerFacet": 100
}
```

**Dedicated guide**:

**Dedicated API route**: [`/settings/faceting`](/reference/api/faceting.md)

### `filterableAttributes`

**Type**: Array of strings

**Description**: Attributes to use as filters and facets

**Default value**: Empty

**Dedicated API route**: [`/settings/filterable-attributes`](/reference/api/filterable_attributes.md)

**Dedicated guide**:

### `pagination`

**Type**: Object

**Description**: Pagination settings

| Name           | Type       | Description                                          | Default value |
|----------------|------------|------------------------------------------------------|---------------|
| `maxTotalHits` | Integer    | The maximum number of results Meilisearch can return | `1000`        |

```json
{
  "maxTotalHits": 1000
}
```

**Dedicated API route**: [`/settings/pagination`](/reference/api/pagination.md)

**Dedicated guide**:

### `rankingRules`

**Type**: Array

**Description**: An array that contains ranking rules in order of importance

**Default value**:

```json
[
  "words",
  "typo",
  "proximity",
  "attribute",
  "sort",
  "exactness"
]
```

**Dedicated API route**: [`/settings/ranking-rules`](/reference/api/ranking_rules.md)

**Dedicated guide**:

### `searchableAttributes`

**Type**: Array of strings

**Description**: Fields in which to search for matching query words sorted by order of importance

**Default value**: All attributes

**Dedicated API route**: [`/settings/searchable-attributes`](/reference/api/searchable_attributes.md)

**Dedicated guide**:

### `sortableAttributes`

**Type**: Array of strings

**Description**: Attributes to use when sorting search results

**Default value**: Empty

**Dedicated API route**: [`/settings/sortable-attributes`](/reference/api/sortable_attributes.md)

**Dedicated guide**:

### `stopWords`

**Type**: Array of strings

**Description**: List of words ignored by Meilisearch when present in search queries

**Default value**: Empty

**Dedicated API route**: [`/settings/stop-words`](/reference/api/stop_words.md)

**Dedicated guide**:

### `synonyms`

**Type**: Object

**Description**: List of associated words treated similarly

**Default value**: Empty

**Dedicated API route**: [`/settings/synonyms`](/reference/api/synonyms.md)

**Dedicated guide**:

### `typoTolerance`

**Type**: Object

**Description**: Typo tolerance settings

#### `enabled`

**Type**: Boolean

**Description**: Whether typo tolerance is enabled or not

**Default value**: `true`

#### `minWordSizeForTypos`

**Type**: Object

**Description**: The minimum word length for tolerating 1 or 2 typos

| Name       | Description                                                                       | Type    | Default value |
|------------|-----------------------------------------------------------------------------------|---------|---------------|
| `oneTypo`  | The minimum word size for accepting 1 typo; must be between `0` and `twoTypos`    | integer | `5`           |
| `twoTypos` | The minimum word size for accepting 2 typos; must be between `oneTypo` and `255`  | integer | `9`           |

### `disableOnWords`

**Type**: Array of strings

**Description**: An array of words for which the typo tolerance feature is disabled

**Default value**: Empty

### `disableOnAttributes`

**Type**: Array of strings

**Description**: An array of attributes for which the typo tolerance feature is disabled

**Default value**: Empty

```json
{
    "enabled":true,
    "minWordSizeForTypos":{
        "oneTypo":5,
        "twoTypos":9
        },
    "disableOnWords":[],
    "disableOnAttributes":[]
}
```

**Dedicated API route**: [`/settings/typo-tolerance`](/reference/api/typo_tolerance.md)

### Get settings

<RouteHighlighter method="GET" route="/indexes/{index_uid}/settings" />

Get the settings of an index. The index [`uid`](/learn/core_concepts/indexes.md#index-uid) is required.

[Learn more about the settings.](/learn/configuration/settings.md)

### Response body

| Variable                   | Type      | Description                                                                                | Default value                                                                                |
| -------------------------- | --------- | ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------- |
| **`displayedAttributes`**  | [Strings] | Fields displayed in the returned documents                                                 | `["*"]` (all attributes)                                                                     |
| **`distinctAttribute`**    | String    | Search returns documents with distinct (different) values of the given field               | `null`                                                                                       |
| **`faceting`**             | Object    | Faceting settings                                                                          | `{}`                                                                                         |
| **`filterableAttributes`** | [Strings] | Attributes to use as [filters and facets](/learn/advanced/filtering_and_faceted_search.md) | `[]`                                                                                         |
| **`pagination`**           | Object    | Pagination settings                                                                        | `{}`                                                                                         |
| **`rankingRules`**         | [Strings] | List of ranking rules sorted by order of importance                                        | [A list of ordered built-in ranking rules](/learn/core_concepts/relevancy.md#built-in-rules) |
| **`searchableAttributes`** | [Strings] | Fields in which to search for matching query words sorted by order of importance           | `["*"]` (all attributes)                                                                     |
| **`sortableAttributes`**   | [Strings] | Attributes to use when [sorting](/learn/advanced/sorting.md) search results                | `[]`                                                                                         |
| **`stopWords`**            | [Strings] | List of words ignored by Meilisearch when present in search queries                        | `[]`                                                                                         |
| **`synonyms`**             | Object    | List of associated words treated similarly                                                 | `{}`                                                                                         |
| **`typoTolerance`**        | Object    | Typo tolerance settings                                                                    | `{}`                                                                                         |

[Learn more about the settings in this guide.](/learn/configuration/settings.md)

### Example

<CodeSamples id="get_settings_1" />

#### Response: `200 Ok`

List the settings.

```json
{
  "rankingRules": [
    "typo",
    "words",
    "proximity",
    "attribute",
    "words",
    "exactness",
    "desc(release_date)"
  ],
  "filterableAttributes": [
    "genres"
  ],
  "distinctAttribute": null,
  "searchableAttributes": [
    "title",
    "overview",
    "genres"
  ],
  "displayedAttributes": [
    "title",
    "overview",
    "genres",
    "release_date"
  ],
  "stopWords": null,
  "synonyms": {
    "wolverine": [
      "xmen",
      "logan"
    ],
    "logan": [
      "wolverine",
      "xmen"
    ]
  },
  "typoTolerance": {
    "enabled": true, 
    "minWordSizeForTypos": {
        "oneTypo": 5,
        "twoTypos": 10
      },
    "disableOnWords": [],
    "disableOnAttributes": []
  },
  "pagination": {
    "maxTotalHits": 1000
  },
  "faceting": {
    "maxValuesPerFacet": 100
  }
}
```

### Update settings

<RouteHighlighter method="PATCH" route="/indexes/{index_uid}/settings" />

Update the settings of an index. The index [`uid`](/learn/core_concepts/indexes.md#index-uid) is required.

Passing `null` to an index setting will reset it to its default value.

Updates in the settings route are **partial**. This means that any parameters not provided in the body will be left unchanged.

If the provided index does not exist, it will be created.

[Learn more about the settings in this guide.](/learn/configuration/settings.md)

### Body

| Variable                   | Type      | Description                                                                                | Default value                                                                                |
| -------------------------- | --------- | ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------- |
| **`displayedAttributes`**  | [Strings] | Fields displayed in the returned documents                                                 | `["*"]` (all attributes)                                                                     |
| **`distinctAttribute`**    | String    | Search returns documents with distinct (different) values of the given field               | `null`                                                                                       |
| **`faceting`**             | Object    | Faceting settings                                                                          | `{}`                                                                                         |
| **`filterableAttributes`** | [Strings] | Attributes to use as [filters and facets](/learn/advanced/filtering_and_faceted_search.md) | `[]`                                                                                         |
| **`pagination`**           | Object    | Pagination settings                                                                        | `{}`                                                                                         |
| **`rankingRules`**         | [Strings] | List of ranking rules sorted by order of importance                                        | [A list of ordered built-in ranking rules](/learn/core_concepts/relevancy.md#built-in-rules) |
| **`searchableAttributes`** | [Strings] | Fields in which to search for matching query words sorted by order of importance           | `["*"]` (all attributes)                                                                     |
| **`sortableAttributes`**   | [Strings] | Attributes to use when [sorting](/learn/advanced/sorting.md) search results                | `[]`                                                                                         |
| **`stopWords`**            | [Strings] | List of words ignored by Meilisearch when present in search queries                        | `[]`                                                                                         |
| **`synonyms`**             | Object    | List of associated words treated similarly                                                 | `{}`                                                                                         |
| **`typoTolerance`**        | Object    | Typo tolerance settings                                                                    | `{}`                                                                                         |

### Example

<CodeSamples id="update_settings_1" />

#### Response: `202 Accepted`

```json
{
    "taskUid": 1,
    "indexUid": "movies",
    "status": "enqueued",
    "type": "settingsUpdate",
    "enqueuedAt": "2021-08-11T09:25:53.000000Z"
}
```

You can use this `taskUid` to get more details on [the status of the task](/reference/api/tasks.md#get-one-task).

### Reset settings

<RouteHighlighter method="DELETE" route="/indexes/{index_uid}/settings"/>

Reset the settings of an index. The index [`uid`](/learn/core_concepts/indexes.md#index-uid) is required.

All settings will be reset to their default value.

| Variable                   | Type      | Description                                                                                | Default value                                                                                |
| -------------------------- | --------- | ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------- |
| **`displayedAttributes`**  | [Strings] | Fields displayed in the returned documents                                                 | `["*"]` (all attributes)                                                                     |
| **`distinctAttribute`**    | String    | Search returns documents with distinct (different) values of the given field               | `null`                                                                                       |
| **`faceting`**             | Object    | Faceting settings                                                                          | `{}`                                                                                         |
| **`filterableAttributes`** | [Strings] | Attributes to use as [filters and facets](/learn/advanced/filtering_and_faceted_search.md) | `[]`                                                                                         |
| **`pagination`**           | Object    | Pagination settings                                                                        | `{}`                                                                                         |
| **`rankingRules`**         | [Strings] | List of ranking rules sorted by order of importance                                        | [A list of ordered built-in ranking rules](/learn/core_concepts/relevancy.md#built-in-rules) |
| **`searchableAttributes`** | [Strings] | Fields in which to search for matching query words sorted by order of importance           | `["*"]` (all attributes)                                                                     |
| **`sortableAttributes`**   | [Strings] | Attributes to use when [sorting](/learn/advanced/sorting.md) search results                | `[]`                                                                                         |
| **`stopWords`**            | [Strings] | List of words ignored by Meilisearch when present in search queries                        | `[]`                                                                                         |
| **`synonyms`**             | Object    | List of associated words treated similarly                                                 | `{}`                                                                                         |
| **`typoTolerance`**        | Object    | Typo tolerance settings                                                                    | `{}`                                                                                         |
[Learn more about the settings](/learn/configuration/settings.md).

#### Example

<CodeSamples id="reset_settings_1" />

#### Response: `202 Accepted`

```json
{
    "taskUid": 1,
    "indexUid": "movies",
    "status": "enqueued",
    "type": "settingsUpdate",
    "enqueuedAt": "2021-08-11T09:25:53.000000Z"
}
```

You can use this `taskUid` to get more details on [the status of the task](/reference/api/tasks.md#get-one-task).

## Displayed attributes

_Child route of the [settings route](/reference/api/settings.md)._

The fields whose attributes are added to the displayed-attributes list are **displayed in each matching document**.
By default, all fields are considered to be `displayedAttributes`. This behavior is represented by the `*` in the settings. Setting `displayedAttributes` to an empty array `[]` will reset the setting to its default value.

Displayed attributes can also be updated directly through the [global settings route](/reference/api/settings.md#update-settings) along with the other settings.

To learn more about displayed attributes, refer to our [dedicated guide](/learn/configuration/displayed_searchable_attributes.md#displayed-fields).

::: warning
Updating the settings means overwriting the default settings of Meilisearch. You can reset to default values using the `DELETE` routes.
:::

### Get displayed attributes

<RouteHighlighter method="GET" route="/indexes/{index_uid}/settings/displayed-attributes" />

Get the [displayed attributes](/learn/configuration/settings.md#displayed-attributes) of an index. The index [`uid`](/learn/core_concepts/indexes.md#index-uid) is required.

#### Example

<CodeSamples id="get_displayed_attributes_1"/>

#### Response: `200 Ok`

List the settings.

```json
[
  "title",
  "overview",
  "genres",
  "release_date.year"
]
```

### Update displayed attributes

<RouteHighlighter method="PUT" route="/indexes/{index_uid}/settings/displayed-attributes" />

Update the [displayed attributes](/learn/configuration/settings.md#displayed-attributes) of an index. The index [`uid`](/learn/core_concepts/indexes.md#index-uid) is required.

If an attribute contains an object, you can use dot notation to specify one or more of its keys, e.g., `"displayedAttributes": ["release_date.year"]`.

::: note
`displayedAttributes` only impacts search results. It has no effect on other methods of retrieving or copying documents, such as the [GET documents endpoint](/reference/api/documents.md#get-documents), [dumps](/learn/advanced/dumps.md), or [snapshots](/learn/advanced/snapshots.md).
:::

#### Body

An array of strings that contains attributes of an index to display.

[More information about the body](/learn/configuration/settings.md#displayed-attributes).

#### Example

<CodeSamples id="update_displayed_attributes_1"/>

#### Response: `202 Accepted`

```json
{
    "taskUid": 1,
    "indexUid": "movies",
    "status": "enqueued",
    "type": "settingsUpdate",
    "enqueuedAt": "2021-08-11T09:25:53.000000Z"
}
```

You can use this `taskUid` to get more details on [the status of the task](/reference/api/tasks.md#get-one-task).

### Reset displayed attributes

<RouteHighlighter method="DELETE" route="/indexes/{index_uid}/settings/displayed-attributes"/>

Reset the [displayed attributes](/learn/configuration/settings.md#displayed-attributes) of the index to the default value. The index [`uid`](/learn/core_concepts/indexes.md#index-uid) is required.

#### Default value

All attributes found in the documents added to the index.

#### Example

<CodeSamples id="reset_displayed_attributes_1"/>

#### Response: `202 Accepted`

```json
{
    "taskUid": 1,
    "indexUid": "movies",
    "status": "enqueued",
    "type": "settingsUpdate",
    "enqueuedAt": "2021-08-11T09:25:53.000000Z"
}
```

You can use this `taskUid` to get more details on [the status of the task](/reference/api/tasks.md#get-one-task).

## Distinct attribute

_Child route of the [settings route](/reference/api/settings.md)._

[Distinct attribute](/learn/configuration/distinct.md) is a field whose value will always be **unique** in the returned documents.

Distinct attribute can also be updated directly through the [global settings route](/reference/api/settings.md#update-settings) along with the other settings.

To learn more about distinct attributes, refer to our [dedicated guide](/learn/configuration/settings.md#distinct-attribute).

::: warning
Updating the settings means overwriting the default settings of Meilisearch. You can reset to default values using the `DELETE` routes.
:::

### Get distinct attribute

<RouteHighlighter method="GET" route="/indexes/{index_uid}/settings/distinct-attribute" />

Get the [distinct attribute](/learn/configuration/settings.md#distinct-attribute) field of an index. The index [`uid`](/learn/core_concepts/indexes.md#index-uid) is required.

### Example

<CodeSamples id="get_distinct_attribute_1" />

#### Response: `200 Ok`

```json
"skuid"
```

### Update distinct attribute

<RouteHighlighter method="PUT" route="/indexes/{index_uid}/settings/distinct-attribute" />

Update the [distinct attribute](/learn/configuration/settings.md#distinct-attribute) field of an index. This will re-index all documents in the index. The index [`uid`](/learn/core_concepts/indexes.md#index-uid) is required.

If an attribute contains an object, you can use dot notation to set one or more of its keys as a value for this setting, e.g., `"distinctAttribute": "product.skuid"`.

#### Body

A String: the field name.

[More information about the body](/learn/configuration/settings.md#distinct-attribute).

::: warning
If the field does not exist, no error will be thrown.
:::

### Example

<CodeSamples id="update_distinct_attribute_1" />

#### Response: `202 Accepted`

```json
{
    "taskUid": 1,
    "indexUid": "movies",
    "status": "enqueued",
    "type": "settingsUpdate",
    "enqueuedAt": "2021-08-11T09:25:53.000000Z"
}
```

You can use this `taskUid` to get more details on [the status of the task](/reference/api/tasks.md#get-one-task).

### Reset distinct attribute

<RouteHighlighter method="DELETE" route="/indexes/{index_uid}/settings/distinct-attribute"/>

Reset the [distinct attribute](/learn/configuration/settings.md#distinct-attribute) field of an index to its default value. The index [`uid`](/learn/core_concepts/indexes.md#index-uid) is required.

**Default value**: `null`

#### Example

<CodeSamples id="reset_distinct_attribute_1" />

#### Response: `202 Accepted`

```json
{
    "taskUid": 1,
    "indexUid": "movies",
    "status": "enqueued",
    "type": "settingsUpdate",
    "enqueuedAt": "2021-08-11T09:25:53.000000Z"
}
```

You can use this `taskUid` to get more details on [the status of the task](/reference/api/tasks.md#get-one-task).

## Faceting

_Child route of the [settings route](/reference/api/settings.md)._

This route allows you to configure the faceting settings for an index.

Faceting settings can also be updated directly through the [global settings route](/reference/api/settings.md#update-settings) along with the other settings.

To learn more about filtering and faceting, refer to our [dedicated guide](/learn/advanced/filtering_and_faceted_search.md).

::: warning
Updating the settings means overwriting the default settings of Meilisearch. You can reset to default values using the `DELETE` routes.
:::

### Get faceting settings

<RouteHighlighter method="GET" route="/indexes/{index_uid}/settings/faceting"/>

Get the faceting settings of an index. The index [`uid`](/learn/core_concepts/indexes.md#index-uid) is required.

### Example

<CodeSamples id="get_faceting_settings_1" />

#### Response: `200 OK`

```json
{
  "maxValuesPerFacet": 100
}
```

### Returned fields

#### `maxValuesPerFacet`

Maximum number of facet values returned for each facet.

### Update faceting settings

<RouteHighlighter method="PATCH" route="/indexes/{index_uid}/settings/faceting"/>

Partially update the faceting settings for an index. The index [`uid`](/learn/core_concepts/indexes.md#index-uid) is required.

### Body

#### `maxValuesPerFacet`

**Type:** integer
**Default value:** `100`

Configure the maximum number of facet values returned for each facet. Values are sorted in ascending lexicographical order.

For example, suppose a query's search results contain a total of three values for a `colors` facet: `blue`, `green`, and `red`. If you set `maxValuesPerFacet` to `2`, Meilisearch will only return `blue` and `green` in the response body's `facetDistribution` object.

::: note
Setting `maxValuesPerFacet` to a high value might negatively impact performance.
:::

#### Example

<CodeSamples id="update_faceting_settings_1" />

#### Response: `202 Accepted`

```json
{
  "taskUid": 1,
  "indexUid": "books",
  "status": "enqueued",
  "type": "settingsUpdate",
  "enqueuedAt": "2022-04-14T20:56:44.991039Z"
}
```

You can use the returned `taskUid` to get more details on [the status of the task](/reference/api/tasks.md#get-one-task).

### Reset faceting settings

Reset an index's faceting settings to their default value. The index [`uid`](/learn/core_concepts/indexes.md#index-uid) is required.

#### Example

<CodeSamples id="reset_faceting_settings_1" />

#### Response: `200 OK`

```json
{
  "taskUid": 1,
  "indexUid": "books",
  "status": "enqueued",
  "type": "settingsUpdate",
  "enqueuedAt": "2022-04-14T20:53:32.863107Z"
}
```

You can use the returned `taskUid` to get more details on [the status of the task](/reference/api/tasks.md#get-one-task).

## Filterable attributes

_Child route of the [settings route](/reference/api/settings.md)._

Filterable attributes can also be updated through the [global settings route](/reference/api/settings.md#update-settings).

Attributes that can be used as filters for filtering and faceted search. To learn more about filterable attributes, refer to our [dedicated guide](/learn/advanced/filtering_and_faceted_search.md).

::: warning
Updating the settings means overwriting the default settings of Meilisearch. You can reset to default values using the `DELETE` routes.
:::

### Get filterable attributes

<RouteHighlighter method="GET" route="/indexes/{index_uid}/settings/filterable-attributes" />

Get an index's [`filterableAttributes`](/learn/advanced/filtering_and_faceted_search.md). The index [`uid`](/learn/core_concepts/indexes.md#index-uid) is required.

### Example

<CodeSamples id="get_filterable_attributes_1" />

#### Response: `200 Ok`

List the settings.

```json
[
  "genres",
  "director",
  "release_date.year"
]
```

### Update filterable attributes

<RouteHighlighter method="PUT" route="/indexes/{index_uid}/settings/filterable-attributes" />

Update an index's [filterable attributes list](/learn/advanced/filtering_and_faceted_search.md). This will re-index all documents in the index. The index [`uid`](/learn/core_concepts/indexes.md#index-uid) is required.

If an attribute contains an object, you can use dot notation to set one or more of its keys as a value for this setting: `"filterableAttributes": ["release_date.year"]`.

### Body

An array of strings containing the attributes that can be used as filters at query time.

[You can read more about this setting at the feature reference page.](/learn/configuration/settings.md#filterable-attributes)

### Example

<CodeSamples id="update_filterable_attributes_1" />

#### Response: `202 Accepted`

```json
{
    "taskUid": 1,
    "indexUid": "movies",
    "status": "enqueued",
    "type": "settingsUpdate",
    "enqueuedAt": "2021-08-11T09:25:53.000000Z"
}
```

You can use this `taskUid` to get more details on [the status of the task](/reference/api/tasks.md#get-one-task).

### Reset filterable attributes

<RouteHighlighter method="DELETE" route="/indexes/{index_uid}/settings/filterable-attributes"/>

Reset an index's [filterable attributes list](/learn/advanced/filtering_and_faceted_search.md) back to its default value. The index [`uid`](/learn/core_concepts/indexes.md#index-uid) is required.

### Default value

An empty array (`[]`).

### Example

<CodeSamples id="reset_filterable_attributes_1" />

#### Response: `202 Accepted`

```json
{
    "taskUid": 1,
    "indexUid": "movies",
    "status": "enqueued",
    "type": "settingsUpdate",
    "enqueuedAt": "2021-08-11T09:25:53.000000Z"
}
```

You can use this `taskUid` to get more details on [the status of the task](/reference/api/tasks.md#get-one-task).

## Pagination

_Child route of the [settings route](/reference/api/settings.md)._

This route allows you to configure the pagination settings for an index.

Pagination settings can also be updated directly through the [global settings route](/reference/api/settings.md#update-settings) along with the other settings.

To learn more about paginating search results with Meilisearch, refer to our [dedicated guide](/learn/advanced/pagination.md).

::: warning
Updating the settings means overwriting the default settings of Meilisearch. You can reset to default values using the `DELETE` routes.
:::

### Get pagination settings

<RouteHighlighter method="GET" route="/indexes/{index_uid}/settings/pagination"/>

Get the pagination settings of an index. The index [`uid`](/learn/core_concepts/indexes.md#index-uid) is required.

### Example

<CodeSamples id="get_pagination_settings_1" />

#### Response: `200 OK`

```json
{
  "maxTotalHits": 1000
}
```

### Returned fields

#### `maxTotalHits`

The maximum number of results Meilisearch can return.

### Update pagination settings

<RouteHighlighter method="PATCH" route="/indexes/{index_uid}/settings/pagination"/>

Partially update the pagination settings for an index. The index [`uid`](/learn/core_concepts/indexes.md#index-uid) is required.

### Body

#### `maxTotalHits`

**Type:** integer
**Default value:** `1000`

An integer indicating the maximum number of search results Meilisearch can return. `maxTotalHits` takes priority over search parameters such as `limit` and `offset`.

For example, if you set `maxTotalHits` to 100, you will not be able to access search results beyond 100 no matter the value configured for `offset`.

::: note
Setting `maxTotalHits` to a high value might negatively impact performance and expose instance data to malicious scraping.
:::

#### Example

<CodeSamples id="update_pagination_settings_1" />

#### Response: `200 OK`

```json
{
    "taskUid": 1,
    "indexUid": "books",
    "status": "enqueued",
    "type": "settingsUpdate",
    "enqueuedAt": "2022-04-14T20:56:44.991039Z"
}
```

You can use the returned `taskUid` to get more details on [the status of the task](/reference/api/tasks.md#get-one-task).

### Reset pagination settings

Reset an index's pagination settings to their default value. The index [`uid`](/learn/core_concepts/indexes.md#index-uid) is required.

#### Example

<CodeSamples id="reset_pagination_settings_1" />

#### Response: `200 OK`

```json
{
    "taskUid": 1,
    "indexUid": "books",
    "status": "enqueued",
    "type": "settingsUpdate",
    "enqueuedAt": "2022-04-14T20:53:32.863107Z"
}
```

You can use the returned `taskUid` to get more details on [the status of the task](/reference/api/tasks.md#get-one-task).

## Ranking rules

_Child route of the [settings route](/reference/api/settings.md)._

Ranking rules are built-in rules that allow you to **customize the relevancy of your search results**. They are stored in an array and applied in order of appearance.

Ranking rules can also be updated directly through the [global settings route](/reference/api/settings.md#update-settings) along with the other settings.

To learn more about ranking rules, refer to our [dedicated guide](/learn/core_concepts/relevancy.md).

::: warning
Updating the settings means overwriting the default settings of Meilisearch. You can reset to default values using the `DELETE` routes.
:::

### Get ranking rules

<RouteHighlighter method="GET" route="/indexes/{index_uid}/settings/ranking-rules" />

Get the [ranking rules](/learn/core_concepts/relevancy.md#ranking-rules) of an index. The index [`uid`](/learn/core_concepts/indexes.md#index-uid) is required.

#### Default value

An array that contains [ranking rules](/learn/core_concepts/relevancy.md#built-in-rules) in order of importance.

### Example

<CodeSamples id="get_ranking_rules_1" />

#### Response: `200 Ok`

List the settings.

```json
[
  "words",
  "typo",
  "proximity",
  "attribute",
  "sort",
  "exactness",
  "release_date:desc"
]
```

### Update ranking rules

<RouteHighlighter method="PUT" route="/indexes/{index_uid}/settings/ranking-rules" />

Update the [ranking rules](/learn/core_concepts/relevancy.md#ranking-rules) of an index. The index [`uid`](/learn/core_concepts/indexes.md#index-uid) is required.

#### Body

An array that contain ranking rules sorted by order of importance.

To add your own ranking rule, you have to communicate an attribute followed by a colon (`:`) and either `asc` for ascending order or `desc` for descending order.

- To apply an **ascending sort** (results sorted by increasing value): `attribute_name:asc`

- To apply a **descending sort** (results sorted by decreasing value): `attribute_name:desc`

[More information about the body](/learn/configuration/settings.md#ranking-rules).

### Example

<CodeSamples id="update_ranking_rules_1" />

#### Response: `202 Accepted`

```json
{
    "taskUid": 1,
    "indexUid": "movies",
    "status": "enqueued",
    "type": "settingsUpdate",
    "enqueuedAt": "2021-08-11T09:25:53.000000Z"
}
```

You can use this `taskUid` to get more details on [the status of the task](/reference/api/tasks.md#get-one-task).

### Reset ranking rules

<RouteHighlighter method="DELETE" route="/indexes/{index_uid}/settings/ranking-rules" />

Reset the [ranking rules](/learn/core_concepts/relevancy.md#ranking-rules) of an index to their default value. The index [`uid`](/learn/core_concepts/indexes.md#index-uid) is required.

::: tip
Note that resetting the ranking rules is not the same as removing them.
To remove a ranking rule, use the [add or replace ranking rules route](/reference/api/ranking_rules.md#update-ranking-rules).
:::

#### Default value

An array that contains the [built-in ranking rules](/learn/core_concepts/relevancy.md#built-in-rules) in the following order:

```json
[
  "words", 
  "typo", 
  "proximity", 
  "attribute", 
  "sort",
  "exactness"
]
```

#### Example

<CodeSamples id="reset_ranking_rules_1" />

#### Response: `202 Accepted`

```json
{
    "taskUid": 1,
    "indexUid": "movies",
    "status": "enqueued",
    "type": "settingsUpdate",
    "enqueuedAt": "2021-08-11T09:25:53.000000Z"
}
```

You can use this `taskUid` to get more details on [the status of the task](/reference/api/tasks.md#get-one-task).

## Searchable attributes

_Child route of the [settings route](/reference/api/settings.md)._

The values associated with attributes in the `searchableAttributes` list are **searched for matching query words**. The order of the list also determines the [attribute ranking order](/learn/core_concepts/relevancy.md#attribute-ranking-order).

Searchable attributes can also be updated directly through the [global settings route](/reference/api/settings.md#update-settings) along with the other settings.

To learn more about searchable attributes, refer to our [dedicated guide](/learn/configuration/displayed_searchable_attributes.md#searchable-fields).

::: warning
Updating the settings means overwriting the default settings of Meilisearch. You can reset to default values using the `DELETE` routes.
:::

### Get searchable attributes

<RouteHighlighter method="GET" route="/indexes/{index_uid}/settings/searchable-attributes" />

Get the [searchable attributes](/learn/configuration/displayed_searchable_attributes.md#searchable-fields) of an index. The index [`uid`](/learn/core_concepts/indexes.md#index-uid) is required.

### Example

<CodeSamples id="get_searchable_attributes_1" />

#### Response: `200 Ok`

List the settings.

```json
[
  "title",
  "overview",
  "genres",
  "release_date.year"
]
```

### Update searchable attributes

<RouteHighlighter method="PUT" route="/indexes/{index_uid}/settings/searchable-attributes" />

Update the [searchable attributes](/learn/configuration/displayed_searchable_attributes.md#searchable-fields) of an index. This will re-index all documents in the index. The index [`uid`](/learn/core_concepts/indexes.md#index-uid) is required.

If an attribute contains an object, you can use dot notation to set one or more of its keys as a value for this setting: `"searchableAttributes": ["release_date.year"]`.

::: warning
Due to an implementation bug, manually updating `searchableAttributes` will change the displayed order of document fields in the JSON response. This behavior is inconsistent and will be fixed in a future release.
:::

#### Body

An array of strings that contains searchable attributes sorted by order of importance (arranged from the most important attribute to the least important attribute).

This means that a document with a match in an attribute at the start of the array will be considered more relevant than a document with a match in an attribute at the end of the array.

[More information about the body](/learn/configuration/settings.md#searchable-attributes).

### Example

<CodeSamples id="update_searchable_attributes_1" />

A match in title will make a document more relevant than another document with a match in overview.

#### Response: `202 Accepted`

```json
{
    "taskUid": 1,
    "indexUid": "movies",
    "status": "enqueued",
    "type": "settingsUpdate",
    "enqueuedAt": "2021-08-11T09:25:53.000000Z"
}
```

You can use this `taskUid` to get more details on [the status of the task](/reference/api/tasks.md#get-one-task).

### Reset searchable attributes

<RouteHighlighter method="DELETE" route="/indexes/{index_uid}/settings/searchable-attributes"/>

Reset the [searchable attributes](/learn/configuration/displayed_searchable_attributes.md#searchable-fields) of the index to the default value. The index [`uid`](/learn/core_concepts/indexes.md#index-uid) is required.

#### Default value

All attributes found in the documents added to the index.

#### Example

<CodeSamples id="reset_searchable_attributes_1" />

#### Response: `202 Accepted`

```json
{
    "taskUid": 1,
    "indexUid": "movies",
    "status": "enqueued",
    "type": "settingsUpdate",
    "enqueuedAt": "2021-08-11T09:25:53.000000Z"
}
```

You can use this `taskUid` to get more details on [the status of the task](/reference/api/tasks.md#get-one-task).

## Sortable attributes

_Child route of the [settings route](/reference/api/settings.md)._

Sortable attributes can also be updated through the [global settings route](/reference/api/settings.md#update-settings).

Attributes that can be used together with the [`sort` search parameter](/reference/api/search.md#sort). To learn more about sortable attributes, refer to our [dedicated guide](/learn/advanced/sorting.md)

::: warning
Updating the settings means overwriting the default settings of Meilisearch. You can reset to default values using the `DELETE` routes.
:::

### Get sortable attributes

<RouteHighlighter method="GET" route="/indexes/{index_uid}/settings/sortable-attributes" />

Get an index's [`sortableAttributes`](/learn/advanced/sorting.md). The index [`uid`](/learn/core_concepts/indexes.md#index-uid) is required.

### Example

<CodeSamples id="get_sortable_attributes_1" />

#### Response: `200 Ok`

List the settings.

```json
[
  "price", 
  "author.surname"
]
```

### Update sortable attributes

<RouteHighlighter method="PUT" route="/indexes/{index_uid}/settings/sortable-attributes" />

Update an index's sortable attributes list. This will re-index all documents in the index. This will re-index all documents in the index. The index [`uid`](/learn/core_concepts/indexes.md#index-uid) is required.

If an attribute contains an object, you can use dot notation to set one or more of its keys as a value for this setting: `"sortableAttributes": ["author.surname"]`.

[You can read more about sorting at query time on our dedicated guide.](/learn/advanced/sorting.md)

### Body

An array of strings containing the attributes that can be used to sort search results at query time.

[You can read more about this setting at the feature reference page.](/learn/configuration/settings.md#sortable-attributes)

### Example

<CodeSamples id="update_sortable_attributes_1" />

#### Response: `202 Accepted`

```json
{
    "taskUid": 1,
    "indexUid": "movies",
    "status": "enqueued",
    "type": "settingsUpdate",
    "enqueuedAt": "2021-08-11T09:25:53.000000Z"
}
```

You can use this `taskUid` to get more details on [the status of the task](/reference/api/tasks.md#get-one-task).

### Reset sortable attributes

<RouteHighlighter method="DELETE" route="/indexes/{index_uid}/settings/sortable-attributes"/>

Reset an index's sortable attributes list back to its default value. The index [`uid`](/learn/core_concepts/indexes.md#index-uid) is required.

### Default value

An empty array (`[]`).

### Example

<CodeSamples id="reset_sortable_attributes_1" />

#### Response: `202 Accepted`

```json
{
    "taskUid": 1,
    "indexUid": "movies",
    "status": "enqueued",
    "type": "settingsUpdate",
    "enqueuedAt": "2021-08-11T09:25:53.000000Z"
}
```

You can use this `taskUid` to get more details on [the status of the task](/reference/api/tasks.md#get-one-task).

## Stop-words

_Child route of the [settings route](/reference/api/settings.md)._

The stop-words route allows you to add a list of words ignored in your search queries. During a search, the stop words contained in your search query will be ignored by the sorting algorithm.

When you add a common English word such as `the` to the stop-words list, Meilisearch will not take it into consideration when calculating how relevant a result is.

::: note
Stop-words are strongly related to the language used in your dataset. For example, most datasets containing English documents will have countless occurrences of `the` and `of`. Italian datasets, instead, will benefit from ignoring words like `a`, `la`, or `il`.
:::

Stop-words can also be updated directly through the [global settings route](/reference/api/settings.md#update-settings) along with the other settings.

::: warning
Updating the settings means overwriting the default settings of Meilisearch. You can reset to default values using the `DELETE` routes.
:::

### Get stop-words

<RouteHighlighter method="GET" route="/indexes/{index_uid}/settings/stop-words" />

Get the stop-words list of an index. The index [`uid`](/learn/core_concepts/indexes.md#index-uid) is required.

### Example

<CodeSamples id="get_stop_words_1" />

#### Response: `200 Ok`

```json
[
  "of",
  "the",
  "to"
]
```

### Update stop-words

<RouteHighlighter method="PUT" route="/indexes/{index_uid}/settings/stop-words" />

Update the list of stop-words of an index. This will re-index all documents in the index. The index [`uid`](/learn/core_concepts/indexes.md#index-uid) is required.

#### Body

An array of strings that contains the stop-words.

If a list of stop-words already exists it will be overwritten (_replaced_).

[More information about the body](/learn/configuration/settings.md#stop-words).

### Example

<CodeSamples id="update_stop_words_1" />

#### Response: `202 Accepted`

```json
{
    "taskUid": 1,
    "indexUid": "movies",
    "status": "enqueued",
    "type": "settingsUpdate",
    "enqueuedAt": "2021-08-11T09:25:53.000000Z"
}
```

You can use this `taskUid` to get more details on [the status of the task](/reference/api/tasks.md#get-one-task).

### Reset stop-words

<RouteHighlighter method="DELETE" route="/indexes/{index_uid}/settings/stop-words" />

Reset the list of stop-words of an index to its default value. The index [`uid`](/learn/core_concepts/indexes.md#index-uid) is required.

#### Default value

Empty array: `[]`

### Example

<CodeSamples id="reset_stop_words_1" />

#### Response: `202 Accepted`

```json
{
    "taskUid": 1,
    "indexUid": "movies",
    "status": "enqueued",
    "type": "settingsUpdate",
    "enqueuedAt": "2021-08-11T09:25:53.000000Z"
}
```

You can use this `taskUid` to get more details on [the status of the task](/reference/api/tasks.md#get-one-task).

## Synonyms

_Child route of the [settings route](/reference/api/settings.md)._

`Synonyms` is an object containing words and their respective synonyms. A synonym in Meilisearch is considered equal to its associated word in a search query.

Synonyms can also be updated directly through the [global settings route](/reference/api/settings.md#update-settings) along with the other settings.

To learn more about synonyms, refer to our [dedicated guide](/learn/configuration/synonyms.md).

::: warning
Updating the settings means overwriting the default settings of Meilisearch. You can reset to default values using the `DELETE` routes.
:::

### Get synonyms

<RouteHighlighter method="GET" route="/indexes/{index_uid}/settings/synonyms"/>

Get the list of [synonyms](/learn/configuration/synonyms.md) of an index. The index [`uid`](/learn/core_concepts/indexes.md#index-uid) is required.

#### Example

<CodeSamples id="get_synonyms_1" />

#### Response: `200 OK`

```json
{
  "wolverine": [
    "xmen",
    "logan"
  ],
  "logan": [
    "wolverine",
    "xmen"
  ],
  "wow": [
    "world of warcraft"
  ]
}
```

### Update synonyms

<RouteHighlighter method="PUT" route="/indexes/{index_uid}/settings/synonyms"/>

Update the list of [synonyms](/learn/configuration/synonyms.md) of an index. Synonyms are [normalized](/learn/configuration/synonyms.md#normalization). The index [`uid`](/learn/core_concepts/indexes.md#index-uid) is required.

#### Body

An object that contains all synonyms and their associated words.

[More information about the body](/learn/configuration/settings.md#synonyms).

#### Example

<CodeSamples id="update_synonyms_1" />

#### Response: `202 Accepted`

```json
{
    "taskUid": 1,
    "indexUid": "movies",
    "status": "enqueued",
    "type": "settingsUpdate",
    "enqueuedAt": "2021-08-11T09:25:53.000000Z"
}
```

You can use this `taskUid` to get more details on [the status of the task](/reference/api/tasks.md#get-one-task).

### Reset synonyms

<RouteHighlighter method="DELETE" route="/indexes/{index_uid}/settings/synonyms"/>

Reset the list of [synonyms](/learn/configuration/synonyms.md) of an index to its default value. The index [`uid`](/learn/core_concepts/indexes.md#index-uid) is required.

#### Default value

Empty object : `{}`

#### Example

<CodeSamples id="reset_synonyms_1" />

#### Response: `202 Accepted`

```json
{
    "taskUid": 1,
    "indexUid": "movies",
    "status": "enqueued",
    "type": "settingsUpdate",
    "enqueuedAt": "2021-08-11T09:25:53.000000Z"
}
```

You can use this `taskUid` to get more details on [the status of the task](/reference/api/tasks.md#get-one-task).

## Typo tolerance

_Child route of the [settings route](/reference/api/settings.md)._

This route allows you to configure the typo tolerance settings for an index.

Typo tolerance settings can also be updated directly through the [global settings route](/reference/api/settings.md#update-settings) along with the other settings.

To learn more about typo tolerance, refer to our [dedicated guide](/learn/configuration/typo_tolerance.md).

::: warning
Updating the settings means overwriting the default settings of Meilisearch. You can reset to default values using the `DELETE` routes.
:::

### Get typo tolerance

<RouteHighlighter method="GET" route="/indexes/{index_uid}/settings/typo-tolerance"/>

Get the typo tolerance settings of an index. The index [`uid`](/learn/core_concepts/indexes.md#index-uid) is required.

### Example

<CodeSamples id="get_typo_tolerance_1" />

#### Response: `200 OK`

```json
{
  "enabled": true,
  "minWordSizeForTypos": {
    "oneTypo": 5,
    "twoTypos": 9
  },
  "disableOnWords": [],
  "disableOnAttributes": []
}
```

### Returned fields

#### `enabled`

Whether typo tolerance is enabled or not.

#### `minWordSizeForTypos`

The minimum word length for tolerating 1 or 2 typos.

| Name       | Description                                  |
|------------|----------------------------------------------|
| `oneTypo`  | The minimum word size for tolerating 1 typo  |
| `twoTypos` | The minimum word size for tolerating 2 typos |

#### `disableOnWords`

An array of words for which the typo tolerance feature is disabled.

#### `disableOnAttributes`

An array of attributes for which the typo tolerance feature is disabled.

### Update typo tolerance

<RouteHighlighter method="PATCH" route="/indexes/{index_uid}/settings/typo-tolerance"/>

Partially update the typo tolerance settings for an index. The index [`uid`](/learn/core_concepts/indexes.md#index-uid) is required.

### Body

#### `enabled`

**Type:** boolean
**Default value:** `true`

Whether typo tolerance is enabled or not.

#### `minWordSizeForTypos`

**Type:** object

Customize the minimum word length for accepting 1 or 2 typos.

| Name       | Description                                                                       | Type    | Default value |
|------------|-----------------------------------------------------------------------------------|---------|---------------|
| `oneTypo`  | The minimum word size for accepting 1 typo; must be between `0` and `twoTypos`    | integer | `5`           |
| `twoTypos` | The minimum word size for accepting 2 typos; must be between `oneTypo` and `255`  | integer | `9`           |

#### `disableOnWords`

**Type:** array
**Default value:** `[]`

An array of words for which the typo tolerance feature is disabled.

#### `disableOnAttributes`

**Type:** array
**Default value:** `[]`

An array of attributes for which the typo tolerance feature is disabled.

#### Example

<CodeSamples id="update_typo_tolerance_1" />

#### Response: `200 OK`

```json
{
    "taskUid": 1,
    "indexUid": "books",
    "status": "enqueued",
    "type": "settingsUpdate",
    "enqueuedAt": "2022-04-14T20:56:44.991039Z"
}
```

You can use the returned `taskUid` to get more details on [the status of the task](/reference/api/tasks.md#get-one-task).

### Reset typo tolerance

Reset an index's typo tolerance settings to their default value. The index [`uid`](/learn/core_concepts/indexes.md#index-uid) is required.

#### Example

<CodeSamples id="reset_typo_tolerance_1" />

#### Response: `200 OK`

```json
{
    "taskUid": 1,
    "indexUid": "books",
    "status": "enqueued",
    "type": "settingsUpdate",
    "enqueuedAt": "2022-04-14T20:53:32.863107Z"
}
```

You can use the returned `taskUid` to get more details on [the status of the task](/reference/api/tasks.md#get-one-task).
