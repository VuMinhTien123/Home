import React from 'react'
import { AudioOutlined } from '@ant-design/icons';
import {CiCalendarDate} from 'react-icons/ci'
import { Input, Space } from 'antd'
import Search from 'antd/es/input/Search';
import { useController } from 'react-hook-form'


const InputPage = ({
  name = "",
  type = "text",
  children,
  control,
  enterButton,
  ...props
}) => {
  const { field } = useController({
    control,
    name,
    enterButton,
    defaultValue: ""
});
   
  const onSearch = (value) => console.log(value);
  return (
    <div>    
        <Space >
    <Search type={type} {...field} {...props} enterButton = {enterButton}  onSearch={onSearch} style={{ width: 200, padding: '6px 0' }} />
    
  </Space>
    </div>
  )
}

export default InputPage
