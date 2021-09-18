PORTFOLIO_GITHUB_PAGE_REPO := DevPGit:RajeshSundaram/portfolio.git
CURRENT_DATE := $(shell date)
LOCAL_REPO := $(shell pwd)
TEMP_REPO := ${LOCAL_REPO}/../portfolio-temp
BASE_HREF := https://rajeshsundaram.github.io/portfolio/

default: run

run:
	@npm run start

build/dev:
	@ng build --prod --base-href="http://localhost:3001/"
	@./node_modules/lite-server/bin/lite-server --base-dir="dist"

build/github-page-docs:
	echo "Building Github page docs"
	@ng build --prod --base-href ${BASE_HREF} --output-path docs/
	
github-page/push-docs:
	@echo "Pushing docs to Github..."
	@if [ -d "./docs" ]; then \
		mkdir -p ${TEMP_REPO}; \
		mv ./docs ${TEMP_REPO}; \
		cd ${TEMP_REPO}; \
		git init; \
		git remote add origin ${PORTFOLIO_GITHUB_PAGE_REPO}; \
		git add .; \
		git commit -m "${CURRENT_DATE}"; \
		git push -f -u origin master; \
		echo "Pushed to Github"; \
		cd .. && rm -rf ${TEMP_REPO}; \
	else \
		echo "Github Docs not found. Please Build the project..."; \
		exit 1; \
	fi

deploy/github: build/github-page-docs github-page/push-docs
