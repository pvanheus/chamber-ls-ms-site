DOCKER=docker run -u `id -u`:`id -g` -v `pwd`:/tmp/hub -w /tmp/hub
DOCKER_NOUSER=docker run -v `pwd`:/tmp/hub -w /tmp/hub

docker-npm-deps:  ## [Docker] Install NodeJS dependencies.
	$(DOCKER_NOUSER) node /bin/bash -c "npm install && chown -R `id -u`:`id -g` /tmp/hub/node_modules"

docker-build: docker-npm-deps ## [Docker] Single endpoint for docker install
	$(DOCKER) node node /tmp/hub/index.js

build: node_modules
	node index.js

node_modules: package.json
	npm install

.PHONY: build
