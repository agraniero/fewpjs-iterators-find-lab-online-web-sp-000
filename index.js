const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record){
  record.find(record => record.result==='W')
  return !!record ? record.year : undefined;
}