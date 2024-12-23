import React from 'react'
import styles from './UserPhotoPost.module.css'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import UseForm from '../../hooks/useForm'
import UseFetch from '../../hooks/useFetch'
import { PHOTO_POST } from '../../api'
import Error from '../Helper/Error'
import { useNavigate } from 'react-router-dom'
import Head from '../Helper/Head'

const UserPhotoPost = () => {
  const nome = UseForm()
  const peso = UseForm('number')
  const idade = UseForm('number')
  const {data, error, loading, request} = UseFetch()
  const navigate = useNavigate()
  const [img, setImg] = React.useState({
    preview: '',
    raw: ''
  })

  React.useEffect(() => {
    if (data) navigate('/conta')
  }, [data, navigate])

    function handleSubmit(e) {
      e.preventDefault()
      const formData = new FormData()
      formData.append('img', img.raw)
      formData.append('nome', nome.value)
      formData.append('peso', peso.value)
      formData.append('idade', idade.value)

      const token = window.localStorage.getItem('token')
      const {url, options} =  PHOTO_POST(formData, token)
      request(url, options)
    }

    function handleImgChange({target}) {
      setImg({
        preview: URL.createObjectURL(target.files[0]),
        raw: target.files[0]
      })
    }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <Head title='Poste sua foto' />
      <form onSubmit={handleSubmit}>
        <Input label='Nome' type='text' name='nome' {...nome}/>
        <Input label='Peso' type='number' name='peso' {...peso}/>
        <Input label='Idade' type='number' name='idade' {...idade}/>
        <Input className={styles.file} label='Foto' type='file' name='img' id='img' onChange={handleImgChange}/>
        {loading ? <Button disabled>Enviando...</Button> : <Button>Enviar</Button>}
        <Error error={error}/>
      </form>
      <div>
        {img.preview && <div className={styles.preview} style={{ backgroundImage: `url('${img.preview}')` }}></div>}
      </div>
    </section>
  )
}

export default UserPhotoPost
