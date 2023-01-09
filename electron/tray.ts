import { Tray, nativeImage, Menu, shell, BrowserWindow } from 'electron'
import * as path from 'path'

// 创建原生图像
export function createNativeImage(path: string) {
  return nativeImage.createFromPath(path).resize({ width: 30, height: 28 })
}

export let icon = createNativeImage(path.join(__dirname, '../public/logo.png'))

export let tray: Tray
// 主窗口
let main: BrowserWindow

// 设置托盘图标
export function setTrayIcon(mainWindow: BrowserWindow) {
  main = mainWindow
  // 初始化托盘图标
  tray = new Tray(icon)
  // 设置托盘图标悬停提示
  tray.setToolTip('TMD')
  // 设置托盘图标菜单
  setTrayIconMenu()
}

// 设置托盘图标菜单
export function setTrayIconMenu() {
  const contextMenu = Menu.buildFromTemplate([
    {
      label: '更换图标',
      submenu: [
        { label: '111', type: 'radio', checked: true, click: () => {} },
        { label: '222', type: 'radio', checked: true, click: () => {} },
      ],
    },
    { type: 'separator' },
    { label: '显示主窗口', type: 'normal', click: () => main.show() },
    { label: '隐藏主窗口', role: 'hide' },
    { label: '重启应用', role: 'reload' },
    { label: '强制重启应用', role: 'forceReload' },
    { type: 'separator' },
    { label: '关于', role: 'about' },
    {
      label: 'Github🌸',
      click: async () => await shell.openExternal('https://github.com/wangrongding'),
    },
    { type: 'separator' },
    { label: '退出', type: 'normal', role: 'quit' },
  ])
  tray.setContextMenu(contextMenu)
}
