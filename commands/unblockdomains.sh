#!/bin/bash

pihole -b -d --regex '(^|\.)Hulu\.com$' '(^|\.)Netflix\.com$' '(^|\.)disneyplus\.com$' '(^|\.)primevideo\.com$' '(^|\.)roblox\.com$' '(^|\.)facebook\.com$' '(^|\.)youtube\.com$' '(^|\.)twitter\.com$' '(^|\.)whatsapp\.net$'


