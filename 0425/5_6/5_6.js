axios.get('https://api.example.com/data')
	.then(function (response) {
	console.log(response.data)
})

// 동기함수는 Call Stack 으로 가서 처리한다.
// 비동기함수는 Call Stack으로 가면 처리가 오래 걸려서 안쪽에 쌓인 함수가 늦게 실행되므로 
// Call Stack에서 Web API로 보내서 처리시키고
// 처리가 되면 Task Queue로 보내서 처리가 먼저 된 비동기함수 순으로
// Call Stack으로 보낸다. 