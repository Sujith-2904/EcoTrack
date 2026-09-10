pipeline {
    agent any

    stages {

        stage('Git History') {
            steps {
                bat 'git log --oneline --all --decorate --graph'
            }
        }

        stage('Build') {
            steps {
                echo 'Building EcoTrack'
            }
        }
    }
}