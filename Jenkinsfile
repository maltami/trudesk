pipeline {
  agent any
  stages {
    stage("build") {
      steps {
        echo 'building app...'
        echo 'Jenkins polling GitHub...'        
      }
    }
    
    stage("test") {
      steps {
        echo 'testing app...'
      }
    }

    stage("deploy") {
      steps {
        echo 'deploying app...'
      }
    }

  }
}
