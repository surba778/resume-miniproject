<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" type="text/css" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" type="text/css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/hover.css/2.3.1/css/hover-min.css" type="text/css" />
    <link rel="stylesheet" href="assets/css/style.css" type="text/css" />
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script type="text/javascript" src="assets/js/github-information.js"></script>
    <title>Rosie</title>
</head>

<body>
    <header>
        <div class="row no-gutters">
            <a href="index.html" class="col-md-4 logo">
                
            </a>
            <div class="col-md-8">
                <div class="row no-gutters bg-color-name-title">
                    <div class="col heading">
                        <h1 class="name">Rosie Odenkirk</h1>
                        <h2 class="title">Full Stack Developer</h2>
                    </div>
                </div>
                <div class="row no-gutters">
                    <div class="col">
                        <ul id="nav" class="list-inline menucontainer">
                            <li class="col-6 col-sm-2 ui-menu-color-home list-inline-item menuitem">
                                <a href="index.html" class="hvr-sweep-to-bottom"><i class="fa fa-home" aria-hidden="true"></i><span>Home</span></a>
                            </li>
                            <li class="col-6 col-sm-2 ui-menu-color-resume list-inline-item menuitem">
                                <a href="resume.html" class="hvr-sweep-to-bottom"><i class="fa fa-graduation-cap" aria-hidden="true"></i><span>Resume</span></a>
                            </li>
                            <li class="col-6 col-sm-2 ui-menu-color-contact list-inline-item menuitem">
                                <a href="contact.html" class="hvr-sweep-to-bottom"><i class="fa fa-comment-o" aria-hidden="true"></i><span>Contact</span></a>
                            </li>
                            <li class="col-6 col-sm-2 ui-menu-color-interests list-inline-item menuitem">
                                <a href="interests.html" class="hvr-sweep-to-bottom"><i class="fa fa-users" aria-hidden="true"></i><span>Interests</span></a>
                            </li>
                            <li class="col-6 col-sm-2 ui-menu-color-github list-inline-item menuitem">
                                <a href="github.html" class="hvr-sweep-to-bottom"><i class="fa fa-github" aria-hidden="true"></i><span>GitHub</span></a>
                            </li>
                            <li class="col-6 col-sm-2 ui-menu-color-download list-inline-item menuitem">
                                <a href="assets/cv/sample-cv.pdf" target="_blank" class="hvr-sweep-to-bottom"><i class="fa fa-download" aria-hidden="true"></i><span>Download CV</span></a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </header>
    <section class="container-fluid">
        <div class="row bg-color-contact">
            <div class="col">
                <h3 class="contact-heading uppercase text-center">View My GitHub Projects</h3>
                <h5 class="uppercase text-center">You can also search on other user profiles</h5>

                <div class="center-form">
                    <input type="text" id="gh-username" value="octocat" oninput="fetchGitHubInformation()" />
                    <div id="gh-user-data"></div>
                    <div id="gh-repo-data"></div>

                </div>

            </div>
        </div>

    </section>
    <footer class="container-fluid">
        <div id="footer-details" class="row">
            <div class="col-sm-4">
                <h5 class="uppercase general-sub">About</h5>
                <p class="inline-block">
                    Full Stack Web Developer. Skilled in everything from HTML to Heroku. The capacity for structural and design thinking.
                </p>
            </div>
            <div class="col-sm-4">
                <h5 class="uppercase general-sub">Download</h5>
                <p class="inline-block">
                    Need a printable version of my CV? Download it here.
                    <a href="assets/cv/sample-cv.pdf" target="_blank" class="cv-pdf">
                        <i class="fa fa-download" aria-hidden="true"></i>
                        <span class="sr-only">Download link.</span>
                    </a>
                </p>
            </div>
            <div class="col-sm-4">
                <h5 class="uppercase general-sub">Social</h5>
                <ul class="list-inline social-links">
                    <li class="list-inline-item">
                        <a target="_blank" href="#">
                            <i class="fa fa-facebook" aria-hidden="true"></i>
                            <span class="sr-only">Facebook</span>
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a target="_blank" href="#">
                            <i class="fa fa-twitter" aria-hidden="true"></i>
                            <span class="sr-only">Twitter</span>
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a target="_blank" href="#">
                            <i class="fa fa-linkedin" aria-hidden="true"></i>
                            <span class="sr-only">LinkedIn</span>
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a target="_blank" href="#">
                            <i class="fa fa-pinterest" aria-hidden="true"></i>
                            <span class="sr-only">Pinterest</span>
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a target="_blank" href="#">
                            <i class="fa fa-instagram" aria-hidden="true"></i>
                            <span class="sr-only">Instagram</span>
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a target="_blank" href="#">
                            <i class="fa fa-youtube" aria-hidden="true"></i>
                            <span class="sr-only">YouTube</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

    </footer>
</body>

</html>