pipeline {
    agent any

    tools {
        nodejs 'Node18'
    }

    stages {

        stage('Clone Repository') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/AkashB29/ci-node-app.git'
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

        stage('Build Application') {
            steps {
                echo 'Build Completed'
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