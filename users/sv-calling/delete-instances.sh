#!/bin/bash

aws ec2 describe-instances --query 'Reservations[?Instances[?Tags[?Key==`sv-calling`]]].Instances[].InstanceId' --profile long-read-workshop | grep i- \
 | awk '{print $1}' \
 | sed 's/\"//g' \
 | sed 's/,//' | xargs -L1 -I% aws ec2 terminate-instances --instance-ids % --profile long-read-workshop 
