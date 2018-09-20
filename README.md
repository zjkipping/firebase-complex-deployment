# FirebaseComplexDeployment

## Setup
  yarn install
  yarn run start

# CI
  List of the environments are located in the environments.txt file in the root folder.
  This facilitates an easier deploy script seen in scripts/deploy.sh
  The deploy script loops over the environments.txt file and builds the correct version of the Angular App
  and deploys it to the correct firebase project.

  Jenkins provides the login credentials, as seen in the .travis.yml.

  The CI process:

    * installs the needed tooling (firebase & Angular CLI);
    * lints the project
    * run a test build of the project (checking for build errors)
    * runs the build script
    * and emails the results

  The CI process currently only runs on pushes to master.
  This should be expanded to only deploying to real projects on master,
  deploying to dev on the development branch, and linting/testing on all branches...
