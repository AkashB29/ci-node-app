pipeline {
    agent any
    
    tools {
        nodejs 'NodeJS' 
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/AkashB29/ci-node-app.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                bat 'npm test'
            }
        }
    }
    post {
        success {
            echo 'CI Pipeline Success'
        }
        failure {
            echo 'CI Pipeline Failed'
        }
    }
}