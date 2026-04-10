MSG ?= Update pagefind index

.PHONY: all dev build preview deploy

all: build
	git add public/pagefind
	git commit -m "$(MSG)"
	git push

dev:
	bun run dev

build:
	bun run build
	cp -r dist/pagefind public/

preview:
	bun run preview

deploy:
	bunx wrangler deploy
