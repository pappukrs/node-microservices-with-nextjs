# Node.js Microservices

A microservices backend built around an **Express API Gateway** that fronts independent services,
each containerized and with its own **Kubernetes** manifests. Built to practice real service
decomposition — a single secure entry point, per-service Dockerfiles, and k8s-ready deployment.

## Architecture
```
Client ──► API Gateway (Express)
             • JWT auth (express-jwt)
             • Rate limiting (express-rate-limit)
             • Reverse proxy (http-proxy-middleware)
             • Response caching (lru-cache)
                  │
   ┌──────────────┼───────────────┬───────────────┬───────────────┐
 auth-service  product-service  order-service  payment-service  notification-service
 (Express +    (containerized,  (containerized, ...)            ...
  MongoDB +     k8s manifests)
  bcrypt + JWT)
k8s/ — one set of manifests per service
```

## Services
| Service | Status | Stack / Notes |
|---|---|---|
| **api-gateway** | ✅ implemented | Express, express-jwt, express-rate-limit, http-proxy-middleware, lru-cache |
| **auth-service** | ✅ implemented | Express, MongoDB (Mongoose), bcrypt, JWT |
| **product-service** | 🚧 scaffolded | Dockerfile + k8s manifests |
| **order-service** | 🚧 scaffolded | Dockerfile + k8s manifests |
| **payment-service** | 🚧 scaffolded | Dockerfile + k8s manifests |
| **notification-service** | 🚧 scaffolded | Dockerfile + k8s manifests |

## Stack
Node.js · Express · JWT · MongoDB (Mongoose) · Docker · Kubernetes

## Run locally
```bash
git clone https://github.com/pappukrs/node-microservices-with-nextjs
cd node-microservices-with-nextjs/node-microservices
# each service has its own Dockerfile + start.sh; bring them up individually or via your compose setup
# deploy to a cluster with the manifests in node-microservices/k8s/
```

## What this demonstrates
An API-gateway pattern (auth, rate limiting, proxying, caching at the edge), stateless JWT auth,
per-service containerization, and Kubernetes-ready manifests.

## License
MIT
