// const infoDom = document.createElement('div')
// infoDom.id = "info"
// infoDom.innerHTML = `本应用正在使用 Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), 和 Electron (v${versions.electron()}) Ping(v${versions.ping})`
// document.body.appendChild(infoDom)

const func = async () => {
  const response = await window.versions.ping()
  console.log(response) // 打印 'pong'
}

func()