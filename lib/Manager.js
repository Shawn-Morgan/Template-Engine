// The first class is an Employee parent class with the following properties and


const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.officeNumber = officeNumber;
    }
    getRole() {
        return "Engineer";
    }
    getOffice() {
        return this.officeNumber;
    }

}

// Start Template Literal for Manager Card
// Generates an HTML file using User Answers
// Pulls user data from GitHub
// Uses a Template Literal that also includes style tags and inline Bootstrap styling 
function generateHTMLTeam(data, response) {
    return `<!doctype html>
    <html lang="en">
    
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    
        <title>Engineer Card</title>
        <style>
            li {
                font-size: 14px;
            }
    
            h3 {
                font-size: 24px;
            }
        </style>
    </head>
    
    <body>
        <!-- Optional JavaScript -->
        <!-- jQuery first, then Popper.js, then Bootstrap JS -->
        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
            integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
            crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
            integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
            crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
            integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
            crossorigin="anonymous"></script>
    
    
        <!-- Start Bootstrap Body-->
        <!-- <div class="jumbotron jumbotron-fluid"> -->
        <!-- <div class="container bg-white pb-5"> -->
        <!-- <h1 class="p-5 bg-danger text-center text-white">My Team</h1> -->
        <!-- Start Row-->
        <div class="row row ml-5 mr-5 mt-5">
    
            <!-- Start Card Layout-->
            <div class="col-4">
                <div class="border shadow p-3 mb-5 rounded bg-light" style="width: 18rem;">
                    <div class="card-header bg-primary text-white">
                    <h2 class="font-weight-normal">${response.data.name}</h2>
                    <h3 class="font-weight-normal">${response.data.title}</h3>
                    </div>
                    <ul class="list-group list-group-flush border mt-4 mb-4">
                    <li class="list-group-item">${response.data.id}</li>
                    <li class="list-group-item">${response.data.email}</li>
                    <li class="list-group-item">${response.data.officeNumber}</li>
                    </ul>
    
                </div>
            </div>
        </div>
        <!-- </div> -->
        <!-- </div> -->
        </div>
        </div>
        
        <!-- End container and Jumbotron-->
    
        </div>
        </div>
  
    
    </body>
    
    </html>`
}

module.exports = Manager
