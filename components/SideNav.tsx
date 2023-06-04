import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const itemsDocs = [
  {
    title: "Automode API",
    links: [
      { href: "/docs/api", children: "Introduction" },
      { href: "/docs/api/authentication", children: "Authentication" },
      { href: "/docs/api/errors", children: "Errors" },
      { href: "/docs/api/expanding_objects", children: "Expanding Responses" },
      {
        href: "/docs/api/idempotent_requests",
        children: "Idempotent Requests",
      },
      { href: "/docs/api/metadata", children: "Metadata" },
      { href: "/docs/api/pagination", children: "Pagination" },
      { href: "/docs/api/request_ids", children: "Request IDs" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/docs/api/company", children: "The Company Object" },
      { href: "/docs/api/company/create", children: "Create New Company" },
      { href: "/docs/api/company/list", children: "List All Companies" },
    ],
  },
  {
    title: "Users",
    links: [
      { href: "/docs/api/users", children: "The User Object" },
      { href: "/docs/api/users/create", children: "Create New User" },
      { href: "/docs/api/users/list", children: "List All Users" },
    ],
  },
  {
    title: "Access",
    links: [
      { href: "/docs/api/method/login", children: "Login Using Password" },
      { href: "/docs/api/method/current", children: "Get Logged In User" },
      { href: "/docs/api/method/logout", children: "Logout User" },
      { href: "/docs/api/method/forget-password", children: "Forget Password" },
      { href: "/docs/api/method/login-by-otp", children: "Login using OTP" },
    ],
  },
];

const itemsPlanner = [
  {
    title: "Requirements",
    links: [{ href: "/planner", children: "All Sprints" }],
  },
];

const itemsHome = [
  {
    title: "Home",
    links: [
      { href: "/welcome", children: "Welcome" },
      { href: "/what-is-automode", children: "What is Automode" },
      { href: "/getting-started", children: "Getting Started" },
      { href: "/faqs", children: "FAQs" },
      { href: "/common-actions", children: "Common Actions" },
    ],
  },
  {
    title: "Product Wiki",
    links: [
      { href: "/wiki/explainers", children: "Explainers" },
      { href: "/wiki/how-to-guides", children: "How To Guides" },
      { href: "/wiki/automations", children: "Automations" },
      { href: "/wiki/resources", children: "Resources" },
    ],
  },
  {
    title: "Actions",
    links: [
      {
        href: "/actions/record-new-client-requirement",
        children: "Record New Client Requirement",
      },
      {
        href: "/actions/record-new-sprint-feedback",
        children: "Record New Sprint Feedback",
      },
      {
        href: "/actions/record-new-user-story",
        children: "Record New User Story",
      },
      {
        href: "/actions/record-new-client-recievable",
        children: "Record New Client Recievable",
      },
    ],
  },
  {
    title: "Docs",
    links: [{ href: "/docs/api", children: "API" }],
  },
  {
    title: "Logs",
    links: [
      { href: "/logs/client-feedback", children: "All Feedback" },
      { href: "/logs/client-requirement", children: "All Requirements" },
      { href: "/logs/client-recievable", children: "All Recievables" },
    ],
  },
];

export function SideNav() {
  const router = useRouter();
  console.log(router.asPath);
  let items = [{}];
  if (router?.asPath === "/") {
    items = itemsHome;
  } else if (router?.asPath === "/docs/api") {
    items = itemsDocs;
  } else if (router?.asPath === "/planner") {
    items = itemsPlanner;
  } else {
    items = itemsDocs;
  }

  return (
    <nav className="sidenav">
      {items.map((item) => (
        <div key={item.title}>
          <span>{item.title}</span>
          <ul className="flex column">
            {item.links.map((link) => {
              const active = router.pathname === link.href;
              return (
                <li key={link.href} className={active ? "active" : ""}>
                  <Link {...link} />
                  <span></span>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
      <style jsx>
        {`
          nav {
            position: sticky;
            top: var(--top-nav-height);
            height: calc(100vh - var(--top-nav-height));
            flex: 0 0 auto;
            overflow-y: auto;
            padding: 2.5rem 2rem 2rem;
            border-right: 1px solid var(--border-color);
          }
          span {
            font-size: larger;
            font-weight: 500;
            padding: 0.5rem 0 0.5rem;
          }
          ul {
            padding: 0;
          }
          li {
            list-style: none;
            margin: 0;
          }
          li :global(a) {
            text-decoration: none;
          }
          li :global(a:hover),
          li.active :global(a) {
            text-decoration: underline;
          }
        `}
      </style>
    </nav>
  );
}
