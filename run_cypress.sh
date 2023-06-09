#!/bin/bash

TESTDIR=$(readlink -f $(dirname $0))

docker run --net=host --ipc=host --rm -v $TESTDIR:/tests -w /tests cypress/included:12.4.0
