MSG ?= Update pagefind index

.PHONY: all dev build preview deploy clean

all: build
	git add public/pagefind
	git diff --cached --quiet || git commit -m "$(MSG)"
	git push

dev:
	bun run dev

build:
	bun run build
	bun run scripts/generate-og.ts
	cp -r dist/client/pagefind public/

preview:
	bun run preview

clean:
	rm -rf dist public/pagefind .astro