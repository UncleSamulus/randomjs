#!/bin/bash

# Accept two integers from the user and generate 1 random integer between them inclusively

if [ $# -ne 2 ]; then
    echo -e "ERROR: Usage $0 START END\r"
    exit 1
fi

DIFF=$(($2-$1+1))
RANDOM=$$
RANDINT=$(($(($RANDOM%$DIFF))+$1))
echo $RANDINT