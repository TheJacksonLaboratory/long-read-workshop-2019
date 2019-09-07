---
layout: page
title: PacBio Sequencing Workshop
---

### Instance Information

A remote computer (instance) on Amazon Web Services has been set up for use in training for each user. All instances are identical with the same working environment. You should be able to connect from PC, Mac or Linux. Please see below for the instructions.



<script src="assets/lib/prism/prism.js"></script>
<script src="assets/lib/angular/angular.min.js"></script>
<script src="assets/lib/bootstrap/ui-bootstrap-custom-tpls-0.4.0-SNAPSHOT.js"></script>
<script src="assets/lib/smart-table/Smart-Table.debug.js"></script>
<script src="assets/js/app.js"></script>
<link rel="stylesheet" href="assets/css/mainStyle.css"/>

<div class="main">

<section id="section-filter" ng-controller="filterCtrl">
<h2>Search/filter data</h2>


<div class="table-container">
        <smart-table class="table table-striped" config="globalConfig" columns="columnCollection" rows="rowCollection" </smart-table>
</div>

</section>
</div>



### User Instances
    


Username    |  IP              |  Terminal                                                           |  Download Files
------------|------------------|---------------------------------------------------------------------|--------------------------------------------------------------------
user1       |  3.89.37.100     |  <a href='http://3.89.37.100:8080' target='_blank'>terminal</a>     |  <a href='http://3.89.37.100' target='_blank'>download files</a>
user2       |  18.206.190.222  |  <a href='http://18.206.190.222:8080' target='_blank'>terminal</a>  |  <a href='http://18.206.190.222' target='_blank'>download files</a>
user3       |  54.237.244.151  |  <a href='http://54.237.244.151:8080' target='_blank'>terminal</a>  |  <a href='http://54.237.244.151' target='_blank'>download files</a>
user4       |  3.94.126.88     |  <a href='http://3.94.126.88:8080' target='_blank'>terminal</a>     |  <a href='http://3.94.126.88' target='_blank'>download files</a>
user5       |  34.207.105.251  |  <a href='http://34.207.105.251:8080' target='_blank'>terminal</a>  |  <a href='http://34.207.105.251' target='_blank'>download files</a>




** Other ways to SSH into the instances **

1. Open the terminal and type the following command substituting 'ip_address' for the IP address that was assigned to you above.

        $ ssh ubuntu@ip_address
        
        Username: ubuntu
        Password: jgm2018

****

### Workshop Data Analysis

*Please scroll down the below document. If the document does not load, you can [download it here](https://s3.amazonaws.com/gt-workshop/jackson-pacbio-workshop.docx).*

<iframe src="https://view.officeapps.live.com/op/embed.aspx?src=https://github.com/TheJacksonLaboratory/long-read-workshop/raw/gh-pages/users/pacbio/jackson-pacbio-workshop.docx?raw=true&embedded=true" width='100%' height='700px' frameborder='0'></iframe>


