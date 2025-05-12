#!/bin/bash

pnpm install

pnpm build

TAG=$(git rev-parse --short HEAD)

docker build . -f docker/Dockerfile --platform linux/amd64 -t docker.s.startask.net/startask2/docs-api:$TAG

docker save docker.s.startask.net/startask2/docs-api:$TAG >  ./scripts/output/docs-api-$TAG.tar

# 测试 Docker 镜像
docker build . -f docker/Dockerfile -t docker.s.startask.net/startask2/docs-api:test
docker run -p 3002:80 docker.s.startask.net/startask2/docs-api:test
