# Installing an SSL Certificate on a DigitalOcean Droplet
By [Jared Selcoe](https://github.com/jorions)
Austin Coding Academy Graduate
Q1 2016

## Step 1 - Set Up DigitalOcean

1. Create a DigitalOcean account

2. If you are new to DigitalOcean, or have not already added an SSH key to your account, the first thing to do is add your SSH key to your DigitalOcean profile so that you can SSH into the Droplet. Steps 1-3 in [this guide](https://www.digitalocean.com/community/tutorials/how-to-use-ssh-keys-with-digitalocean-droplets) explain this process.

    - Note that the guide has you create an SSH key. You may not need to do this if you have already created one in the past. If you already have an SSH key, all you should need to do is…

        1. Open your terminal and type cat `~/.ssh/id_rsa.pub`

        2. Copy the output

        3. Open your browser and go to [https://cloud.digitalocean.com/settings/security](https://cloud.digitalocean.com/settings/security)

        4. Click "Add SSH Key"

        5. Paste your key into the popup box, give the key a name, and click "Add SSH Key"

    - Note that the guide has you create an SSH key in the */demo* folder. Don’t save it here if you’re creating one. Save it to *~/.ssh* instead

    - Note that when you add a new SSH key to your DigitalOcean account, that key isn’t automatically being added to droplets that already exist. It is only being added to droplets that you create moving forward. To add it to a droplet that already exists you need to type `cat ~/.ssh/id_rsa.pub | ssh root@YOUR.IP.ADDRESS "cat >> ~/.ssh/authorized_keys"`

    - Lastly, if this is for a Droplet that is registered to a group account, you will need to be invited by that account to work on their Droplet, and then will need to add your SSH key to the group account by switching to that account and then using the steps shown above.

## Step 2 - Set Up Your Droplet

1. For the remainder of this guide we will assume you are creating a new Droplet from scratch, and then for the sake of example setting up a Discourse server

2. In your terminal, `ssh` into your new droplet using `ssh root@YOUR.IP.ADDRESS`

3. The terminal will prompt you to provide the password you used to set up your key. Enter it.

4. Input the information requested.

    - If you need to provide SMTP server configuration, and are using gmail, use smtp.gmail.com

5. Go to your browser and visit [https://cloud.digitalocean.com/droplets](https://cloud.digitalocean.com/droplets)

6. Click "More" > “Add A Domain” next to the Droplet you want to work on

7. Under the "Add A Domain" section of the page, enter the name of the website you want to have (such as “austincodingacademy.com”), and click “Create Record”

8. Now a new section of the page "Domains" should appear

# Learning - Intro to SSL Certificates

- What is an SSL Certificate?

    - It is a digital certificate that authenticates the identity of a website and encrypts information sent to the server using [SSL technology](https://www.digicert.com/ssl.htm).

    - SSL stands for Secure Sockets Layer, which is a standard technology for establishing an encrypted link between a client and server.

- How does an SSL Certificate Get Made?

    - Each certificate has a key pair: a private key and a public key. These keys work together to establish a secure connection.

    1. You create these keys by first creating a [Certificate Signing Request](https://www.digicert.com/csr-creation.htm) (CSR) on your server. When you do this public and private keys are created automatically, and then the CSR, which is an encoded file, provides you with a standardized way to send your public key along with some identifying information about your domain name (called your Common Name, such as "example.com" or “www.example.com”) and company, to a SSL Certificate Issuer (called a Certificate Authority or CA). Servers all come with software built for helping manage this process, but the approach is different for each server. This guide will explain how to do this for DigitalOcean Droplets.

    2. The CA uses the CSR file you sent them to create a data structure that matches your private key without compromising the key itself. This is the SSL Certificate, which the CA will then send to you. This is also called the Server Certificate or End-User Certificate because it is being installed on the server.

        - Because the SSL Certificate is based on the private key, if you ever want to move your site to a different server, or add a new subdomain to your site that is hosted on a new server, all you need is the SSL Certificate that you receive, and the private key

    3. You then install an intermediate certificate (or certificates). These are 3rd party certificates which establish the credibility of your End-User Certificate by tying it to your CA’s Root Certificate. The process of doing this changes for different servers.

    - So basically, you buy an End-User Certificate, which comes bundled with Intermediate certificates that are tied to a Root Certificate. The Root Certificate is not installed on your server - it comes pre-packaged with the browser. So basically every CA has a Root Certificate that they bundle with all of their Intermediate and End-User Certificates. This chain of certificates is called the "[chain of trust](https://support.dnsimple.com/articles/what-is-ssl-certificate-chain/)" because it starts with a single Root Certificate that is trusted, which then trickles down through other certificates to the End-User certificate.

- These CAs Hold a Lot of Power - Who Are They?

    - Anyone can create a certificate, but browsers only trust certificates from certain organizations.

    - Browsers come with a pre-installed list of trusted CAs, known as the Trusted Root CA store. It is called this because it is a storage place for all of the Root Certificates of Trusted CAs.

    - To become one of these trusted CAs a company must comply with and be audited against security and authentication standards established by the browsers.

- So How Does This All Work In Practice?

    1. When a user visits a site that has an SSL Certificate several things happen. This process is called the "SSL Handshake", and is outlined below.

    2. User’s browser requests that the site identifies itself

    3. Server sends a copy of its SSL Certificate and public key

    4. Browser checks the root certificate against its list of Trusted CA Root Certificates, and that the certificate is not expired, revoked, or inconsistent with the domain being visited. If this is successful, the browser creates, encrypts, and sends a symmetric session key using the server’s public key

    5. Server decrypts the session key using its private key and then sends back an acknowledgement encrypted with the session key to start the encrypted session

    6. Server and browser now encrypt all transmitted data with the session key

## Step 3A - Get and Install an SSL Certificate From Scratch

- NOTE: We will assume this is for a DigitalOcean Discourse server, but the general concepts should still apply for other servers. As such, the following information is based on [this guide](https://leland.me/https-discourse/) for DigitalOcean Discourse servers.

- NOTE: If you already have an SSL certificate and are just trying to move it to a new Discourse server go down to the next section, Step 3B

1. Generate your CSR and Private Key

    1. SSH into your server

    2. `cd /var/discourse/shared/standalone/ssl/`

        - NOTE: you may need to create the `ssl` folder using the `mkdir` command

        - NOTE: this file path is being used because we are assuming a Discourse server is being set up. Your own path may change.

    3. `openssl req -nodes -newkey rsa:2048 -keyout ssl.key -out ssl.csr`

        - This creates `ssl.key` (your private key) and `ssl.csr` (which includes your public key). Make sure you name the files exactly as shown otherwise your certificate may not work because the DigitalOcean Discourse server is configured to look for *ssl.key* in the *ssl* folder

    4. Answer the questions as prompted

        - For "Common Name" use the URL of your site, such as “test.example.com” or “[www.test.example.com](http://www.example.com)” - note you don’t need “http://”.

            - Depending on the Certificate Authority (CA) you are purchasing your certificate from, some will automatically take into account "www." So for example with some CAs you could give the common name “test.example.com” and the CA would then permit both variants with and without “www.” while for other CAs you would need to specify the “www.”. You will need to check with the CA to determine which is the case.

    5. You should now have 2 files - *ssl.csr* (which includes your public key) and *ssl.key* (which is your private key) - type `cat ssl.csr` to get the content of the file. Copy the output. This is what you will send to the CA.

2. Buy an SSL Certificate

    1. There are many places to do this. You can buy straight from a CA but can also buy from many intermediary resellers too. The guide linked to above lists several that are not Certificate Authorities:

        - SSLs.com

        - StartSSL.com

    2. Each company has its own process, but what you basically do is fill out a purchase form that involves you providing some information and pasting the output from cat ssl.csr

    3. You should then receive a confirmation email from the CA you purchase from or the CA that the intermediary vendor you purchased from uses.

    4. You should then receive 2 or more files that will need to be combined

        - Root CA Certificate

        - End-User (aka Server) Certificate

        - Also will receive additional Intermediate Certificates as needed

3. Combine the Certificates

    - For the sake of making this example readable let’s assume the following naming:

        - Root CA Certificate - `CARoot.crt`

        - Intermediate Certificate 1 - `Int1.crt`

        - Intermediate Certificate 2 - `Int2.crt`

        - End-User Certificate - `User.crt`

    1. These files can be combined on your local machine or on the server. Let’s assume that we are copying them onto the server and then combining them there. To copy them to the server, `cd` to the folder where your .crt files are and then use the command `scp {CARoot, Int1, Int2, User}.crt root@YOUR.IP.ADDRESS:/YOUR/PATH/TO/REMOTE/FOLDER`

        - The `/YOUR/PATH/TO/REMOTE/FOLDER` should be wherever you created your CSR file, for the sake of convenience in later steps

        - Based on the example Discourse file path we started with for this guide, your path would be */var/discourse/shared/standalone/ssl/*

    2. Now SSH into your machine, `cd` to wherever you pasted the files, and use the command `cat User.crt Int2.crt Int1.crt > ssl.crt` to create an `ssl.crt` file out of the content of the listed files

        - The order of files in the above command matters. Whatever vendor you purchased your certificates from should tell you what order to combine them in.

        - Unless otherwise specified, you shouldn’t include the root certificate (*CARoot.crt*) because your browser already has a copy of it installed, so including it in the bundle of files may cause issues

    3. Now delete all the files besides *ssl.key* and *ssl.crt* using the command `rm User.crt Int2.crt Int1.crt ssl.csr`

    4. Update your config files (again assuming this is for a DigitalOcean Discourse server)

        1. Edit *app.yml* by typing `nano /var/discourse/containers/app.yml`

            1. Update it to use the SSL template by adding `- "templates/web.ssl.template.yml"` to the `templates` section of the file.

            2. Update it to listen on port 443 if necessary. Your server may automatically have this configured already, but if not, add `- "443:443"` to the `expose` section of the file.

    5. Rebuild your app (again assuming this is for a DigitalOcean Discourse server)

        1. Type the command `/var/discourse/launcher rebuild app`

            - This can take up to 20 minutes to complete, but once it does you should be good to go!

        2. Once complete, you will have to run the command again if you need to update your Postgres database. Also, if you run into issues, running it again may resolve the problem.

## Step 3B - Get and Install an SSL Certificate From Another Server

1. SSH into your server

2. Make sure the folder */var/discourse/shared/standalone/ssl* exists. If not, create it using the `mkdir` command

3. Assuming your old server’s *ssl.key* (private key) and *ssl.crt* (SSL certificate) files have been downloaded to your local machine, copy them to your new machine using the command `scp ssl.key ssl.crt root@YOUR.IP.ADDRESS:/YOUR/PATH/TO/REMOTE/FOLDER`

4. Lastly, follow the steps from section Step 3A > #4 and #5
