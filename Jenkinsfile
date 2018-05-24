pipeline {
    agent { label "build" }
    environment {
         def ip = sh returnStdout: true, script: 'curl -s http://169.254.169.254/latest/meta-data/public-ipv4'
    }

    stages {
        stage("checkout"){
            steps {
                checkout scm
            }
        }

        stage("static code analysis"){
            steps {
                withSonarQubeEnv('sonarqube') {
                    sh '/opt/sonar/bin/sonar-scanner -Dsonar.projectKey=Zervmarketplace -Dsonar.sources=src'
                }
            }
        }
        stage("build docker image"){
            steps {
                sh "docker build -t zervmarketplace ."
            }
        }


        stage("env cleanup"){
            steps {
                sh returnStatus: true, script: 'docker rm -f zervmarketplace'
                sh "docker image prune -f"
            }
        }

        stage("Launch service"){
            steps {
                sh "docker run -d -p 6061:6060 --name zervmarketplace zervmarketplace"
            }
        }

        stage("Launch Info"){
            steps {
                echo "http://${ip}:6061"
            }
        }

    }
}
