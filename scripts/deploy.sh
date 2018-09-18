#!/bin/bash

while IFS= read -r line; do
  ng build -c $line
  firebase use $line
  firebase deploy --token $2
done < "$1"
