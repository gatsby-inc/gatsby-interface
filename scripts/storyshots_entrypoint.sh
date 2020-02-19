#!/bin/bash

UPDATE_SCREENSHOTS="${UPDATE:-""}"

STORYBOOK_CI=1 yarn storybook --quiet & wait-for-it.sh -t 250 localhost:6006 -- yarn test:storyshots $UPDATE_SCREENSHOTS
