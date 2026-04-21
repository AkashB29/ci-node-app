pipeline {
    agent any

    stages {

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
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