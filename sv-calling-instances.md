---
layout: page
title: SV Calling Workshop
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

</script>

****

<table id="example" class="display" style="width:100%" cellpadding="3px">
<thead>
<tr class="header">
<th>username</th>
<th>IP</th>
<th><a href='http://IP:8080' target='_blank'>terminal</a></th>
<th><a href='http://IP' target='_blank'>download files</a></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>user1</td>
<td>54.91.171.12</td>
<td><a href='http://54.91.171.12:8080' target='_blank'>terminal</a></td>
<td><a href='http://54.91.171.12' target='_blank'>download files</a></td>
</tr>
<tr class="even">
<td>user2</td>
<td>3.80.139.19</td>
<td><a href='http://3.80.139.19:8080' target='_blank'>terminal</a></td>
<td><a href='http://3.80.139.19' target='_blank'>download files</a></td>
</tr>
</tbody>
</table>

****

**Other ways to SSH into the instances**

1. Open the terminal and type the following command substituting 'ip_address' for the IP address that was assigned to you above.

        $ ssh ubuntu-user@ip_address
        
        Username: ubuntu-user
        Password: Lrs-2019

2. You can also access a terminal in the Jupterlab framework. Type the 'ip_address' followed by port 8889. For example: 'ip_address':8889. 

****

### Workshop Data Analysis

*Please scroll down the below document. If the document does not load, you can [download it here](https://s3.amazonaws.com/gt-workshop/Jackson_lab_workshopSV_FS.docx).*

<iframe src="https://view.officeapps.live.com/op/embed.aspx?src=https://github.com/TheJacksonLaboratory/long-read-workshop-2019/blob/gh-pages/docs/Jackson_lab_workshopSV_FS.docx?raw=true&embedded=true" width='100%' height='700px' frameborder='0'></iframe>


