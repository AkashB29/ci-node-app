pipeline{
    agent any
    stages{
        stage('clone'){
            steps{
               git branch :"main", url: 'https://github.com/AkashB29/CI-NODE-APP.git'
            }
        }
        stage('install'){
            steps{
                bat "npm intall"
            }
        }
        stage("run"){
            steps{
                bat "npm start"
            }
        }
        stage('test'){
            steps{
                bat "npm test"
            }
        }
    }
}