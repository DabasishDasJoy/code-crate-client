import React from "react";

const Blog = () => {
  return (
    <div className="bg-fixed bg-[url('')] bg-no-repeat bg-cover min-h-[100vh] bg-center">
      <div
        className={`flex justify-center items-center bg-[url("https://i.ibb.co/tY00ygg/breadcumb-bg.jpg")] py-[100px] w-full bg-cover`}
      >
        <h2 className="text-5xl text-white font-semibold uppercase">Blogs</h2>
      </div>
      <div className="backdrop-blur-sm bg-white/60">
        <div className="flex flex-col gap-5 text-[#000A38] p-10">
          <article className="mt-3">
            <h3 className="font-bold text-2xl">What is CORS?</h3>
            <p className="font-medium mt-2 pl-5">
              Cross-Origin Resource Sharing (CORS) is an HTTP-header based
              mechanism that allows a server to indicate any origins (domain,
              scheme, or port) other than its own from which a browser should
              permit loading resources. CORS also relies on a mechanism by which
              browsers make a "preflight" request to the server hosting the
              cross-origin resource, in order to check that the server will
              permit the actual request. In that preflight, the browser sends
              headers that indicate the HTTP method and headers that will be
              used in the actual request. An example of a cross-origin request:
              the front-end JavaScript code served from https://domain-a.com
              uses XMLHttpRequest to make a request for
              https://domain-b.com/data.json. For security reasons, browsers
              restrict cross-origin HTTP requests initiated from scripts. For
              example, XMLHttpRequest and the Fetch API follow the same-origin
              policy. This means that a web application using those APIs can
              only request resources from the same origin the application was
              loaded from unless the response from other origins includes the
              right CORS headers.
            </p>
          </article>
          <article>
            <h3 className="font-bold text-2xl">Why Firebase?</h3>
            <p className="font-medium mt-2 pl-5">
              Most apps need to know the identity of a user. Knowing a user's
              identity allows an app to securely save user data in the cloud and
              provide the same personalized experience across all of the user's
              devices. Firebase Authentication provides backend services,
              easy-to-use SDKs, and ready-made UI libraries to authenticate
              users to your app. It supports authentication using passwords,
              phone numbers, popular federated identity providers like Google,
              Facebook and Twitter, and more. Firebase Authentication integrates
              tightly with other Firebase services, and it leverages industry
              standards like OAuth 2.0 and OpenID Connect, so it can be easily
              integrated with your custom backend. When you upgrade to Firebase
              Authentication with Identity Platform, you unlock additional
              features, such as multi-factor authentication, blocking functions,
              user activity and audit logging, SAML and generic OpenID Connect
              support, multi-tenancy, and enterprise-level support.
              <span>
                Other options are: MongoDB, Oracle Database, Amazon Redshift,
                DataStax Enterprise, Redis Enterprise Cloud, Cloudera Enterprise
                Data Hub, Db2, Couchbase Server.
              </span>
            </p>

            <br />
          </article>
          <article>
            <h3 className="font-bold text-2xl">How does private route work?</h3>
            <p className="font-medium mt-2 pl-5">
              The private route component is similar to the public route, the
              only change is that redirect URL and authenticate condition. If
              the user is not authenticated he will be redirected to the login
              page and the user can only access the authenticated routes If he
              is authenticated (Logged in).
            </p>
          </article>
          <article>
            <h3 className="font-bold text-2xl">
              What is node? How does node work?
            </h3>
            <p className="font-medium mt-2 pl-5">
              Node.js is an open-source backend javascript runtime environment.
              It is a used as backend service where javascript works on the
              server-side of the application. This way javascript is used on
              both frontend and backend. Node.js runs on chrome v8 engine which
              converts javascript code into machine code, it is highly scalable,
              lightweight, fast, and data-intensive. Working of Node.js: Node.js
              accepts the request from the clients and sends the response, while
              working with the request node.js handles them with a single
              thread. To operate I/O operations or requests node.js use the
              concept of threads. Thread is a sequence of instructions that the
              server needs to perform. It runs parallel on the server to provide
              the information to multiple clients. Node.js is an event loop
              single-threaded language. It can handle concurrent requests with a
              single thread without blocking it for one request. Node.js
              basically works on two concept Asynchronous Non-blocking I/O
            </p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Blog;
