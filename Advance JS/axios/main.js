//AXIOS GLOBAL
axios.defaults.headers.common['X-Auth-Token'] = 'token'

//using async await and api used is jsonplaceholder.typicode.com
// GET REQUEST
async function getTodos() {
  try{
    const res = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=10`)
    showOutput(res) 
    console.log(res)
  }catch (error) {
    console.log(error)
  }

}

// POST REQUEST
async function addTodo() {
  try{
    const res = await axios.post(`https://jsonplaceholder.typicode.com/todos`,{
      title:'New todo',
      copleted:false
    })
    showOutput(res) 
    console.log(res)
  }catch (error) {
    console.log(error)
  }
 
}

// PUT/PATCH REQUEST
async function updateTodo() {
  try{
    const res = await axios.put(`https://jsonplaceholder.typicode.com/todos/1`,{
      title:'Updated todo',
      copleted:true,
    })
    showOutput(res) 
    console.log(res)
  }catch (error) {
    console.log(error)
  }
}

// DELETE REQUEST
async function removeTodo() {
  try{
    const res = await axios.delete(`https://jsonplaceholder.typicode.com/todos/1`)
    showOutput(res) 
    console.log(res)
  }catch (error) {
    console.log(error)
  }
}

// SIMULTANEOUS DATA
async function getData() {
  try{
   const res = await axios.all([
      axios.get('https://jsonplaceholder.typicode.com/todos'),
      axios.get('https://jsonplaceholder.typicode.com/posts')
     ]);
   await axios.spread((todos,posts) => showOutput(posts))
   console.log(res)
  }catch(err){
    console.log(err)
  }

}

// CUSTOM HEADERS
async function customHeaders() {
 const config = {
  headers:{
    'Content-Type':'application/json',
    Authorization:'sometoken'
  }
 }
 try{
  const res = await axios.post(`https://jsonplaceholder.typicode.com/todos`,{
    title:'New todo',
    copleted:false
  },
  config
  )
  showOutput(res) 
  console.log(res)
}catch (error) {
  console.log(error)
}
}

// TRANSFORMING REQUESTS & RESPONSES
async function transformResponse() {
  try{
    const res = await axios.post(`https://jsonplaceholder.typicode.com/todos`,{
      data:{title:'Hello world'}
    },
    {
      transformResponse:axios.defaults.transformResponse.concat(data => {
        data.title = data.title;
        return data
     })
    }
    )
    showOutput(res) 
    console.log(res)
  }catch (error) {
    console.log(error)
  }
}

// ERROR HANDLING
async function errorHandling() {
  try{
    const res = await axios.get(`https://jsonplaceholder.typicode.com/todoss`)
    showOutput(res) 
    console.log(res)
  }catch (error){
    if(error.response){
      console.log(error.response.data)
      console.log(error.response.status);
      console.log(error.response.headers);
      if(error.response.status === 404){
        alert('Error:Page Not Found')
      }
    }
    else if(error.request){
      console.log(error.request)
    }else{
      console.log(error.message)
    }
  }

}

// CANCEL TOKEN
async function cancelToken() {
  const source = axios.CancelToken.source();
  try{
  
    const res = await axios.get(`https://jsonplaceholder.typicode.com/todos`,
    {cancelToken:source.token}
    )
    showOutput(res) 
    console.log(res)
  }catch(thrown){
    if(axios.isCancel(thrown)){
      console.log('Request Cancel',thrown.message)
    }
  }
  if(true){
    source.cancel('Request Canceled!')
  }
}
// INTERCEPTING REQUESTS & RESPONSES
axios.interceptors.request.use(
  config => {
    console.log(`${config.method.toUpperCase()} request sent to ${config.url} at 
    ${new Date().getTime()}`);

  return config
  },
   error => {
  return Promise.reject(error)
}
);
// AXIOS INSTANCES
 const axiosInstance = axios.create({
  baseURL:'https://jsonplaceholder.typicode.com'
 })

axiosInstance.get('/comments').then(res => showOutput(res));

// Show output in browser
function showOutput(res) {
  document.getElementById('res').innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
}

// Event listeners
document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('sim').addEventListener('click', getData);
document.getElementById('headers').addEventListener('click', customHeaders);
document.getElementById('transform').addEventListener('click', transformResponse);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);
