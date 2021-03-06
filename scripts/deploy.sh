#!/bin/bash

while IFS= read -r line; do
  echo "Building Project: $line"
  ng build -c $line
  firebase use $line
  firebase deploy --token $2
done < "$1"
