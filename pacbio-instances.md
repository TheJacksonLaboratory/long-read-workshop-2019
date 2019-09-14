---
layout: page
title: PacBio Sequencing Workshop
---

### Instance Information

A remote computer (instance) on Amazon Web Services has been set up for use in training for each user. All instances are identical with the same working environment. You should be able to connect from PC, Mac or Linux. Please see below for the instructions.

### User Instances
 * Username: ubuntu-user
 * Password: Lrs-2019

<script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.js"></script>
<script type="text/javascript" src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>
<link href="https://cdn.datatables.net/1.10.19/css/jquery.dataTables.min.css" rel="stylesheet" type="text/css">

<script>
$(document).ready( function () {
    $('#example').DataTable();
} );
$(function(){
    $("#includedContent").load("users/pacbio/pacbio-users.html"); 
});

</script>
****

<div id="includedContent"></div>



**Other ways to SSH into the instances**

1. Open the terminal and type the following command substituting 'ip_address' for the IP address that was assigned to you above.

        $ ssh ubuntu@ip_address
        
        Username: ubuntu
        Password: jgm2018

****

### Workshop Data Analysis

*Please scroll down the below document. If the document does not load, you can [download it here](https://s3.amazonaws.com/gt-workshop/jackson-pacbio-workshop.docx).*

<iframe src="https://view.officeapps.live.com/op/embed.aspx?src=https://github.com/TheJacksonLaboratory/long-read-workshop/raw/gh-pages/users/pacbio/jackson-pacbio-workshop.docx?raw=true&embedded=true" width='100%' height='700px' frameborder='0'></iframe>


