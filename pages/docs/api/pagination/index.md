---
title: Pagination
description: How to get started with Markdoc
---

## Pagination

All top level API resources have support for bulk fetches via 'list' API methods. For instance, you can [list users]() ,[list companies]() and [list invoices](). These API methods share a common structure, taking at least 3 parameters: `limit`, `starting_after`, and `ending_before`.

The response of a list API method represents a single page in a reverse chronological stream of objects. If you do not specify `starting_after` or `ending_before`, you will receive the first page of this stream, containing the newest objects. You can specify `starting_after` equal to the Object ID value of an item to retrieve the page of **older** objects occuring immediately **after** the named object in reverse chronological stream. Similarly you can specify `ending_before` to receive a page of **newer** objects occuring immediately **before** the named object in the stream. Objects in a page always appear in reverse chronological order. Only one of `starting_after` or `ending_before` may be used.
