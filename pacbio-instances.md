---
layout: page
title: PacBio Sequencing Workshop
---

### Instance Information

A remote computer (instance) on Amazon Web Services has been set up for use in training for each user. All instances are identical with the same working environment. You should be able to connect from PC, Mac or Linux. Please see below for the instructions.

<section id="section-intro" ng-controller="paginationCtrl">
    <h2>Introduction</h2>
    <a class="btn doc" href="https://github.com/lorenzofox3/smart-table-website/tree/gh-pages/sections/Introduction"><i class="icon icon-edit"></i></a><span class="bubble">improve the documentation</span>

    <p><strong>Smart table</strong> is an <a href="#">Angularjs</a> module to easily display data in a table with a set
        of built in functionalities such filetering,
        sorting, etc. While developing this module I made sure to focus on this particular points:</p>
    <ul>
        <li><strong>lightweight</strong>: smart-table is less than 13kb minified and has <strong>no
            dependencies</strong> other than Angular itself
        </li>
        <li><strong>robust</strong>: smart-table is widely tested which makes the module really stable</li>
        <li><strong>useful</strong>: smart-table will allow you to have a table on which you will be able to perform
            common operations with <strong>simple</strong> configuration
        </li>
        <li><strong>developer friendly</strong>: the design of the module has been thought carefully and it is really
            easy to get into the source code to modify/customise the module to best fit your needs.
            You will find for example:
            <ul>
                <li>on the <a href="https://github.com/lorenzofox3/Smart-Table/tree/server-sample">different branches</a> of the project some custom implementation to turn
                    smart-table into a server driven table while changing less than 10 lines
                </li>

                <li>on <a href="http://plnkr.co/edit/xsJs8m?p=preview">plunker</a>(here made by Jiri Kavulak) some custom implementation with richer
                    functionalities
                </li>
            </ul>
    </ul>
    <p>Although smart-table is from far the best table module for angular :D, there are other table modules in the
        angular ecosystem you might be interested in. The approach and philosophy are different and maybe more appropriate to your way of building web application. Among the most popular:</p>
    <ul>
        <li><a href="http://angular-ui.github.io/ng-grid/">ng-grid</a></li>
        <li><a href="http://esvit.github.io/ng-table/#!/">ng-table</a></li>
    </ul>

    <p>If you want to play around, try this <a href="http://plnkr.co/edit/8Qectt?p=preview">plunker</a></p>
</section>
			


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


