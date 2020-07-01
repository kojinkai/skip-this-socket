#!/usr/bin/env bash

function myIp {
  # get the local ip
  ifconfig | grep inet | grep broadcast | awk -v OFS="\n" '{ print $2 }'
}

export REACT_APP_NETWORK_IP=$(myIp)
yarn start
