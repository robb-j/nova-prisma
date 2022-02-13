#!/usr/bin/env bash

# Install dependencies
npm --prefix Prisma.novaextension i --no-audit

# Activate the extension
nova extension activate .

