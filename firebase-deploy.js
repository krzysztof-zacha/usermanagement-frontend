const gitBranchIs = require('git-branch-is');
const childProcess = require('child_process');

gitBranchIs('master').then(isMaster => isMaster && buildAndDeploy());

function buildAndDeploy() {
  const buildProcess = childProcess.exec('npm run build');

  buildProcess.stdout.on('data', data => console.log(data.toString()));
  buildProcess.on('exit', code => {
    if (code.toString() === '0') {
    const deployProcess = childProcess.exec('npm run deploy');

    deployProcess.stdout.on('data', data => console.log(data.toString()));
    deployProcess.stderr.on('data', data => console.log(data.toString()));
    deployProcess.on('exit', code => code.toString() === '0' && console.log('Deployed successfully!'));
  }
});
}
