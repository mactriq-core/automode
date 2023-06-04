---
title: Authentication
description: How to get started with Markdoc
---

## Authentication

{% callout %}
This is a full-featured documentation for development of the application : Automode
{% /callout %}

The Automode API uses [JWT Tokens](https://jwt.io/introduction) to authenticate requests. You can view and manage your tokens while signup and login

Your tokens carry many privileges, so be sure to keep them secure! Do not share your JWT Auth tokens in publicly accessible areas such as Github, client-side code, and so forth.

Authentication to the API is performed via [HTTP Basic Auth](https://en.wikipedia.org/wiki/Basic_access_authentication). Provide your API key as the basic auth username value. You do not need to provide a password.

All API requests must be made over [HTTPS](https://en.wikipedia.org/wiki/HTTPS). Calls made over plain HTTP will fail. API requests without authentication will also fail.

_Was this section helpful_ [Yes]() [No]()

---
