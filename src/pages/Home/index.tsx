import { Checkbox, Switch, Spin, message, Image as AntImage, Button } from 'antd'
import { saveFile } from '@/utils/index'
import { getWallHavenAssets } from '@/api/index'
import _, { debounce } from 'lodash'
import { ipcRenderer } from 'electron'
import path from 'path'
import fs from 'fs'
import os from 'os'
import { downloadImage as downloadImg } from '@/utils/index'

export default function List() {
  const [loading, setLoading] = useState(false)
  const [articleList, setArticleList] = useState([])

  const onLevelChange = (checkedValues: any) => {
    console.log('checked = ', checkedValues)
  }

  const onTypeChange = (checkedValues: any) => {
    console.log('checked = ', checkedValues)
  }

  useEffect(() => {
    return () => {}
  }, [])

  return (
    <Spin spinning={loading}>
      <div className='list-page'>
        <p className='text-black bg-amber-200 leading-8 box-border pl-4 mb-4'>💡 Tip:使用鼠标左击预览图片，右击将其设为壁纸。</p>

        <div className='grid grid-cols-7 gap-4' onScroll={() => {}}>
          <AntImage.PreviewGroup>
            {articleList.map((item: any, index: number) => {
              return <div>123</div>
            })}
          </AntImage.PreviewGroup>
        </div>
        <div className='text-center mt-[30px]'>
          <Spin tip='Loading' size='small' />
        </div>
      </div>
    </Spin>
  )
}
