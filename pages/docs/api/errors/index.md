---
title: Errors
description: How to get started with Markdoc
---

## Errors

Automode uses conventional HTTP response codes to indicate the success and failure of an API request. In general: Codes in the `2xx` range indicate success. Codes in the `4xx` range indicate an error that failed given the information provided(e.g. a required parameter was omitted, a charge failed, etc.). Codes in the `5xx` range indicate an error with Automode's servers (these are rare).

Some `4xx` errors that can be handled programmatically include an error code that briefly explains the error reported.

{% code %}
| HTTP STATUS CODE SUMMARY | |
| ------------------------------- | --------------- |
| | |
| | |
| | |
| 200 - OK | Everything worked as expected. |
| | |
| 400 - Bad Request | The request was unacceptable, often due to missing a required parameter. |
| | |
| 401 - Unauthorized | No valid JWT Token/key provided. |
| | |
| 402 - Request Failed | The parameters were valid but the request failed. |
| | |
| 403 - Forbidden | The API key doesn't have permissions to perform the request. |
| | |
| 404 - Not Found | The requested resource doesn't exist. |
| | |
| 409 - Conflict | The request conflicts with another request (perhaps due to using the same idempotent key). |
| | |
| 429 - Too Many Requests | Too many requests hit the API too quickly. We recommend an exponential backoff of your requests. |
| | |
| 500,502,503,504 - Server Errors | Something went wrong on Automode's end. (These are rare.) |
| | |
{% /code %}

---

{% code %}
| ERROR TYPES | |
| ------------------------------- | --------------- |
| | |
| | |
| | |
| api_error | API errors cover any other type of problem (e.g., a temporary problem with Automode's servers), and are extremely uncommon. |
| | |
| idempotency_error | Idempotency errors occur when an Idempotency-Key is re-used on a request that does not match the first request's API endpoint and parameters. |
| | |
| invalid request errors | Invalid request errors arise when your request has invalid parameters. |
| | |
{% /code %}
