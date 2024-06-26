pipeline {
   agent any
   stages {
    //  stage('Install Dependencies') {
    //         steps {
    //             // Install project dependencies
                
    //         }
    //     }

      stage('setup') {
         steps {
            browserstack(credentialsId: '5bbd9162-2477-4a0c-8dc0-7ba03ac78ff9') {
            //    sh '''
            //         curl -sL https://deb.nodesource.com/setup_14.x | -E bash -
            //         apt-get install -y nodejs
            //     '''
            //    sh 'npm install'
               sh '''
                    export PATH="/opt/homebrew/opt/node@20/bin:$PATH"
                    node -v
                    npm -v
                    npm install
                    npm run bs
                '''
            }
             // Enable reporting in Jenkins
            browserStackReportPublisher 'automate'

         }
      }
    }
  }
