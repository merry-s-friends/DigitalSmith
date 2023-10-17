.PHONY: run
run:
	poetry run python main.py

.PHONY: install
install:
	poetry install

.PHONY: update
update:
	poetry update
