import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'

const FileUploader = () => {
    const [fileUrl, setfileUrl] = useState('')
    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
      }, [])
      const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
      return (
<div {...getRootProps()} className='flex flex-center flex-col rounded-xl cursor-pointer'>
      <input {...getInputProps()}  className='cursor-pointer'/>
      {
        fileUrl ?(
            <div>
            test2
        </div>
        ) : (
            <div>
                test2
            </div>
        )
      }
    </div>  )
}

export default FileUploader