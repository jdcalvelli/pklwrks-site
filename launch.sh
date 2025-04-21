#!/bin/bash

echo "--- cred check ---"
if ssh -o PasswordAuthentication=no -o BatchMode=yes root@pklwrks.dev "id root" > /dev/null 2>&1; then
	# if you exist, great. pass
	echo "Local SSH key valid on server for root user"
else
	#if it isnt there, error out
	echo "Local SSH key invalid on server for root user"
	exit 1
fi

echo "--- build local ---"
yarn build > /dev/null

echo "--- launch to endpoint ---"
ssh root@pklwrks.dev "rm -r sites/pklwrks.dev/*"
scp -r ./dist/* root@pklwrks.dev:sites/pklwrks.dev/ > /dev/null

echo "--- success ---"