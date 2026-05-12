pipeline { 
 agent any 
 environment {
        // Appends Docker to the runtime path for this execution only
        PATH = "C:\\Program Files\\Docker\\Docker\\resources\\bin;${env.PATH}"
    }
 stages { 
 
  stage('Clone') { 
   steps { 
    git branch:"main",
    url:'https://github.com/AkashB29/ci-node-app.git' 
   } 
  } 
 
  stage('Install Dependencies') { 
   steps { 
    bat 'npm install' 
   } 
  } 
 
  stage('Run Application') { 
   steps { 
    bat 'node app.js' 
   } 
  } 
 
  stage('Run Tests') { 
   steps { 
    bat 'npm test' 
   } 
  } 
 
  stage('Build Docker Image') { 
   steps { 
    bat 'docker build -t ci-node-app1 .' 
   } 
  } 
 
  stage('Run Docker Container') { 
   steps { 
    bat 'docker run -d -p 3000:3000 --name ci-container ci-node-app1' 
   } 
  } 
 
 } 
 
} 