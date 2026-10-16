# app — Aula 03 (Docker, Compose e Registry)

API Express usada nas atividades da Aula 03 para exercitar registry, versionamento (SemVer) e transferência delta.

[![Build and Push Docker Image](https://github.com/enzoduarte1/aula03-docker-cicd/actions/workflows/docker-build-push.yml/badge.svg)](https://github.com/enzoduarte1/aula03-docker-cicd/actions/workflows/docker-build-push.yml)

## Rodando localmente

```bash
npm install
npm start
# GET http://localhost:3000/       -> { "message": "API versionada", "version": "1.0.1" }
# GET http://localhost:3000/health -> { "status": "ok", "version": "1.0.1" }
```

## Rodando com Docker

```bash
docker build -t app:1.0.1 .
docker run --rm -p 3000:3000 app:1.0.1
```

## CI/CD

A cada `git push` na branch `main`, o workflow `.github/workflows/docker-build-push.yml` faz o build da imagem, autentica no Docker Hub usando os secrets `DOCKERHUB_USERNAME` e `DOCKERHUB_TOKEN`, e publica a imagem automaticamente com as tags `latest` e `sha-<curto>`.
