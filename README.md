#If you want run StorybooUI
  Download and run Docker
  Then open terminal in main dir and write 
    $git branch storybookUI
  Then write in terminal $npm run docker:up, must run server in docker
  Then open terminal in client
    $yarn
    $yarn dev
    $yarn sb
#Run app and check functionality
  Open terminal and in main dir check branch must master
  Run Docker app
  Run in terminal
    $npm run docker:up-server
    $npm run docker:up-client
Frontend must be run in: ➜  Local:    http://localhost:5173/
                         ➜  Network: http://172.23.0.2:5173/
