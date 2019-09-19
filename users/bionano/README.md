# production
sh create-image.sh i-02576577b5807f23c "lrs-svcalling-v0.12-pre-release" "sv calling instance image for  pre release"

# create instances
sh create-instances.sh ami-0067ad49c9972ee8e 6 m5a.xlarge lrs-workshop-2019 fritz-workshop

# get IP addresses
sh get-ips.sh 

# create html table
# replace table header: <table id="example" class="display" style="width:100%" cellpadding="3px">
python create-table.py users.csv users
